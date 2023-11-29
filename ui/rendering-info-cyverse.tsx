import { ExternalLink } from "./external-link";

type RenderingInfoCyVerseProps = {
  type: 'tu-graz-dmp-tool';
  showEmail?: boolean;
};

export function RenderingInfoCyVerse({
  type,
  showEmail = false,
}: RenderingInfoCyVerseProps) {
  if (!showEmail) return null;

  let msg = '';
  switch (type) {
    case 'tu-graz-dmp-tool':
      msg = 'CONTACT TEAM';
      break;
  }

  return (
    <>
      <div className="inline-flex gap-x-2 rounded-lg bg-gray-900 p-2 px-4 py-2">
        <a href="rdmteam@tugraz.at">
          <div className="flex justify-center text-sm font-thin text-white">
            rdmteam@tugraz.at
          </div>
        </a>
      </div>
     <p className="font-thin mt-3">For frequently asked questions (FAQ) follow to the support subsection!</p>
          <div className=" flex flex-column gap-5 whitespace-nowrap mt-3">
            <ExternalLink href="https://user.cyverse.tugraz.at/">
              Login User Portal
            </ExternalLink>
            <ExternalLink href="https://de.cyverse.tugraz.at/">
              Login Discovery Environment
            </ExternalLink>
          </div>
    </>
  );
}
