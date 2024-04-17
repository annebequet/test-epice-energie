import React from 'react';

import CardData from '../../components/Card/Card';
import { CardDataProps } from '../../components/Card/types';
import { Site } from '../../features/sites/types';

type SitesCardsMainInfosProps = {
  sites: Site[]
}

const SitesCardsMainInfos: React.FC<SitesCardsMainInfosProps> = (props) => {
  const { sites } = props

  const cardsDatas = [
    {
      title: 'Production totale',
      total: '4000',
    },
    {
      title: 'Sites Ok',
      total: '300',
    },
    {
      title: 'Sites détériorés',
      total: '1000',
    },
    {
      title: 'Sites éteints',
      total: '10',
    },
    {
      title: 'Sites sans données',
      total: '15',
    },
  ]

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-x-10 gap-y-10 flex-row content-stretch">
      {cardsDatas.map((cardData: CardDataProps) => (
        <div key={cardData.title} className="grow">
          <CardData title={cardData.title} total={cardData.total} />
        </div>
      ))}
    </div>
  )
}

export default SitesCardsMainInfos;
