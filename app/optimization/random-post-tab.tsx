export function getContentOptimizationAndTitleById(id: string) {
  const contentMap: Record<string, string> = {
    support:
      'Our support section is dedicated to fostering the implementation of Research Data Management (RDM) best practices at the proposal stage. With a focus on efficiency and accountability, we guide researchers in developing comprehensive data strategies. This encompasses planning for data collection, storage, sharing, and long-term preservation, aligning with the stringent requirements of funding bodies and collaborative research efforts. The aim is to ensure that every research endeavor is well-equipped from the outset with a solid foundation in data management, leading to optimized research outcomes.',
    faq: 'The Frequently Asked Questions (FAQ) segment serves as a comprehensive resource for researchers seeking to understand and implement RDM best practices within their proposals. It covers a wide array of topics, from basic RDM principles to complex queries regarding data storage options and data sharing policies. This section is an invaluable tool for demystifying the process of integrating effective data management strategies into research workflows.',
    manuals:
      'Our manuals offer detailed guides and instructional resources to assist researchers in incorporating Research Data Management into their proposal development process. These curated materials provide step-by-step instructions on managing data throughout the research lifecycle, ensuring that proposals meet the high standards of data governance, security, and ethics expected in contemporary research. By following these guidelines, researchers can enhance the integrity and impact of their work.',
  };

  const titleMap: Record<string, string> = {
    support: 'Optimization RDM Support',
    faq: 'Optimization RDM - FAQ',
    manuals: 'Optimization RDM - Manuals',
  };

  return {
    content: contentMap[id] || '',
    title: titleMap[id] || 'Default Title',
  };
}

export function generateStaticParams() {
  return [{ id: 'support' }, { id: 'faq' }, { id: 'manuals' }];
}
