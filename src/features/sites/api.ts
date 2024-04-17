import { fetchData } from "../../common/apiInstance";
import { fetchDataForDay, fetchSites } from "../../data/fetch";
import { DataPoint, Site } from "./types";

type GetSiteDatasPerDayPayload = {
  siteId: number,
  day: Date,
}


export default class ApiSites {
    static getSites = async (): Promise<Site[]> =>
      fetchData<Site[]>(() => fetchSites());

    static getSiteDatasPerDay = async (
      params: GetSiteDatasPerDayPayload
    ): Promise<DataPoint[]> => {
      const { siteId, day } = params;
      return fetchData<DataPoint[]>(() => fetchDataForDay(siteId, day));
    }
}
