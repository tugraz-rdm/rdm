'use client';

import { useEffect, useReducer, useState } from 'react';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import i18 from '#/i18';
import { useTranslation } from 'react-i18next';

export type ServiceItem = {
  name: string;
  slug: string;
  description?: string;
  externalLink: string;
  icon?: IconDefinition;
  buttons?: { text: string; link: string; iframeSrc: string }[];
};

export type ServiceData = {
  name: string;
  items: ServiceItem[];
};

export type EventData = {
  date: string;
  name: string;
  url: string;
  urlImage: string;
  moreInfo?: string;
};

export type CombinedData = {
  servicesData: ServiceData[];
  eventsData: EventData[];
};

export const useCombinedData = () => {
  const { t, i18n } = useTranslation();
  const [combinedData, setCombinedData] = useState<CombinedData>({
    servicesData: [],
    eventsData: [],
  });

  useEffect(() => {
    const servicesData: ServiceData[] = [
      {
        name: i18.t('planning.title'),
        items: [
          {
            name: i18.t('planning.itemName.dmpTool'),
            slug: 'tu-graz-dmp-tool',
            description: i18.t('planning.tuGrazDmpToolDescription'),
            externalLink: 'https://dmp.tugraz.at/',
            buttons: [
              {
                text: i18.t('planning.readMore'),
                link: '#',
                iframeSrc: 'https://dmp.tugraz.at/',
              },
              {
                text: i18.t('planning.launch'),
                link: 'https://dmp.tugraz.at/',
                iframeSrc: 'https://dmp.tugraz.at/',
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
            description: i18.t(
              'activeStateOfResearch.cyVerseAustriaDescription'
            ),
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
            slug: 'data-publication-consulting',
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
            description: i18.t(
              'researchComplete.legalEthicalAspectsDescription'
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
        ],
      },
    ];

    const eventsData: EventData[] = [
      {
        date: i18.t('events.event5.date'),
        name: i18.t('events.event5.name'),
        url: i18.t('events.events.url'),
        urlImage: '',
      },
      {
        date: i18.t('events.event4.date'),
        name: i18.t('events.event4.name'),
        url: i18.t('events.events.url'),
        urlImage: '',
      },
      {
        date: i18.t('events.event1.date'),
        name: i18.t('events.event1.name'),
        url: i18.t('events.events.url'),
        urlImage: '',
      },
      {
        date: i18.t('events.event2.date'),
        name: i18.t('events.event2.name'),
        moreInfo: i18.t('events.event2.moreInfo'),
        url: i18.t('events.event2.url'),
        urlImage: i18.t('events.event2.urlImage', {
          defaultValue: '/events/rdm-ilire.png',
        }),
      }
    ];

    setCombinedData({ servicesData, eventsData });
  }, [t, i18n.language]);

  return combinedData;
};
