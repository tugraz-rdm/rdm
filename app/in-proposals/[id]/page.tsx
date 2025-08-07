import ContentSupport from '../content-support';
import { RenderingInfoInProposals } from '#/ui/rendering-info-tool-in-proposals';
import { getContentProposalAndTitleById } from '../random-post-tab';

export default async function Page({ params }: { params: { id: string } }) {
  const { content, title } = getContentProposalAndTitleById(params.id);
  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-6">
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
          {title}
        </h1>
        <p className="font-thin text-gray-500">{content}</p>
        {params.id === 'support' && (
          <div>
            <RenderingInfoInProposals type={'in-proposals'} showEmail />
          </div>
        )}
        {params.id === 'examples' && (
          <>
            <ContentSupport />
          </>
        )}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [{ id: 'support' }, { id: 'examples' }];
}
