export function getContentProposalAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support:'If you have any questions or requests regarding eLabFTW please contact us.',
    faq: 'Frequently Asked Questions about incorporating RDM best practices',
    info: '',
    manuals: '',
  };

  const titleMap: Record<string, string> = {
    support: 'eLabFTW SUPPORT',
    faq: 'eLabFTW - FAQ',
    manuals: 'eLabFTW- Manual',
    info: 'eLabFTW - Topics of Interest',
    api: 'eLabFTW- API Support page',
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
    { id: 'info' },
    { id: 'manuals' },
    { id: 'api' },
  ];
}
