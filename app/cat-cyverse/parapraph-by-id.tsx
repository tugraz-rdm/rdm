export function getContentAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support:'If you would like to get to know CAT and also see how it works or have a demonstration, our Data Stewards will be pleased to help you:',    
    faq: '',
    'api-support': 'API Support content here...',
  };

  const titleMap: Record<string, string> = {
    support: 'CyVerse - Support',
    account: 'New Account',
    faq: 'CyVerse Tool - FAQ',
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
  ];
}
