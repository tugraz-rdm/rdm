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
    <div className="inline-flex gap-x-2 rounded-lg bg-gray-900 p-2 px-4 py-2">
      <a href=" cyverse-support@tugraz.at">
        <div className="flex justify-center text-sm font-thin text-white">
          cyverse-support@tugraz.at
        </div>
      </a>
    </div>
  );
}
