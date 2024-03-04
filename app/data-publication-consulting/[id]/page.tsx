import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';
import LicensesForData from '../licences-for-data';
import LicensesForPersonal from '../licenses-for-personal';
import LicensesForSoftware from '../license-for-software';
import { RenderingInfoConsulting } from '#/ui/rendering-info-consulting';
import { getContentConsultingAndTitleById } from '../c-paragraph-by-id';

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
  const { content, title } = getContentConsultingAndTitleById(params.id);

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-6">
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
          {title}
        </h1>
        <p className="font-thin">{content}</p>
        {params.id === 'licenses' && (
          <div>
            <p className="font-thin text-gray-700 text-base">
              You have now decided to publish your data, which is great because
              with curated data there is a complete and clear record and the
              conclusions can be substantiated, which protects you from
              possibleF challenges, for example. However, the publication would
              not be advisable without the appropriate terms of use or licenses,
              because in this case the{' '}
              <a
                href="https://open-access.network/en/information-on-open-access/legal-issues/legal-issues-in-austria/copyright"
                className="text-gray-900">
                Austrian copyright law{' '}
              </a>
              applies, which is very restrictive. You can find a list of the
              most common licenses and further information about them here. If
              you plan to upload something to the{' '}
              <a
                className="text-gray-900"
                href="https://www.tugraz.at/sites/rdm/tools/tu-graz-repository">
                TU Graz Repository
              </a>
              (invenioRDM), it is advisable to use a license there as well.
            </p>
            <LicensesForData />
            <LicensesForSoftware />
            <LicensesForPersonal />
          </div>
        )}
        {params.id === 'support' && (
          <RenderingInfoConsulting
            showEmail={params.id === 'support'}
            type={'consulting'}
          />
        )}
        {params.id === 'goal' && (
          <>
            <p className="font-thin text-gray-900">
              Reference or citation management software allows to effectively
              create bibliographies for research publications. There are several
              examples of such tools, e.g. Zotero or Mendeley (further detailed
              in the lecture “Finding Scientific Information and Publishing Your
              Research Results”). For this topic, we can put you in contact with
              the relevant experts at the library. There are also two In-House
              Training courses available: „Literaturverwaltung mit Mendeley“ and
              „Literaturverwaltung mit Citavi (Desktop)“.
            </p>
          </>
        )}
        {params.id === 'links' && (
          <>
            <div className="flex gap-2">
              <ExternalLink href="https://www.re3data.org">
                Registry of research data repositories
              </ExternalLink>
              <ExternalLink href="https://repository.tugraz.at/">
                Instutional repository
              </ExternalLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;

export const generateStaticParams = () => {
  return [
    { id: 'support' },
    { id: 'licenses' },
    { id: 'goal' },
    { id: 'links' },
  ];
};