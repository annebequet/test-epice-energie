import React from "react";
import HomeView from "./HomeView";
import ApiSites from "../../features/sites/api";
import useFetchDatas from "../../common/api/useFetchDatas";

const HomeContainer: React.FC = () => {
    const {
        datas: sites,
        error: sitesError,
        isLoading: isSitesLoading,
    } = useFetchDatas(ApiSites.getSites);

    const day = new Date();

    const {
        datas: dayData,
        error: dayDatasError,
        isLoading: isDayDatasLoading,
    } = useFetchDatas(ApiSites.getSiteDatasPerDay(
        {
            siteId: 1,
            day,
        }
    ));

    console.log(sites);
    console.log(sitesError);
    console.log(isSitesLoading);
    console.log(dayData);


    return (
        <HomeView />
    )
}

export default HomeContainer;
