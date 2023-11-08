export function getContentAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support:
      'The page is intended to provide support for the use of the TU Graz Repository. You will find a manual and a list of frequently asked questions. If you have a question or request about the repository (e.g. upload limit, communities) please contact us.',
    faq: '',
    manuals: 'Manuals content here...',
    apisupport: 'API Support content here...',
  };

  const titleMap: Record<string, string> = {
    support: 'TU Graz Repository - Support',
    faq: 'TU Graz Repository - FAQ',
    manuals: 'TU Graz Repository - Manual',
    guide: 'TU Graz Repository Guide',
    info: 'TU Graz Repository Shortinfo',
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
    { id: 'guide' },
    { id: 'info' },
  ];
}
