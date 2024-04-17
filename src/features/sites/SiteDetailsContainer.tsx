import { useEffect, useState } from 'react';

import Subtitle from '../../components/Text/Subtitle';
import SiteDataClass from './SiteDatasClass';
import { Site } from './types';
import SiteDetailsView from './SiteDetailsView';


type SiteDetailTypeProps = {
  sitesProcessor: SiteDataClass,
  sites: Site[],
}

const SiteDetails: React.FC<SiteDetailTypeProps> = (props) => {
  const { sitesProcessor, sites } = props;
  const defaultSite = sitesProcessor.getSite(sites[0].id);
  const [site, setSite] = useState<Site | undefined>(defaultSite);

  const handleSiteChange = (siteId: string) =>{
    setSite(sitesProcessor.getSite(parseInt(siteId)));
  }

  return (
    <div>
    {(
      site && (
        <SiteDetailsView
          site={site}
          sites={sites}
          sitesProcessor={sitesProcessor}
          handleSiteChange={handleSiteChange}
        />

      ) || (
        <Subtitle subtitle="Pas de site" />
      )
    )}
    </div>
  );
};

export default SiteDetails;

