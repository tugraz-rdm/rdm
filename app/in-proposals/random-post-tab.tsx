export function getContentProposalAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support: ''     
  };

  const titleMap: Record<string, string> = {
    examples: 'EXAMPLE FOR PROPOSALS',
    support: 'CONTACT',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
}

export function generateStaticParams() {
  return [{ id: 'support' }, { id: 'examples' }];
}
