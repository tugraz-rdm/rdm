'use client';

import { useEffect, useState } from 'react';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import i18 from '#/i18';
import { useTranslation } from 'react-i18next';

export type Item = {
  name: string;
  slug: string;
  description?: string;
  externalLink: string;
  icon?: IconDefinition;
  buttons?: { text: string; link: string; iframeSrc: string }[];
};

export type Events = {
  date: string;
  name: string;
  url: string;
  urlImage: string;
  moreInfo?: string;
};

export const useServicesData = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const servicesData: { name: string; items: Item[] }[] = [
    {
      name: i18.t('planning.title'),
      items: [
        {
          name: i18.t('planning.itemName.dmpTool'),
          slug: 'tu-graz-dmp-tool',
          description: i18.t('planning.tuGrazDmpToolDescription'),
          externalLink: 'https://damap.org/',
          buttons: [
            {
              text: i18.t('planning.readMore'),
              link: '#',
              iframeSrc: 'https://damap.org/',
            },
            {
              text: i18.t('planning.launch'),
              link: 'https://damap.org/',
              iframeSrc: 'https://damap.org/',
            },
          ],
        },
        {
          name: i18.t('planning.itemName.dmpConsulting'),
          slug: 'consulting',
          description: i18.t('planning.dmpConsultingDescription'),
          externalLink: 'https://www.tugraz.at/sites/rdm/home',
          buttons: [
            {
              text: i18.t('planning.readMore'),
              link: '#',
              iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
            },
          ],
        },
        {
          name: i18.t('planning.itemName.rdmInProposals'),
          slug: 'in-proposals',
          description: i18.t('planning.rdmInProposalsDescription'),
          externalLink: 'https://www.tugraz.at/sites/rdm/home',
          buttons: [
            {
              text: i18.t('planning.readMore'),
              link: '#',
              iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
            },
          ],
        },
      ],
    },
    {
      name: i18.t('activeStateOfResearch.title'),
      items: [
        {
          name: i18.t('activeStateOfResearch.itemName.eLabFtwTool'),
          slug: 'elabftw',
          externalLink: '',
          description: i18.t('activeStateOfResearch.eLabFTWDescription'),
          buttons: [
            {
              text: i18.t('activeStateOfResearch.readMore'),
              link: '#',
              iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
            },
            {
              text: i18.t('activeStateOfResearch.launch'),
              link: 'https://www.elabftw.net/',
              iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
            },
          ],
        },
        {
          name: i18.t('activeStateOfResearch.itemName.cyverseTool'),
          slug: 'cat-cyverse',
          description: i18.t('activeStateOfResearch.cyVerseAustriaDescription'),
          externalLink: 'https://www.tugraz.at/sites/rdm/home',
          buttons: [
            {
              text: i18.t('activeStateOfResearch.readMore'),
              link: '#',
              iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
            },
            {
              text: i18.t('activeStateOfResearch.launch'),
              link: 'https://de.cyverse.tugraz.at/',
              iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
            },
          ],
        },
        {
          name: i18.t('activeStateOfResearch.itemName.rdmOptimization'),
          slug: 'optimization',
          description: i18.t(
            'activeStateOfResearch.rdmOptimizationDescription'
          ),
          externalLink: 'https://www.tugraz.at/sites/rdm/home',
          buttons: [
            {
              text: i18.t('activeStateOfResearch.readMore'),
              link: '#',
              iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
            },
          ],
        },
      ],
    },
    {
      name: i18.t('researchComplete.title'),
      items: [
        {
          name: i18.t('researchComplete.itemName.tuGrazRepository'),
          slug: 'tu-graz-repository',
          externalLink: 'https://damap.org/',
          description: i18.t('researchComplete.tuGrazRepositoryDescription'),
          buttons: [
            {
              text: i18.t('researchComplete.readMore'),
              link: '#',
              iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
            },
            {
              text: i18.t('researchComplete.launch'),
              link: 'https://repository.tugraz.at/',
              iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
            },
          ],
        },
        {
          name: i18.t('researchComplete.itemName.publicationConsulting'),
          slug: 'publication-consulting',
          description: i18.t(
            'researchComplete.publicationConsultingDescription'
          ),
          externalLink: 'https://www.tugraz.at/sites/rdm/home',
          buttons: [
            {
              text: i18.t('researchComplete.readMore'),
              link: '#',
              iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
            },
          ],
        },
        {
          name: i18.t('researchComplete.itemName.legalAndEthicalAspects'),
          slug: 'legal-ethical-aspects',
          description: i18.t('researchComplete.legalEthicalAspectsDescription'),
          externalLink: 'https://www.tugraz.at/sites/rdm/home',
          buttons: [
            {
              text: i18.t('researchComplete.readMore'),
              link: '#',
              iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
            },
          ],
        },
      ],
    },
  ];
  return servicesData;
};

export const events = [
  {
    date: '17 May 2023',
    name: 'RDM Month May',
    url: 'https://www.tugraz.at/sites/rdm/networks-and-events/meetings-and-events/rdm-month-may-2023',
    urlImage: '',
  },
  {
    date: '07 November 2022',
    name: 'Second General Assembly of EOSC Support Office Austria',
    moreInfo: 'More Information',
    url: 'https://eosc-austria.at/wrap-up-2nd-general-assembly-of-eosc-support-office-austria/',
    urlImage: '/events/rdm-ilire.png',
  },
  {
    date: '23 May 2022',
    name: 'Symposium of the Cluster Research Data: "Future Research (Data) Management"',
    moreInfo: 'More Information',
    url: 'https://forschungsdaten.at/cluster-forschungsdaten-symposium-2022-programm/',
    urlImage: '',
  },
];
