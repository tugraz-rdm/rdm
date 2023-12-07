export const getContentConsultingAndTitleById = (id: string) => {
  const contentMap: Record<string, string> = {
    licenses: '',
    support: '',
  };

  const titleMap: Record<string, string> = {
    licenses: 'LICENSES',
    support: 'CONSULTING CONTACT',
    manuals: 'CONSULTING - MANUALS',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
};

export const generateStaticParams = () => {
  return [{ id: 'support' }, { id: 'licenses' }, { id: 'manuals' }];
};
