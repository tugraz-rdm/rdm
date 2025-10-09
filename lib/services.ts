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
  const [isLoadingEvents, setIsLoadingEvents] = useState(false);

  useEffect(() => {
    const servicesData: ServiceData[] = [
      {
        name: i18.t('planning.title'),
        items: [
          {
            name: i18.t('planning.itemName.dmpTool'),
            slug: 'tu-graz-dmp-tool',
            description: i18.t('planning.tuGrazDmpToolDescription'),
            externalLink: 'https://github.com/sharedRDM/damap-instance',
            buttons: [
              {
                text: i18.t('planning.readMore'),
                link: '/tu-graz-dmp-tool',
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
            externalLink: 'https://repository.tugraz.at/records/fdzq1-maw86',
            buttons: [
              {
                text: i18.t('planning.readMore'),
                link: '/consulting',
                iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
              },
            ],
          },
          {
            name: i18.t('planning.itemName.rdmInProposals'),
            slug: 'in-proposals',
            description: i18.t('planning.rdmInProposalsDescription'),
            externalLink:
              'https://www.tugraz.at/fileadmin/user_upload/tugrazExternal/0c4b9c02-50a6-4a31-b5fd-24a0f93b69c5/General_RDM_Policy_TU_Graz.pdf',
            buttons: [
              {
                text: i18.t('planning.readMore'),
                link: '/in-proposals',
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
            externalLink: 'https://github.com/elabftw',
            description: i18.t('activeStateOfResearch.eLabFTWDescription'),
            buttons: [
              {
                text: i18.t('activeStateOfResearch.readMore'),
                link: '/elabftw',
                iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
              },
              {
                text: i18.t('activeStateOfResearch.launch'),
                link: 'https://elabftw.tugraz.at/login.php',
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
            externalLink: 'https://github.com/cyverse-austria',
            buttons: [
              {
                text: i18.t('activeStateOfResearch.readMore'),
                link: '/cat-cyverse',
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
                link: '/optimization',
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
            externalLink:
              'https://github.com/tu-graz-library/repository-tugraz',
            description: i18.t('researchComplete.tuGrazRepositoryDescription'),
            buttons: [
              {
                text: i18.t('researchComplete.readMore'),
                link: '/tu-graz-repository',
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
                link: '/data-publication-consulting',
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
                link: '/legal-ethical-aspects',
                iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
              },
            ],
          },
        ],
      },
    ];

    const eventsData: EventData[] = [
      {
        date: 'May 23, 2024',
        name: 'Unlocking Knowledge: TU Graz Repository & Future Data Curation Innovations',
        url: 'https://www.tugraz.at/news/tu-graz-events/eventdetails/article/unlocking-knowledge-tu-graz-repository-future-data-curation-innovations',
        urlImage: '',
      },
      {
        date: 'May 15, 2024',
        name: 'Webinar How to: Aufbau eines institutionellen OER-Ökosystems',
        url: 'https://forschungsdaten.at/sharedrdm/materialien/how-to-aufbaur-eines-institutionellen-oer-oekosystems/',
        urlImage: '',
      },
      {
        date: 'May 14, 2024',
        name: 'Symposium "Cross-cutting Research Support Services" - Cluster Forschungsdaten Event',
        url: 'https://www.tugraz.at/news/tu-graz-events/eventdetails/article/symposium-cross-cutting-research-support-services-cluster-forschungsdaten-event',
        urlImage: '',
      },
      {
        date: 'Feb 7, 2024',
        name: 'Webinar Reproducibility in Science',
        url: 'https://forschungsdaten.at/en/reproducibility-in-science-invitation-to-the-webinar/',
        urlImage: '',
      },
      {
        date: 'Jan 9, 2024',
        name: 'Webinar Data Management with LinkAhead',
        url: 'https://forschungsdaten.at/en/joinus-for-webinar-data-management-with-linkahead/',
        urlImage: '',
      },
      {
        date: 'Jan 24, 2024',
        name: 'National RDM Exchange',
        url: 'https://www.tugraz.at/sites/rdm/networks-and-events/meetings-and-events/national-rdm-exchange',
        urlImage: '',
      },
      {
        date: 'Dec 7, 2023',
        name: 'RDM Month Dec',
        url: 'https://www.tugraz.at/sites/rdm/networks-and-events/meetings-and-events',
        urlImage: '',
      },
      {
        date: 'Nov 29, 2023',
        name: 'National RDM Exchange',
        url: 'https://www.tugraz.at/sites/rdm/networks-and-events/meetings-and-events/national-rdm-exchange',
        urlImage: '',
      },
      {
        date: 'Oct 12, 2023',
        name: 'Data Champions Open Working Meeting',
        url: 'https://www.tugraz.at/sites/rdm/networks-and-events/meetings-and-events',
        urlImage: '',
      },
      {
        date: 'Sept 28, 2023',
        name: 'RDM Month September',
        url: 'https://www.tugraz.at/sites/rdm/networks-and-events/meetings-and-events',
        urlImage: '',
      },
      {
        date: 'May 17, 2023',
        name: 'RDM Month May',
        url: 'https://www.tugraz.at/sites/rdm/networks-and-events/meetings-and-events',
        urlImage: '',
      },
      {
        date: 'Nov 7, 2022',
        name: 'Second General Assembly of EOSC Support Office Austria',
        url: 'https://eosc-austria.at/wrap-up-2nd-general-assembly-of-eosc-support-office-austria/',
        urlImage: '',
      },
      {
        date: 'May 23, 2022',
        name: 'Symposium of the Cluster Research Data: "Future Research (Data) Management"',
        url: 'https://forschungsdaten.at/cluster-forschungsdaten-symposium-2022-programm/',
        urlImage: '',
      },
      {
        date: 'Sept 28, 2021',
        name: 'FAIR Data Austria Online-Event',
        url: 'https://forschungsdaten.at/3-fair-data-austria-online-projektmeeting/',
        urlImage: '',
      },
    ];

    // Fetch live events from TU Graz website
    const fetchLiveEvents = async () => {
      setIsLoadingEvents(true);
      try {
        const response = await fetch('/api/events');
        if (response.ok) {
          const liveEvents = await response.json();
          if (liveEvents && liveEvents.length > 0) {
            setCombinedData({ servicesData, eventsData: liveEvents });
            return;
          }
        }
      } catch (error) {
        console.error('Failed to fetch live events:', error);
      } finally {
        setIsLoadingEvents(false);
      }

      // Fallback to static events if live fetch fails
      setCombinedData({ servicesData, eventsData });
    };

    // Try to fetch live events, fallback to static if it fails
    fetchLiveEvents();
  }, [t, i18n.language]);

  return { ...combinedData, isLoadingEvents };
};
