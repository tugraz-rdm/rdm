type RenderingInfoELabProps = {
  type: 'tools';
  showEmail?: boolean;
};

export function RenderingInfoELab({
  type,
  showEmail = false,
}: RenderingInfoELabProps) {
  if (!showEmail) return null;

  let msg = '';
  switch (type) {
    case 'tools':
      msg = 'CONTACT TEAM';
      break;
  }

  return (
    <div className="inline-flex gap-x-2 rounded-lg bg-gray-900 p-2 px-4 py-2">
      <a href="elabftw-support@tugraz.at">
        <div className="flex justify-center text-sm font-thin text-white">
          elabftw-support@tugraz.at
        </div>
      </a>
    </div>
  );
}
