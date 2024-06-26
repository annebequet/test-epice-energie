import ShadowBox from '../../../components/Layout/ShadowBox';
import Subtitle from '../../../components/Text/Subtitle';
import SiteClass, { SiteAndDataType } from '../SiteDatasClass';
import SitePickDropdown from './SitePickDropdown';
import { Site } from '../types';

type SiteDataType = {
  data: string,
  label: string,
};

type SiteDetailViewTypeProps = {
  site: Site,
  handleSiteChange: Function,
  sites: Site[],
  sitesProcessor: SiteClass,
  siteDatas: SiteAndDataType,
}

const SiteDetailsView: React.FC<SiteDetailViewTypeProps> = (props) => {
  const {
    site,
    handleSiteChange,
    sites,
    sitesProcessor,
		siteDatas,
  } = props;

	const siteProduction = sitesProcessor.getSiteProduction(siteDatas);
	const siteReferenceProd = sitesProcessor.getSiteReferenceProd(siteDatas);

  const gridDatas: SiteDataType[] = [
    {
      data: site.address,
      label: 'Adresse',
    },
    {
      data: site.start_date.toDateString(),
      label: 'Date de création',
    },
    {
      data: siteProduction.toString(),
      label: 'Production cumulée',
    },
    {
      data: sitesProcessor.getSiteProdRate(siteReferenceProd, siteProduction).toString(),
      label: 'Taux de production',
    },
    {
      data: sitesProcessor.getSiteStatus(siteDatas),
      label: 'Statut',
    },
  ];

  return (
    <ShadowBox>
      <div className="flex justify-between w-full items-baseline">
        <Subtitle subtitle={`Suivi du site ${site.id}`} />
        <SitePickDropdown
            siteId={site.id}
            handleSiteChange={handleSiteChange}
            sites={sites}
        />
      </div>
      <div className="flex gap-x-5 justify-between flex-wrap-reverse md-flex-nowrap">
        <img
          src="https://cdn.stocksnap.io/img-thumbs/960w/old-barn_HD6KC1OP4K.jpg"
          alt="site"
          className="h-auto md:w-1/3 opacity-80"
        />
        <div className="relative overflow-x-auto mt-4 grow mb-4">
          <table
            className="
              w-full
              text-sm
              text-left
              rtl:text-right
              text-custom-light-gray
            "
          >
            <tbody>
              {gridDatas.map((siteData: SiteDataType) => (
                <tr
                  className="bg-white border-b"
                  key={siteData.label}
                >
                  <th
                    scope="row"
                    className="
                      px-6
                      py-4
                      font-medium
                      text-custom-dark-gray
                      whitespace-nowrap
                    "
                  >
                    {siteData.label}
                  </th>
                  <td className="px-6 py-4 text-custom-light-gray">
                    {siteData.data}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ShadowBox>
  );
};

export default SiteDetailsView;

