type RenderingInfoRepositoryProps = {
  type: 'tu-graz-repository';
  showEmail?: boolean;
};

export function RenderingInfoRepository({
  type,
  showEmail = false,
}: RenderingInfoRepositoryProps) {
  if (!showEmail) return null;

  let msg = '';
  switch (type) {
    case 'tu-graz-repository':
      msg = 'CONTACT TEAM';
      break;
  }

  return (
    <div className="inline-flex gap-x-2 rounded-lg bg-gray-900 p-2 px-4 py-2">
      <a href="repositroy-support@tugraz.at">
        <div className="flex justify-center text-sm font-thin text-white">
          repositroy-support@tugraz.at
        </div>
      </a>
    </div>
  );
}
