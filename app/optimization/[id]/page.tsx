import DesktopMockup from '#/ui/desktop-mockup';
import { RenderingInfoOptimization } from '#/ui/rendering-info-tool-optimization';
import { getContentOptimizationAndTitleById } from '../random-post-tab';

export default async function Page({ params }: { params: { id: string } }) {
  const { content, title } = getContentOptimizationAndTitleById(params.id);
  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-6">
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
          {title}
        </h1>
        <p className="font-thin text-gray-500">{content}</p>
        {params.id === 'datastructure' && (
          <div>
            <p className="font-thin text-gray-900">
              Do you need help with your folder structure? Does it sound
              familiar to you: where did I put it? Oh, no, did someone delete it
              and where is the backup?
            </p>
            <img src="../../../../optimization/optimization.jpeg" />
            <p className="font-thin text-gray-900">
              There are some simple rules that make a researchers life easier
              when it comes down to simple tool-less data folder options, such
              as the 7-folder system by GA. Miller including a 3 layer subfolder
              principle. Naming conventions would include most relevant topics
              at the first layer and reocurring structure similarities in the
              subfolders. Numbering allows to sort for importance instead of
              alphabet. Dates should be included systematically with YYYY-MM-TT.
              And of course there are also some Nogos, such as saving files on
              your desktop, naming folders as “miscellaeneous” indistinctively,
              or duplicates which are not meant as backup.{' '}
            </p>
            <p className="font-thin text-gray-900 mt-3">
              You can start an optimization process by asking your group if you
              prefer a restructure over a new structure inclduging the aspect of
              migrating old files? Are there local file systems which have to be
              integrated? Is digitalization of documents necessary? Are there
              files that can be archived and do not need to be accessed
              regularly? Afterwards you can plan further steps as the backup of
              the old files and structure, setting deadlines, assigning and
              reminding responsible persons. After the process, responsible
              persons have to be kept assigned to keep a clean structure.
            </p>
            <p className="font-thin mt-3">
              If you are interested in learning some more details, you can find
              online resources at:{' '}
            </p>
            <a
              href="https://www.youtube.com/watch?v=YslfY4W-NAg"
              target="_blank"
              rel="noopener noreferrer">
              Knowledge clip: Keeping research data organized by Ugent Data
              Stewards
            </a>
            <p className="font-thin mt-3">
              or a disciplinary In-depth Exercise at:{' '}
            </p>
            <a
              href="https://carpentries-incubator.github.io/fair-bio-practice/09-files-organization/index.html"
              target="_blank"
              rel="noopener noreferrer">
              Carpentries-incubator.github.io
            </a>
            <p className="font-thin mt-3">
              We can also support you and your group in optimizing an your
              structure for a suitable collaborative as well as individual
              management, also allowing newcomers not to get lost, including on-
              and off-boarding.
            </p>
          </div>
        )}
        {params.id === 'checklist' && (
          <>
            <ul className="text-gray-700 font-thin p-0">
              <ul className="space-y-1 text-base  list-disc list-inside font-thin text-gray-700 text-thin">
                <li>
                  <a
                    className="underline"
                    href="https://riojournal.com/article/26439/element/3/4349040/"
                    target="_blank"
                    rel="noopener noreferrer">
                    RDM Rubric by JA. Borghi et al.
                  </a>
                </li>
                <li>
                  <a
                    className="underline"
                    href="https://osf.io/zwxr7/"
                    target="_blank"
                    rel="noopener noreferrer">
                    RDM onboarding check list by Harvard Longwood Medical Area
                    Research Data Management Working Group
                  </a>
                </li>
                <li>
                  <a
                    className="underline"
                    href="https://osf.io/h5d9y/"
                    target="_blank"
                    rel="noopener noreferrer">
                    RDM offboarding check list by Harvard Longwood Medical Area
                    Research Data Management Working Group{' '}
                  </a>
                </li>
              </ul>
            </ul>
          </>
        )}
        {params.id === 'support' && (
          <div>
            <RenderingInfoOptimization type={'optimization'} showEmail />
          </div>
        )}
      </div>
    </div>
  );
}