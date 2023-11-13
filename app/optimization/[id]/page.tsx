import { getContentOptimizationAndTitleById } from '../random-post-tab';

export default async function Page({ params }: { params: { id: string } }) {
  const { content, title } = getContentOptimizationAndTitleById(params.id);
  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-6">
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
          {title}
        </h1>
        <p className="font-thin text-gray-500">{content}</p>
      </div>
    </div>
  );
}
