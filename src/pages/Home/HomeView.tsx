import React from 'react';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import DayPickDropdown from '../../features/sites/DayPickDropdown';
import BasicLayout from '../../components/Layout/BasicLayout';
import CardData from '../../components/Card/Card';
import Eye from '../../components/Icons/Eye';
import { CardDataProps } from '../../components/Card/types';
import Details from '../../features/sites/Details';


const HomeView: React.FC = () => {
  const breadcrumbs = [
    {
      label: 'Monitoring des sites',
      link: '/',
    },
    {
      label: 'Jour',
      component: <DayPickDropdown />,
    },
  ];

  const cardsDatas = [
    {
      title: "Production totale",
      total: '4000',
      children: <Eye />
    },
    {
      title: "Sites Ok",
      total: '300',
      children: <Eye />
    },
    {
      title: "Sites détériorés",
      total: '1000',
      children: <Eye />
    },
    {
      title: "Sites éteints",
      total: '10',
      children: <Eye />
    },
    {
      title: "Sites sans données",
      total: '15',
      children: <Eye />
    },
  ];
  
  return (
    <BasicLayout>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="gap-y-10 flex flex-col content-stretch">
        <div className="flex flex-wrap md:flex-nowrap gap-x-10 gap-y-10 flex-row content-stretch">
          {cardsDatas.map((cardData: CardDataProps) => (
            <div key={cardData.title} className="grow">
              <CardData title={cardData.title} total={cardData.total}>
                {cardData.children}
              </CardData>
            </div>
          ))}
        </div>
        <Details />
      </div>
    </BasicLayout>
  )
}

export default HomeView;
