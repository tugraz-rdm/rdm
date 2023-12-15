type RenderingInfoEthicalProps = {
  type: 'ethical-aspects';
  showEmail?: boolean;
};

export function RenderingInfoEthical({
  type,
  showEmail = false,
}: RenderingInfoEthicalProps) {
  if (!showEmail) return null;

  let msg = '';
  switch (type) {
    case 'ethical-aspects':
      msg = 'CONTACT TEAM';
      break;
  }

  return (
    <>
      <p className="font-thin text-gray-900 mb-2">General questions can be send to:</p>
      <div className="inline-flex gap-x-2 rounded-lg bg-gray-900 p-2 px-4 py-2">
        <a href="mailto:rdmteam@tugraz.at">
          <div className="flex justify-center text-sm font-thin text-white">
            rdmteam@tugraz.at.
          </div>
        </a>
      </div>
      <p className="mb-2 mt-2 font-thin text-gray-900">
        {' '}
        You can also reach the Data Stewards via individual e-mails:
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
      <p className="mb-2 mt-2 font-thin text-gray-900">
        {' '}
        Questions on data privacy can be directly send to:
      </p>
      <div className="inline-flex gap-2">
        <div className="inline-flex gap-x-2 rounded-lg bg-gray-900 p-2 px-4 py-2">
          <a href="mailto:datenschutz@tugraz.at">
            <div className="flex justify-center text-sm font-thin text-white">
              datenschutz@tugraz.at
            </div>
          </a>
        </div>
      </div>
      {/* <p className="mb-3 mt-2 font-thin text-gray-700">
        {' '}
        Some templates on data privacy can be found in TU4U:
      </p>
      <a href="https://tu4u.tugraz.at/bedienstete/organisation-und-administration/datenschutz-und-datensicherheit/vorlagen-datenschutz-und-urheberrecht?sword_list[0]=datenschutz&no_cache=1">
        <div className="flex text-sm font-thin text-gray-900 underline">
          https://tu4u.tugraz.at/bedienstete/organisation-und-administration/datenschutz-und-datensicherheit/vorlagen-datenschutz-und-urheberrecht?sword_list[0]=datenschutz&no_cache=1
        </div>
      </a> */}
      <p className="mb-3 mt-2 font-thin text-gray-700">
        {' '}
        Questions on intellectual property rights can be send to:
      </p>
      <div className="inline-flex gap-x-2 rounded-lg bg-gray-900 p-2 px-4 py-2">
        <a href="mailto:forschung@tugraz.at">
          <div className="flex justify-center text-sm font-thin text-white">
            forschung@tugraz.at
          </div>
        </a>
      </div>
      <p className="mb-3 mt-2 font-thin text-gray-700">
        {' '}
        Questions on ethical issues can be directed to the ethics commission
        through:
      </p>
      <div className="inline-flex gap-x-2 rounded-lg bg-gray-900 p-2 px-4 py-2">
        <a href="mailto:manuela.berner@tugraz.at">
          <div className="flex justify-center text-sm font-thin text-white">
            manuela.berner@tugraz.at
          </div>
        </a>
      </div>
    </>
  );
}
