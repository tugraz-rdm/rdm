export function getContentProposalAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support:
      ' The page is intended to provide support for the use of eLabFTW. You will find manuals for users and admins of teams in eLabFTW. You will also find a list of frequently asked questions. If you have a question or request about eLabFTW (e.g. create a team or add a user) please contact us.',
    faq: 'Frequently Asked Questions about incorporating RDM best practices in your project proposals.',
    manuals:
      'Guides and resources for embedding Research Data Management into your research proposal strategies.',
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
