export const getContentConsultingAndTitleById = (id: string) => {
  const contentMap: Record<string, string> = {
    support:
      'Publication Consultation services for researchers to aid in the development and execution of data management strategies.',
    faq: '',
    manuals: 'Manuals content here...',
  };

  const titleMap: Record<string, string> = {
    support: 'Publication Consulting Support',
    faq: 'Publication Consulting - FAQ',
    manuals: 'Publication Consulting - Manuals',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
};

export const generateStaticParams = () => {
  return [{ id: 'support' }, { id: 'faq' }, { id: 'manuals' }];
};
