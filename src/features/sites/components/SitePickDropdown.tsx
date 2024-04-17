import React from 'react';
import Dropdown from '../../../components/Dropdown/Dropdown';
import { Site } from '../types';

type SitePickDropdownTypeProps = {
  siteId: number,
  handleSiteChange: Function,
  sites: Site[],
}

const SitePickDropdown: React.FC<SitePickDropdownTypeProps> = (props) => {
  const { siteId, handleSiteChange, sites } = props;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleSiteChange(event.target.value);
  }

  const dropdownMenu = sites.map((site: Site) => (
    {
      id: site.id.toString(),
      label: site.name,
    }
  ));

  return (
    <Dropdown
        handleChange={handleChange}
        dropdownMenu={dropdownMenu}
        menuSelected={siteId.toString()}
    />
  )
}

export default SitePickDropdown;
