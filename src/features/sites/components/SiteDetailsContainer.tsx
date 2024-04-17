import { useState } from 'react';

import Subtitle from '../../../components/Text/Subtitle';
import SiteDataClass, { SiteAndDataType } from '../SiteDatasClass';
import { Site } from '../types';
import SiteDetailsView from './SiteDetailsView';


type SiteDetailTypeProps = {
  sitesProcessor: SiteDataClass,
  sites: Site[],
  sitesDatasForDay: SiteAndDataType[] | null,
}

const SiteDetails: React.FC<SiteDetailTypeProps> = (props) => {
  const { sitesProcessor, sites, sitesDatasForDay } = props;
  const defaultSite = sitesProcessor.getSite(sites[0].id);
  const [site, setSite] = useState<Site | undefined>(defaultSite);

  const handleSiteChange = (siteId: string) =>{
    setSite(sitesProcessor.getSite(parseInt(siteId)));
  }

  const siteDatas = sitesProcessor.getSiteDatas(site?.id, sitesDatasForDay)

  return (
    <div>
    {(
      site && siteDatas && (
        <SiteDetailsView
          site={site}
          sites={sites}
          sitesProcessor={sitesProcessor}
          handleSiteChange={handleSiteChange}
          siteDatas={siteDatas}
        />

      ) || (
        <Subtitle subtitle="Pas de site" />
      )
    )}
    </div>
  );
};

export default SiteDetails;

