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
      <a href="mailto:datenschutz@tugraz.at" className="no-underline">
        <div className="flex justify-center text-sm font-thin text-white">
          datenschutz@tugraz.at
        </div>
      </a>
    </div>
  );
}
