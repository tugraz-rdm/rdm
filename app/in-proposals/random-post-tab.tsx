export function getContentProposalAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support: '',
  };

  const titleMap: Record<string, string> = {
    examples: 'RDM In-proposals - Example for proposals',
    support: 'RDM In-proposals - Contact',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
}

export function generateStaticParams() {
  return [{ id: 'support' }, { id: 'examples' }];
}
