type RenderingInfoDatasetProps = {
  type: 'legal-ethical-dataset';
  showEmail?: boolean;
};

export function RenderingInfoDataset({
  type,
  showEmail = false,
}: RenderingInfoDatasetProps) {
  if (!showEmail) return null;

  let msg = '';
  switch (type) {
    case 'legal-ethical-dataset':
      msg = 'CONTACT TEAM';
      break;
  }

  return (
    <div className="inline-flex gap-x-2 rounded-lg bg-gray-700 p-1 px-2 py-1 ml-2">
      <a
        href="https://tu4u.tugraz.at/fileadmin/public/Studierende_und_Bedienstete/Anleitungen/Handbuch_Datenschutz_TU_Graz.pdf"
        className="no-underline"
        target="_blank">
        <div className="flex justify-center text-sm font-thin text-white lowercase">
          handbook on data privacy
        </div>
      </a>
    </div>
  );
}

export function RenderingInfoDataProtection({
  type,
  showEmail = false,
}: RenderingInfoDatasetProps) {
  if (!showEmail) return null;

  let msg = '';
  switch (type) {
    case 'legal-ethical-dataset':
      msg = 'CONTACT TEAM';
      break;
  }

  return (
    <div className="inline-flex gap-x-2 rounded-lg bg-gray-700 p-1 px-2 py-1 ml-2">
      <a
        href="https://tu4u.tugraz.at/bedienstete/organisation-und-administration/datenschutz-und-datensicherheit/vorlagen-datenschutz-und-urheberrecht?sword_list[0]=datenschutz&no_cache=1"
        className="no-underline"
        target="_blank">
        <div className="flex justify-center text-sm font-thin text-white uppercase">
          TU4U
        </div>
      </a>
    </div>
  );
}
