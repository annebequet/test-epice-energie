import React from 'react'
import ShadowBox from '../Layout/ShadowBox'
import Subtitle from '../Text/Subtitle'
import { CardDataProps } from './types';

const Card: React.FC<CardDataProps> = (props) => {
  const { title, total, children } = props;

  return (
    <ShadowBox>
      <div>
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-custom-dark-blue">{total}</h4>
          <Subtitle subtitle={title} />
        </div>
      </div>
    </ShadowBox>
  )
}

export default Card;
