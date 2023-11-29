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
          <>
            <ul className="text-gray-700 font-thin p-0">
              <ul className="space-y-1 text-base list-disc list-inside font-thin text-gray-700 text-thin">
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
                      className="underline">
                      https://arx.deidentifier.org,{' '}
                    </a>
                    <a
                      href="https://pypi.org/project/data-anonymizer/"
                      className="underline">
                      https://pypi.org/project/data-anonymizer,{' '}
                    </a>
                    <a
                      href="https://github.com/topics/data-anonymization/"
                      className="underline">
                      https://github.com/topics/data-anonymization{' '}
                    </a>
                  </div>
                </li>
                <li>
                  A license should be attached to data intended for reuse.
                </li>
              </ul>
            </ul>
          </>
        )}
        {params.id === 'ethical' && (
          <>
            <ul className="text-gray-700 font-thin p-0">
              <div
                className="p-4 text-base text-gray-800 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 mb-3"
                role="alert">
                Further cases with ethical aspects:
              </div>
              <ul className="space-y-1 text-base list-disc list-inside font-thin text-gray-700 text-thin">
                <li>
                  Biological studies invasive and non-invasive medical
                  research, including research that involves taking samples such
                  as tissue from human subjects, human stem cells; and animal
                  experimentation
                </li>
                <li>Research relevant to the environment</li>
                <li>
                  Exchange of knowledge and technology with third countries
                </li>
                <li>
                  Safety-relevant research (dual use), where there is potential
                  for misuse of the research results or where there is otherwise
                  a particular risk potential, e.g. accidents.
                </li>
              </ul>
            </ul>
          </>
        )}
        {params.id === "support" && (
          <>
          <RenderingInfoEthical type={'ethical-aspects'} showEmail />
          </>
        )}
      </div>
    </div>
  );
}
