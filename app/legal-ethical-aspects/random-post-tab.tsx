export function getContentLegalEthicalAspectsAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support: 'Further ethical considerations require an ethical approval for a proposal, or ethical dilemma arising during an ongoing project, we refer to the ethics commision (contact beneath)',
    considerations: '',
    ethical: '',
  };

  const titleMap: Record<string, string> = {
    legalissues: 'Legal & Ethical Aspects - Examples of Legal Issues',
    considerations: 'Legal & Ethical Aspects - Data handling',
    ethical : 'Legal & Ethical Aspects - Exemplary Ethical Cases',
    support: 'Legal & Ethical Aspects - Contact',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
}

export function generateStaticParams() {
  return [{ id: 'support' }, { id: 'faq' }, { id: 'manuals' }, { id: 'legal-issues' }];
}
