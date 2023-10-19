import { IconDefinition, faBook } from '@fortawesome/free-solid-svg-icons';

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

export const services: { name: string; items: Item[] }[] = [
  {
    name: 'PLANNING',
    items: [
      {
        name: 'DMP TOOL',
        slug: 'tools',
        description:
          'A comprehensive tool designed to guide researchers through the process of creating a data management plan.',
        externalLink: '#',
        buttons: [
          { text: 'Read More', link: 'https://damap.org/', iframeSrc: '' },
          {
            text: 'Launch',
            link: 'https://damap.org/',
            iframeSrc: 'https://damap.org/',
          },
        ],
      },
      {
        name: 'DMP Consulting',
        slug: 'consulting',
        description:
          'Consultation services for researchers to aid in the development and execution of data management strategies.',
        externalLink: 'https://www.tugraz.at/sites/rdm/home',
        buttons: [
          {
            text: 'Read More',
            link: '#',
            iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
          },
        ],
      },
      {
        name: 'RDM In-proposals',
        slug: 'proposals',
        description:
          'Incorporate Research Data Management best practices within project proposals for efficient and responsible data handling.',
        externalLink: 'https://www.tugraz.at/sites/rdm/home',
        buttons: [
          {
            text: 'Read More',
            link: '#',
            iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
          },
        ],
      },
    ],
  },
  {
    name: 'ACTIVE STATE OF RESEARCH',
    items: [
      {
        name: 'eLabFTW',
        slug: 'elabftw',
        externalLink: 'https://damap.org/',
        description:
          'eLabFTW is a versatile open-source electronic lab notebook solution used at TU Graz, offering collaborative features and equipment management through a browser interface.',
        buttons: [
          {
            text: 'Read More',
            link: '#',
            iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
          },
          {
            text: 'Launch',
            link: '#',
            iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
          },
        ],
      },
      {
        name: 'CyVerse Austria',
        slug: 'hooks',
        description:
          'A comprehensive platform for data analysis specifically tailored for Austrian research needs.',
        externalLink: 'https://www.tugraz.at/sites/rdm/home',
        buttons: [
          {
            text: 'Read More',
            link: '#',
            iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
          },
          {
            text: 'Launch',
            link: '#',
            iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
          },
        ],
      },
      {
        name: 'RDM Optimization',
        slug: 'hooks',
        description:
          'Improvement solutions for research data management, including workflows, pipelines, infrastructures, and more.',
        externalLink: 'https://www.tugraz.at/sites/rdm/home',
        buttons: [
          {
            text: 'Read More',
            link: '#',
            iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
          },
        ],
      },
    ],
  },
  {
    name: 'RESEARCH COMPLETE',
    items: [
      {
        name: 'TU Graz Repository',
        slug: 'layout',
        externalLink: 'https://damap.org/',
        description:
          'A central hub for data publication and archiving, offering persistent identifier linking.',
        buttons: [
          {
            text: 'Read More',
            link: '#',
            iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
          },
          {
            text: 'Launch',
            link: '#',
            iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
          },
        ],
      },
      {
        name: 'Publication Consulting',
        slug: 'hooks',
        description:
          'Assistance with repository searches and metadata management for publications.',
        externalLink: 'https://www.tugraz.at/sites/rdm/home',
        buttons: [
          {
            text: 'Read More',
            link: '#',
            iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
          },
        ],
      },
      {
        name: 'Legal & Ethical Aspects',
        slug: 'hooks',
        description:
          'Guidance on navigating the legal and ethical considerations in research data management.',
        externalLink: 'https://www.tugraz.at/sites/rdm/home',
        buttons: [
          {
            text: 'Read More',
            link: '#',
            iframeSrc: 'https://www.tugraz.at/sites/rdm/home',
          },
        ],
      },
    ],
  },
];

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
