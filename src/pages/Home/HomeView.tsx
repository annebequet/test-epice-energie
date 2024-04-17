import React from 'react';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import BasicLayout from '../../components/Layout/BasicLayout';
import CustomDatePicker from '../../components/DayPicker/DayPicker';
import { Site } from '../../features/sites/types';
import { APIError } from '../../common/api/apiErrors';
import Spinner from '../../components/Loading/Spinner';
import Subtitle from '../../components/Text/Subtitle';
import Dashboard from './Dashboard';

type HomeViewProps = {
  day: Date,
  setDay: Function,
  isLoading: boolean,
  error: APIError | null,
  sites: Site[] | null,
};

const HomeView: React.FC<HomeViewProps> = (props) => {
  const { day, setDay, isLoading, error, sites } = props;

  const breadcrumbs = [
    {
      label: 'Monitoring des sites',
      link: '/',
    },
    {
      label: 'Jour',
      component: <CustomDatePicker date={day} actionOnChange={setDay} />,
    },
  ];

  return (
    <BasicLayout>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      {isLoading && <Spinner />}
      {error && <Subtitle subtitle={error.message} />}
      {sites && <Dashboard sites={sites} day={day} />}
    </BasicLayout>
  );
};

export default HomeView;
