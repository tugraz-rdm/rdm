export function getContentProposalAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support:'',
    faq: 'Frequently Asked Questions about incorporating RDM best practices',
    manuals: '',
  };

  const titleMap: Record<string, string> = {
    support: 'eLabFTW SUPPORT',
    faq: 'eLabFTW - FAQ',
    manuals: 'eLabFTW - MANUALS',
    info: 'FURTHER INFORMATION',
    api: 'API SUPPORT PAGE',
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
    { id: 'api' },
  ];
}
