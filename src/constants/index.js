import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  git,
  java,
  mysql,
  kafka,
  docker,
  postgresql,
  graphql,
  pr_oda,
  pr_netegia,
  pr_wise,
  pr_tornadostore,
  movie,
  nyeusi,
  spring,
  wise,
  lomt,
  oda,
  netegia,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Acerca de',
  },
  {
    id: 'projects',
    title: 'Proyectos',
  },
  {
    id: 'contact',
    title: 'Testimonios',
  },
];

const services = [
  {
    title: 'Desarrollador Fullstack',
    icon: frontend,
  },
  {
    title: 'Arquitecto de software',
    icon: backend,
  },
  {
    title: 'Diseño UX/UI',
    icon: ux,
  },
  {
    title: 'Prototipado y maquetado',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'java',
    icon: java,
  },
  {
    name: 'Spring',
    icon: spring,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
  {
    name: 'kafka',
    icon: kafka,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Desarollador Full stack - Netegia',
    company_name: 'NetOne',
    icon: netegia,
    iconBg: '#333333',
    date: 'Abr 2022 - May 2023',
  },
  {
    title: 'Desarrollador Full stack - ODA',
    company_name: 'UNLaM',
    icon: oda,
    iconBg: '#333333',
    date: 'Mar 2023 - Dic 2023',
  },
  {
    title: 'SSr Software Engineer - WISE CAPITAL',
    company_name: 'NetOne',
    icon: wise,
    iconBg: '#333333',
    date: 'May 2023 - Actualidad',
  },
  {
    title: 'Arquitecto de Software | Spring Reactive Kafka',
    company_name: 'LoMt',
    icon: lomt,
    iconBg: '#333333',
    date: 'Dic 2023 - Actualidad',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Netegia',
    description: 'Sistema de Gestión para Pymes y Emprendedores.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: pr_netegia,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://www.netegia.com/',
  },
  {
    id: 'project-2',
    name: 'WISE CAPITAL',
    description:
      'Agente de mercado de capitales',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: pr_wise,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'TornadoStore',
    description: 'Ecommerce para Pymes',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: pr_tornadostore,
    repo: 'https://www.tornadostore.com/',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Ojo de aguila',
    description: `Sistema Integral de Comunicación Policial`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: pr_oda,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  }
];

export { services, technologies, experiences, projects };
