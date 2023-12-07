import { RenderingInfoDataset } from '#/ui/rendering-info-datasset';
import { RenderingInfoEthical } from '#/ui/rendering-info-tool-ethical';
import { getContentLegalEthicalAspectsAndTitleById } from '../random-post-tab';

export default async function Page({ params }: { params: { id: string } }) {
  const { content, title } = getContentLegalEthicalAspectsAndTitleById(
    params.id
  );
  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-6">
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
          {title}
        </h1>
        <p className="font-thin text-gray-500">{content}</p>
        {params.id === 'considerations' && (
          <div>
            <ul className="text-gray-700 font-thin p-0">
              <ul className="space-y-1 text-sm list-disc list-inside font-thin text-gray-700 text-thin">
                <li>
                  A suitable strategy has to be found for all phases of data
                  collection, sharing and (re)using!
                </li>
                <li>
                  Storage on any computer should, at least be password-protected
                  and ideally be encrypted. Sensitive data should not be stored
                  on a cloud service, and be backed up ideally by IT services
                  (e.g. network drive with defined access rights).
                </li>
                <li>
                  Before publication or sharing, data should be anonymized.
                  De-identification does not just mean removing people's names
                  from a file. Tequniques involve data masking, data
                  pseudonymization, data swapping, generalization, up to data
                  perturbation and synthetic data. (Manual data preocessing or
                  exemplary tools:
                  <div className="grid text-gray-900 font-thin">
                    <a
                      href="https://arx.deidentifier.org"
                      className="underline text-gray-700">
                      https://arx.deidentifier.org,{' '}
                    </a>
                    <a
                      href="https://pypi.org/project/data-anonymizer/"
                      className="underline text-gray-700">
                      https://pypi.org/project/data-anonymizer,{' '}
                    </a>
                    <a
                      href="https://github.com/topics/data-anonymization/"
                      className="underline text-gray-700">
                      https://github.com/topics/data-anonymization{' '}
                    </a>
                  </div>
                </li>
                <li>
                  A license should be attached to data intended for reuse.
                </li>
              </ul>
            </ul>
          </div>
        )}
        {params.id === 'ethical' && (
          <div className="prose prose-sm prose-invert max-w-none">
            <div
              className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
              role="alert">
              Further cases with ethical aspects:
            </div>
            <ul className="space-y-1 text-sm list-disc list-inside font-thin text-gray-700 text-thin">
              <li>
                Biological studies invasive and non-invasive medical research,
                including research that involves taking samples such as tissue
                from human subjects, human stem cells; and animal
                experimentation
              </li>
              <li>Research relevant to the environment</li>
              <li>Exchange of knowledge and technology with third countries</li>
              <li>
                Safety-relevant research (dual use), where there is potential
                for misuse of the research results or where there is otherwise a
                particular risk potential, e.g. accidents.
              </li>
            </ul>
          </div>
        )}
        {params.id === 'support' && (
          <>
            <RenderingInfoEthical type={'ethical-aspects'} showEmail />
          </>
        )}
        {params.id === 'legal' && (
          <div className="prose prose-sm prose-invert max-w-none">
            <div
              className="p-4 text-thin text-sm text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
              role="alert">
              Typical cases with legal (and ethical) aspects:
            </div>
            <ul className="space-y-1 text-sm list-disc list-inside font-thin text-gray-700 text-thin">
              <li>
                Studies using (collecting, archiving) personal or confidential
                data, including trade secrets, data protected by intellectual
                property rights security, safety; combination of datasets that
                lead to sensitive information.
              </li>
              <li>
                {' '}
                Personal and sensitive metadata, including studies or research
                with people (surveys).
              </li>
            </ul>
            <div
              className="p-4 text-thin text-sm text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
              role="alert">
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              Informed consent for research conducted with people, has to be
              considered throughout the research lifecycle!
            </div>
            <ul className="space-y-1 list-disc text-sm list-inside font-thin text-gray-700 text-thin">
              <li>
                Participants have to understand what the research will involve
                and consent, what data will be collected and how it will be
                used, especially if it may reveal identities
              </li>
              <li>
                Be specific and granular so that you get separate consent for
                separate things.
              </li>
              <li>Check DSGVO</li>
              <li>Document consent (required content see beneath)</li>
            </ul>
            <div
              className="p-4 text-thin text-sm text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
              role="alert">
              Therefore, informed consent forms necessary in particular for
              surveys have to detail:
            </div>
            <ul className="space-y-1 text-sm list-disc list-inside font-thin text-gray-700 text-thin">
              <li>Project title</li>
              <li>
                Detailing information on all data collected, data categories,
                corresponding scope
              </li>
              <li>
                Data handling processes, storage location and indicating the
                persons having access to the data
              </li>
              <li>
                Storage period, and what happens to the data after this time
                period
              </li>
              <li>
                Indication of the voluntary nature of participation, withdrawal
                rights
              </li>
              <li>
                And the contact of the responsible person of data collection and
                use in case of inquiries or withdrawa
              </li>
            </ul>
            <div
              className="p-4 flex items-center text-thin text-sm text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
              role="alert">
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div className="font-regular">
                If you have any data protection concerns, please contact{' '}
                <RenderingInfoDataset
                  showEmail
                  type={'legal-ethical-dataset'}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
