import { fetchData } from "../../common/api/apiInstance";
import { fetchDataForDay, fetchSites } from "../../data/fetch";
import { DataPoint, GetSiteDatasPerDayPayload, Site } from "./types";


export default class ApiSites {
    static getSites = async (): Promise<Site[]> =>
      fetchData<Site[]>(() => fetchSites());

    static getSiteDatasPerDay = (
      params: GetSiteDatasPerDayPayload
    ) => async (): Promise<DataPoint[]> => {
      const { siteId, day } = params;
      return fetchData<DataPoint[]>(() => fetchDataForDay(siteId, day));
    }
}
