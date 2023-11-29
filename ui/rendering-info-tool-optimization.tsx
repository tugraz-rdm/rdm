type RenderingInfoOptimizationProps = {
  type: 'optimization';
  showEmail?: boolean;
};

export function RenderingInfoOptimization({
  type,
  showEmail = false,
}: RenderingInfoOptimizationProps) {
  if (!showEmail) return null;

  let msg = '';
  switch (type) {
    case 'optimization':
      msg = 'CONTACT TEAM';
      break;
  }

  return (
    <>
      <p className="font-thin gray-700 mb-2">General questions can be send to:</p>
      <div className="inline-flex gap-x-2 rounded-lg bg-gray-900 p-2 px-4 py-2">
        <a href="mailto:rdmteam@tugraz.at">
          <div className="flex justify-center text-sm font-thin text-white">
            rdmteam@tugraz.at.
          </div>
        </a>
      </div>
      <p className="mb-2 mt-2 font-thin">
        {' '}
        You can also reach the data stewards via individual mails of:
      </p>
      <div className="inline-flex gap-2">
        <div className="inline-flex gap-x-2 rounded-lg bg-gray-900 p-2 px-4 py-2">
          <a href="mailto:alexander.bardel@tugraz.at">
            <div className="flex justify-center text-sm font-thin text-white">
              alexander.bardel@tugraz.at
            </div>
          </a>
        </div>
        <div className="inline-flex gap-x-2 rounded-lg bg-gray-900 p-2 px-4 py-2">
          <a href="mailto:c.jean-quartier@tugraz.at">
            <div className="flex justify-center text-sm font-thin text-white">
              c.jean-quartier@tugraz.at
            </div>
          </a>
        </div>
        <div className="inline-flex gap-x-2 rounded-lg bg-gray-900 p-2 px-4 py-2">
          <a href="mailto:hermann.schranzhofer@tugraz.at">
            <div className="flex justify-center text-sm font-thin text-white">
              hermann.schranzhofer@tugraz.at
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
