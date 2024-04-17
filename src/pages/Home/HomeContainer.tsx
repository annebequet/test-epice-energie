import React from "react";
import HomeView from "./HomeView";
import useFetchDatas from "../../common/useFetchDatas";
import ApiSites from "../../features/sites/api";

const HomeContainer: React.FC = () => {
    const {
        data: sites,
        error: sitesError,
        isLoading: isSitesLoading,
    } = useFetchDatas(ApiSites.getSites);

    /* const date = new Date();

    const today = useMemo(() => date, [
        date.getDate(),
        date.getFullYear(),
        date.getMonth(),
    ]);

    const {
        data: dayData,
        error: dayDatasError,
        isLoading: isDayDatasLoading,
    } = useFetchDatas(
        ApiSites.getSiteDatasPerDay,
        {
            day: today,
            siteId: 1,
        }
    ); */

    console.log(sites);
    console.log(sitesError);
    console.log(isSitesLoading);

    return (
        <HomeView />
    )
}

export default HomeContainer;
