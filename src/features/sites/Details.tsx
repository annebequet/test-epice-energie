import ShadowBox from '../../components/Layout/ShadowBox'
import Subtitle from '../../components/Text/Subtitle'
import SitePickDropdown from './SitePickDropdown'

type SiteDataType = {
  data: string
  label: string
}

const Details = () => {
  const site = {
    id: 1234,
    name: 'Ferme des Petits Bisons',
    address: '456 rue de la Grande Montée\n45630 Curry',
    max_power: 63.54,
    start_date: new Date(2020, 10, 10),
    picture: 'https://cdn.stocksnap.io/img-thumbs/960w/old-barn_HD6KC1OP4K.jpg',
  }

  const siteDatas: SiteDataType[] = [
    {
      data: site.address,
      label: 'Adresse',
    },
    {
      data: site.start_date.toDateString(),
      label: 'Date de création',
    },
    {
      data: site.max_power.toString(),
      label: 'Production max',
    },
  ]

  return (
    <ShadowBox>
      <div className="flex justify-between w-full items-baseline">
        <Subtitle subtitle={`Suivi du site ${site.id}`} />
        <SitePickDropdown />
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
              {siteDatas.map((siteData: SiteDataType) => (
                <tr className="bg-white border-b">
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
  )
}

export default Details
