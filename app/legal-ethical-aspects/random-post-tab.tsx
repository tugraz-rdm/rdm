export function getContentLegalEthicalAspectsAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support: 'Further ethical considerations require an ethical approval for a proposal, or ethical dilemma arising during an ongoing project, we refer to the ethics commision (contact beneath)',
    considerations: '',
    ethical: '',
  };

  const titleMap: Record<string, string> = {
    considerations: 'DATA HANDLING CONSIDERATIONS',
    ethical : 'ETHICAL ASPECTS',
    support: 'LEGAL & ETHICAL ASPECTS OF RESEARCH DATA - SUPPORT',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
}

export function generateStaticParams() {
  return [{ id: 'support' }, { id: 'faq' }, { id: 'manuals' }];
}
