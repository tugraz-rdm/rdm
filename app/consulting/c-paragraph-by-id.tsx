export const getContentConsultingAndTitleById = (id: string) => {
  const contentMap: Record<string, string> = {
    licenses: '',
    support: '',
  };

  const titleMap: Record<string, string> = {
    licenses: 'Licenses',
    support: 'Consulting Support',
    manuals: 'Consulting - Manuals',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
};

export const generateStaticParams = () => {
  return [{ id: 'support' }, { id: 'licenses' }, { id: 'manuals' }];
};
