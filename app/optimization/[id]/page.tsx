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
            <img
              src="../../../../optimization/Folder_Structure.png"
              className="mb-3 mt-3 h-auto max-w-lg rounded-lg"
            />
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
        {params.id === 'support' && (
          <div>
            <RenderingInfoOptimization type={'optimization'} showEmail />
          </div>
        )}
        {params.id === 'analysis' && (
          <>
            <p className="font-thin text-gray-900">
              Research data management (RDM) processes and workflows can be, on
              the one hand, optimized on a project-based level for a limited
              time-frame with options to adapt for the team, group, or
              institute. On the other hand, processes can also be detailed on a
              person-based level from a team or institute level perspective. We
              offer structured support to analyze you current RDM situation from
              a process down to a metadata level: together we can assess the
              current situation along the research data cycle, discuss possible
              collaborative tools that could support specific processes, and
              provide workflow visualizations as well as a list of short-term
              and long-term optimization goals.{' '}
            </p>
            <img
              src="../../../../optimization/RDM-optimization.png"
              className="h-auto max-w-lg mx-auto rounded-lg"
            />
          </>
        )}
        {params.id === 'assessment' && (
          <>
            <p className="font-thin text-gray-900">
              A guide to support researchers to meet expectations about managing
              and sharing their digital research results and corresponding
              digital objects has been described by JA.Borghi et al. given their
              publication on the RDM Rubric. This guide can be used as
              self-assessment kit that further provides guiding information on
              how to optimize some practices. It provides descriptive categories
              that allow researchers to check the maturity of their current
              processes.
            </p>
            <p className="font-thin text-gray-900">
              The RDM-team can moreover support individual researchers, project
              consortia, reseach groups and institutes to optimize their data
              management processes. Do not hesitate to contact them for a more
              personalized or comprehensive analysis. The before described
              online-checklist, the RDM rubrik, can be found at{' '}
              <a
                className="text-gray-900 font-medium underline"
                href="https://riojournal.com/article/26439/element/3/4349040/">
                RDM Rubric by JA. Borghi et al.
              </a>{' '}
            </p>
          </>
        )}
        {params.id === 'boarding' && (
          <>
            <p className="font-thin text-gray-900">
              The majority of tenure-track faculty members in the science and
              engineering disciplines leave their research universities after
              about 10 years of being hired{' '}
              <a
                className=" underline text-gray-900"
                href="https://doi.org/10.1126/science.1214844">
                (compare https://doi.org/10.1126/science.1214844)
              </a>
              . Students working on research projects in course of their PhD
              thesis or master thesis will leave much earlier. In every case it
              makes sense to have a documented strategy on how to welcome
              newcomers or handle the transfer of knowledge, responsibilities,
              and data management when it comes to persons leaving the research
              group. Onboarding strategies allow fast processing of relevant
              topics and integration of new research staff, and thereby enable
              the continuity of research projects, facilitate data sharing and
              re-use, reduce possible data storage costs, and increase data
              reproducibility. Offboarding strategies additionally allow for a
              smooth knowledge transfer.{' '}
            </p>
            <p className="font-thin text-gray-900">
              Checklists for on- and offboarding can be found at{' '}
              <a
                className="font-medium underline text-gray-900"
                href="https://osf.io/zwxr7/">
                RDM onboarding check list by Harvard Longwood Medical Area
                Research Data Management Working Group
              </a>
              , and{' '}
              <a
                className="font-medium underline text-gray-900"
                href="https://osf.io/h5d9y/">
                RDM offboarding check list by Harvard Longwood Medical Area
                Research Data Management Working Group
              </a>{' '}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
