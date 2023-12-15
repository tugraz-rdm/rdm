export function getContentAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support:
      'If you have any questions or requests regarding the repository (e.g. help with upload, increasing upload limit, working with community) please contact us.',
    faq: '',
    manuals: '',
    apisupport: 'API Support content here...',
  };

  const titleMap: Record<string, string> = {
    support: 'TU Graz Repository - Contact',
    faq: 'TU Graz Repository - FAQ',
    manuals: 'TU Graz Repository - Manual',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
}

export function generateStaticParams() {
  return [{ id: 'support' }, { id: 'faq' }, { id: 'manuals' }];
}
