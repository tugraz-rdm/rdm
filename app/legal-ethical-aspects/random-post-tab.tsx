export function getContentLegalEthicalAspectsAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support: 'Further ethical considerations require an ethical approval for a proposal, or ethical dilemma arising during an ongoing project, we refer to the ethics commision (contact beneath)',
    considerations: '',
    ethical: '',
  };

  const titleMap: Record<string, string> = {
    legal: 'LEGAL ASPECTS',
    considerations: 'DATA HANDLING CONSIDERATIONS',
    ethical : 'ETHICAL ASPECTS',
    support: 'CONTACT',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
}

export function generateStaticParams() {
  return [{ id: 'support' }, { id: 'faq' }, { id: 'manuals' }, { id: 'legal' }];
}
