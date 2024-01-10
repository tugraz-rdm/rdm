export const getContentConsultingAndTitleById = (id: string) => {
  const contentMap: Record<string, string> = {
    licenses: '',
    support: '',
  };

  const titleMap: Record<string, string> = {
    licenses: 'Data Publication Consulting - Licenses',
    support: 'Data Publication - Contact',
    goal: 'Data Publication Consulting - How to manage citations',
    links: 'Data Publication Consulting - Links',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
};

export const generateStaticParams = () => {
  return [
    { id: 'support' },
    { id: 'licenses' },
    { id: 'goal' },
    { id: 'links' },
  ];
};
