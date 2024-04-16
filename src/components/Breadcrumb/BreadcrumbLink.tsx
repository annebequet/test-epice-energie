import React from 'react';

import { BreadcrumbLinkType } from './types';


const BreadcrumbLink: React.FC<BreadcrumbLinkType> = (children) => {
  const { link, label } = children;
  
  return (
    <a
      href={link}
      className="
        ms-1
        text-sm
        font-medium
        text-gray-700
        hover:text-blue-600
        md:ms-2 dark:text-gray-400
        dark:hover:text-white
    "
    >
      {label}
    </a>
  )
}

export default BreadcrumbLink;

