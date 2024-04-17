import React, { useState, } from 'react';

import HomeView from './HomeView';
import ApiSites from '../../features/sites/api';
import useFetchDatas from '../../common/api/useFetchDatas';

const HomeContainer: React.FC = () => {
  const [day, setDay] = useState<Date>(new Date());

  const {
    datas: sites,
    error,
    isLoading,
  } = useFetchDatas(ApiSites.getSites);

  return (
    <HomeView
      sites={sites}
      isLoading={isLoading}
      error={error}
      day={day}
      setDay={setDay}
    />
  )
}

export default HomeContainer
