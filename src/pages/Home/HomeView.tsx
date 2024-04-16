import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';

type Filterstype = {
  siteId: string,
}

const HomeView: React.FC = () => {
  const [filters, setFilters] = useState<Filterstype>({
    siteId: '1',
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, ['siteId']: event.target.value })
  }

  const dropdownMenu = [
    {
      id: '1',
      label: '05/96/2024',
    },
    {
      id: '2',
      label: '05/76/2025',
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

export default HomeView
