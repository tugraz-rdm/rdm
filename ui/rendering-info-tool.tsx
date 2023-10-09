type RenderingInfoToolProps = {
  type: 'tools';
  showEmail?: boolean;
};

export function RenderingInfoTool({
  type,
  showEmail = false,
}: RenderingInfoToolProps) {
  if (!showEmail) return null;

  let msg = '';
  switch (type) {
    case 'tools':
      msg = 'CONTACT TEAM';
      break;
  }

  return (
    <div className="inline-flex gap-x-2 rounded-lg bg-gray-900 p-2 px-4 py-2">
      <a href="mailto:damap-support@tugraz.att">
        <div className="flex justify-center text-sm font-thin text-white">
          damap-support@tugraz.at
        </div>
      </a>
    </div>
  );
}
