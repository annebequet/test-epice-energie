import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';

type Filterstype = {
  siteId: string,
}

const SitePickDropdown: React.FC = () => {
  const [filters, setFilters] = useState<Filterstype>({
    siteId: '1',
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, ['siteId']: event.target.value })
  }

  const dropdownMenu = [
    {
      id: '1',
      label: 'Site 1',
    },
    {
      id: '2',
      label: 'Site 2',
    },
  ];

  return (
    <Dropdown
        handleChange={handleChange}
        dropdownMenu={dropdownMenu}
        menuSelected={filters.siteId}
    />
  )
}

export default SitePickDropdown;