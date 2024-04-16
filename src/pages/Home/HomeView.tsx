import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import DayPickDropdown from '../../features/sites/DayPickDropdown';

const HomeView: React.FC = () => {

  const breadcrumbs = [
    {
      label: 'Monitoring des sites',
      link: '/',
    },
    {
      label: 'Jour',
      component: <DayPickDropdown />
    }
  ];

  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs}/>
    
    </>
  )
}

export default HomeView;
