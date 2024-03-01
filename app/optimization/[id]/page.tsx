import ImageModal from '#/ui/image-modal';
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
              Do you need help with your folder structure? Do any of the
              following sound familiar to you: “where did I put it?”, “Oh, no,
              did someone delete it!”, or “Where is the backup”?
            </p>
            <ImageModal
              src="../../../../optimization/Folder_Structure.png"
              alt="Folder Structure"
            />
            <p className="font-thin text-gray-900">
              There are some simple rules that make a researcher’s life easier
              when it comes to organising simple tool-less data folders, such as
              the 7-folder system by GA. Miller, like the 3 layer sub-folder
              principle. Following naming conventions, the most relevant topics
              should be included in the first (top-most) layer, with a recurring
              structure in the sub-folders. Numbering allows to sort according
              to importance instead of a simple alphabetical order. Dates should
              be included systematically using YYYY-MM-TT. There are also some
              no-gos, such as saving files on your desktop, naming folders
              indistinctly as “miscellaneous”, or duplicates which are not meant
              as back-up.{' '}
            </p>
            <p className="font-thin text-gray-900 mt-3">
              You can start an optimization process by asking your group several
              questions:
            </p>
            <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
              <li>
                Is restructuring (including file migration) preferred over
                creating a new structure?{' '}
              </li>
              <li>
                Are there any local file systems which have to be integrated? Is
                digitalization of documents necessary?
              </li>
              <li>
                Are there files that can be archived and do not need to be
                accessed regularly?
              </li>
            </ul>
            <p className="font-thin text-gray-900 mt-3">
              After these questions have been answered, you can plan further
              steps, as e.g. the back-up of the old files and structure, set
              migration deadlines, or assigning and reminding of tasks to
              specific persons. After the process, those responsible have to be
              kept assigned to the tasks to keep a clean structure.
            </p>

            <p className="font-thin text-gray-900 mt-3">
              If you are interested in learning some more details, you can find
              online resources at:{' '}
            </p>
            <a
              className="text-gray-900"
              href="https://www.youtube.com/watch?v=YslfY4W-NAg"
              target="_blank"
              rel="noopener noreferrer">
              Knowledge clip: Keeping research data organized by Ugent Data
              Stewards
            </a>
            <p className="font-thin text-gray-900 mt-3">
              or a disciplinary In-depth Exercise at:{' '}
            </p>
            <a
              className="text-gray-900"
              href="https://carpentries-incubator.github.io/fair-bio-practice/09-files-organization/index.html"
              target="_blank"
              rel="noopener noreferrer">
              Carpentries-incubator.github.io
            </a>
            <p className="font-thin text-gray-900">
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
              Research data management (RDM) processes and workflows can be
              optimized on a project-based level for a limited time-frame, which
              gives the option to adapt them for a team, group, or institute.
              Alternatively, they can also be personalized with a long-term
              perspective for a team or institute. We offer structured support
              to analyse the status of your current RDM practices, all the way
              from processes down to metadata: together, we can assess the
              current situation along the research data cycle to define
              long-term optimization goals, discuss possible collaborative tools
              that could support specific processes, and provide workflow
              visualizations.{' '}
            </p>
            <ImageModal
              src="../../../../optimization/RDM-optimization.png"
              alt="RDM Optimization"
              className="h-auto max-w-lg mx-auto rounded-lg"
            />
          </>
        )}
        {params.id === 'assessment' && (
          <>
            <p className="font-thin text-gray-900">
              In 2018,{' '}
              <a
                className="text-gray-900 font-medium underline"
                href="https://doi.org/10.3897/rio.4.e26439"
                target="_blank">
                J.A. Borghi and his colleagues
              </a>{' '}
              published a guide to support researchers to meet expectations
              placed on them about managing and sharing their digital research
              results and corresponding digital objects. The guide contained the
              description of the “RDM Rubric”, a set of rules or guidelines that
              can be used as self-assessment kit to provide guiding information
              on how to optimise some practices. The RDM Rubric provides
              descriptive categories that allow researchers to check the
              maturity of their current processes.
            </p>
            <p className="font-thin text-gray-900">
              The RDM Team can support individual researchers, project
              consortia, research groups and institutes to optimize their data
              management processes. Do not hesitate to contact us for a
              personalized and comprehensive analysis. The the RDM Rubric can be
              found in the article of{' '}
              <a
                className="text-gray-900 font-medium underline"
                href="https://riojournal.com/article/26439/element/3/4349040/"
                target="_blank">
                J.A. Borghi et al.
              </a>{' '}
            </p>
          </>
        )}
        {params.id === 'boarding' && (
          <>
            <p className="font-thin text-gray-900">
              The majority of tenure-track faculty members in science and
              engineering disciplines leave their research universities after
              about 10 years of being hired{' '}
              <a
                className=" underline text-gray-900"
                href="https://doi.org/10.1126/science.1214844">
                (compare https://doi.org/10.1126/science.1214844)
              </a>
              . Students working on research projects in course of their PhD
              thesis or master thesis will leave much earlier. In all cases, it
              makes sense to have a documented strategy on how to welcome
              newcomers or handle the transfer of knowledge, responsibilities,
              and data management when persons leave a research group. A good
              onboarding strategy allows to address quickly all relevant topics
              to integrate new research staff, thus enabling the continuity of
              research projects, as well as facilitate data sharing and re-use,
              reduce possible data storage costs, and increase data
              reproducibility. Similarly, offboarding strategies y allow for a
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


export function generateStaticParams() {
  return [{ id: 'support' }, {id: 'analysis'}, {id: 'boarding'}, { id: 'datastructure' }];
}

