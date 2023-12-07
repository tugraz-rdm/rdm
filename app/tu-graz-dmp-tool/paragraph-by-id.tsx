
export function getContentAndTitleById(id: string) {
  
  const contentMap: Record<string, string> = {
    support:
      'The page is intended to provide support for the use of the TU Graz DMP Tool. If you have a question or request about the DMP Tool (e.g. permission control, templates) please contact us.',
    faq: '',
    manuals: 'Manuals content...',
  };

  const titleMap: Record<string, string> = {
    support: 'TU Graz DMP Tool - Support',
    faq: 'TU Graz DMP Tool - FAQ',
    manuals: 'TU Graz DMP Tool - Manual',
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
