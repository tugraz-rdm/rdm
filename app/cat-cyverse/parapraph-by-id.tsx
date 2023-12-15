export function getContentAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support:'If you would like to get to know CAT and also see how it works or have a demonstration, our Data Stewards will be pleased to help you:',    
    faq: 'Frequently Asked Questions about incorporating RDM best practice',
    manual: '',
    account: ''
  };

  const titleMap: Record<string, string> = {
    support: 'CyVerse - Contact',
    account: 'CyVerse - New Account',
    manual: 'CyVerse - Manual',
    faq: 'CyVerse - FAQ',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
}

export function generateStaticParams() {
  return [
    { id: 'support' },
    { id: 'manual' },
    { id: 'faq' },
    { id: 'account' },
  ];
}
