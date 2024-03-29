type RenderingInfoConsultingProps = {
  type: 'consulting';
  showEmail?: boolean;
};

export function RenderingInfoConsulting({
  type,
  showEmail = false,
}: RenderingInfoConsultingProps) {
  if (!showEmail) return null;

  let msg = '';
  switch (type) {
    case 'consulting':
      msg = 'CONTACT TEAM';
      break;
  }

  return (
    <>
      <div>
        <p className="mb-2 font-thin text-gray-900">General questions can be send to:</p>
        <div className="inline-flex gap-x-2 rounded-lg bg-gray-900 p-2 px-4 py-2">
          <a href="mailto:rdmteam@tugraz.at">
            <div className="flex justify-center text-sm font-thin text-white">
              rdmteam@tugraz.at
            </div>
          </a>
        </div>
        <p className="mb-2 mt-2 font-thin text-gray-900"> You can also reach the Data Stewards via individual e-mails: </p>
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
        <p className="mb-2 mt-2 font-thin text-gray-900"> Further publication support and advice on search & find services can be provided by: </p>
        <div className="inline-flex gap-x-2 rounded-lg bg-gray-900 p-2 px-4 py-2">
            <a href="mailto:alexander.bardel@tugraz.at">
              <div className="flex justify-center text-sm font-thin text-white">
              service.bibliothek@tugraz.at
              </div>
            </a>
          </div>
      </div>
    </>
  );
}
