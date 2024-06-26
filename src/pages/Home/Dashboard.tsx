import React, { useEffect, useState } from 'react';

import SiteDetails from '../../features/sites/components/SiteDetailsContainer';
import { Site } from '../../features/sites/types';
import SitesCardsMainInfos from '../../features/sites/components/SitesCardsMainInfos';
import SiteDataClass, { SiteAndDataType } from '../../features/sites/SiteDatasClass';
import Spinner from '../../components/Loading/Spinner';
import Subtitle from '../../components/Text/Subtitle';

type DashboardProps = {
  sites: Site[],
  day: Date,
};

const Dashboard: React.FC<DashboardProps> = (props) => {
  const { sites, day } = props;

  const [sitesDatasForDay, setSitesDatasForDay] = useState<SiteAndDataType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sitesProcessor = new SiteDataClass(sites);

  const fetchAllDatasPerDay = async (daySelected: Date) => {
    setIsLoading(true);
    try {
      const allDatas = await sitesProcessor.fetchDataForDay(daySelected);
      setSitesDatasForDay(allDatas);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('an error occured');
    }
    setIsLoading(false);
  }

  useEffect(() => {
    let isApiSubscribed = false;
    fetchAllDatasPerDay(day);
    return () => {
      isApiSubscribed = true;
    }
  }, [day]);

  return (
    <div>
      {isLoading && (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      )}
      {error && !isLoading && <Subtitle subtitle={error} />}
      {sitesDatasForDay && !isLoading && (
        <div className="gap-y-10 flex flex-col content-stretch">
          <SitesCardsMainInfos
            sitesProcessor={sitesProcessor}
            sitesDatasForDay={sitesDatasForDay}
          />
          <SiteDetails
            sitesProcessor={sitesProcessor}
            sites={sites}
            sitesDatasForDay={sitesDatasForDay}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
