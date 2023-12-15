export function getContentOptimizationAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support:'',
    datastructure: '',
    checklist: ''
  };

  const titleMap: Record<string, string> = {
    support: 'RDM Optimization - Contact',
    analysis: 'RDM Optimization - Optimization Analysis',
    boarding: 'RDM Optimization - ON-/OFF Boarding',
    assessment: 'RDM Optimization - SELF-Assessment',
    datastructure: 'RDM Optimization - Data structure',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
}

export function generateStaticParams() {
  return [{ id: 'support' }, {id: 'analysis'}, {id: 'boarding'}, { id: 'datastructure' }];
}
