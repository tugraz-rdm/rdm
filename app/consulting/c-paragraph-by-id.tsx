export const getContentConsultingAndTitleById = (id: string) => {
  const contentMap: Record<string, string> = {
    canvas: '',
    licenses: '',
    support: '',
  };

  const titleMap: Record<string, string> = {
    canvas: 'DMP Consulting - Canvas',
    licenses: 'DMP Consulting - Licenses',
    support: 'DMP Consulting - Contact',
    manuals: 'DMP Consulting - Manuals',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
};

export const generateStaticParams = () => {
  return [
    { id: 'canvas' },
    { id: 'support' },
    { id: 'licenses' },
    { id: 'manuals' },
  ];
};
