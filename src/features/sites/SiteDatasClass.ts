import ApiSites from "./api";
import { DataPoint, Site } from "./types";

export type SiteAndDataType = {
  siteId: number,
  data: DataPoint[]
}

export default class SiteClass {
  private sites: Site[];

  constructor(sites: Site[]) {
    this.sites = sites;
  }

  public async fetchDataForDay(day: Date): Promise<SiteAndDataType[]> {
    const requests = this.sites.map((site) =>
      ApiSites.getSiteDatasPerDay({
        siteId: site.id,
        day,
      })()
      .then((data) => ({ siteId: site.id, data }))
    );
    return Promise.all(requests);
  }

  public getSiteProduction(siteData: SiteAndDataType): number {
    return siteData.data.reduce((acc, curr) => acc + curr.production, 0);
  }

  public getSiteReferenceProd(siteData: SiteAndDataType): number {
    return siteData.data.reduce((acc, curr) => acc + curr.reference, 0);
  }

  public getSiteProdRate(
    siteReferenceProd: number,
    siteProd: number,
  ): number {
    return siteReferenceProd!== 0 
      ? (siteProd / siteReferenceProd) * 100
      : 0;
  }

  public getAllSitesProduction(data: SiteAndDataType[]): number {
    return data.reduce((total, siteData) => {
      return total + this.getSiteProduction(siteData)
    }, 0);
  }

  public getSite(
    selectedSiteId: number | undefined,
  ): Site | undefined {
    if (!selectedSiteId) return undefined;
    const selectedSite = this.sites.find((site: Site) => site.id === selectedSiteId);
    return selectedSite;
  }

  public getSiteDatas(
    selectedSiteId: number,
    allData: SiteAndDataType[] | null
  ): SiteAndDataType | undefined {
    if (!allData) return undefined;
    const selectedSiteData = allData.find((siteData) => siteData.siteId === selectedSiteId);
    return selectedSiteData;
  }

  public getSitesProdIndicators(siteData: SiteAndDataType): 
  { production: number, productionRate: number} {
    const prod = this.getSiteProduction(siteData);
    const referenceProd= this.getSiteReferenceProd(siteData)
    const prodRate = this.getSiteProdRate(referenceProd, prod);
    return {
      production: prod,
      productionRate: prodRate,
    };
  }

  public getSiteStatus(siteData: SiteAndDataType): string {
    const { production, productionRate } = this.getSitesProdIndicators(siteData)
    let siteStatus: string;

    if (siteData.data.length === 0) {
      siteStatus = "Pas de données";
    } else if (production === 0) {
      siteStatus = "À l'arrêt";
    } else if (productionRate < 50) {
      siteStatus = "Dégradé";
    } else {
      siteStatus = "OK";
    }

    return siteStatus;
  }

  public getAllSitesStatus(data: SiteAndDataType[]): Record<string, number> {
    const statusSites: Record<string, number> = {
      "Pas de données": 0,
      "À l'arrêt": 0,
      "Dégradé": 0,
      "OK": 0,
    };
    data.forEach((siteData) => {
      const status = this.getSiteStatus(siteData);
      statusSites[status] ++;
    });
    return statusSites;
  }
}