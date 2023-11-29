export function getContentOptimizationAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support:'',
    datastructure: '',
    checklist: ''
  };

  const titleMap: Record<string, string> = {
    support: 'RDM OPTIMIZATION SUPPORT',
    datastructure: 'DATA STRUCTURE',
    checklist: 'CHECKLIST',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
}

export function generateStaticParams() {
  return [{ id: 'support' }, { id: 'checklist' }, { id: 'datastructure' }];
}
