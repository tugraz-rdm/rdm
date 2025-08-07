export function getContentAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support:
      'If you have any questions or requests regarding the DMP tool, please contact us.',
    faq: '',
    manuals: '',
  };

  const titleMap: Record<string, string> = {
    support: 'TU Graz DMP Tool - Contact',
    faq: 'TU Graz DMP Tool - FAQ',
    manuals: 'TU Graz DMP Tool - Manual',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
}

export function generateStaticParams() {
  return [{ id: 'support' }, { id: 'faq' }, { id: 'manuals' }];
}
