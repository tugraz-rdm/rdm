export function getContentAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support:
      'The page is intended to provide support for the use of CyVerse Austria (CAT). You can find a list of frequently asked questions (FAQ). If you have a question or request about CyVerse Austria please contact us!',
    faq: '',
    manuals: 'Manuals content here...',
    'api-support': 'API Support content here...',
  };

  const titleMap: Record<string, string> = {
    support: 'CyVerse - Support',
    faq: 'CyVerse Tool - FAQ',
    portals: 'User Portals',
    materials: 'CyVerse Training materials',
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
    { id: 'portals' },
    { id: 'materials' },
  ];
}
