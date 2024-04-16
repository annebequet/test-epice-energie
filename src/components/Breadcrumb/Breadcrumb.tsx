import React from 'react';

import BreadcrumbLink from './BreadcrumbLink';
import { BreadcrumbPropsType, BreadcrumbType } from './types';

const Breadcrumb: React.FC<BreadcrumbPropsType> = ({ breadcrumbs }) => {
  return (
    <nav
      className="
        justify-between
        px-4 py-3
        sm:flex
        sm:px-5
      "
      aria-label="Breadcrumb"
    >
      <ol
        className="
          inline-flex
          items-center
          mb-3
          space-x-1
          md:space-x-2
          rtl:space-x-reverse 
          sm:mb-0
          items-baseline
        "
      >
        {breadcrumbs.map(
          (breadcrumb: BreadcrumbType) =>
            (breadcrumb.link && (
              <li aria-current="page">
                <div className="flex items-center">
                  <BreadcrumbLink
                    link={breadcrumb.link}
                    label={breadcrumb.label}
                  />
                  <svg
                    className="
                      rtl:rotate-180
                      w-3
                      h-3
                      mx-1
                      text-custom-light-gray
                    "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </div>
              </li>
            )) ||
            (breadcrumb.component && (
              <div key={breadcrumb.label}>
                {breadcrumb.component && React.cloneElement(breadcrumb.component)}
              </div>
            )) || (
              <li>
                <div className="flex items-center">
                  <BreadcrumbLink
                    link="#"
                    label={breadcrumb.label}
                  />
                </div>
              </li>
            )
        )}
      </ol>
    </nav>
  )
}

export default Breadcrumb;
