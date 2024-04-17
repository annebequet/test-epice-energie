import React from 'react';
import  SiteClass, { SiteAndDataType } from '../SiteDatasClass';
import { CardDataProps } from '../../../components/Card/types';
import Card from '../../../components/Card/Card';

type SitesCardsMainInfosProps = {
  sitesProcessor: SiteClass,
  sitesDatasForDay: SiteAndDataType[],
}

const SitesCardsMainInfos: React.FC<SitesCardsMainInfosProps> = (props) => {
  const { sitesProcessor, sitesDatasForDay } = props

  const siteStatus = sitesProcessor.getAllSitesStatus(sitesDatasForDay);
  
  const cardsDatas = [
    {
      title: 'Production totale',
      total: sitesProcessor.getAllSitesProduction(sitesDatasForDay).toString(),
    },
  ]

  Object.keys(siteStatus).forEach((key: string) => {
    cardsDatas.push({
      title: key,
      total: `${siteStatus[key].toString()} site(s)`,
    });
  });

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-x-10 gap-y-10 flex-row content-stretch">
      {cardsDatas.map((cardData: CardDataProps) => (
        <div key={cardData.title} className="grow">
          <Card title={cardData.title} total={cardData.total} />
        </div>
      ))}
    </div>
  )
}

export default SitesCardsMainInfos;
