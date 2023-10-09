export function getContentProposalAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support: 'Incorporate Research Data Management best practices within project proposals for efficient and responsible data handling. Ensure that your research project starts with a clear data strategy to optimize outcomes, meet funder requirements, and facilitate collaboration.',
    faq: 'Frequently Asked Questions about incorporating RDM best practices in your project proposals.',
    manuals: 'Guides and resources for embedding Research Data Management into your research proposal strategies.',
  };

  const titleMap: Record<string, string> = {
    support: 'Proposal RDM Support',
    faq: 'Proposal RDM - FAQ',
    manuals: 'Proposal RDM - Manuals',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
}

export function generateStaticParams() {
  return [
    { id: 'support' }, 
    { id: 'faq' }, 
    { id: 'manuals' }, 
  ];
}
