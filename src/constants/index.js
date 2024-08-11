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
  docker,
  postgresql,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  spring,
  coverhunt,
  dcc,
  kelhel,
  microverse,
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
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Abr 2022 - Feb 2023',
  },
  {
    title: 'Desarrollador Full stack - ODA',
    company_name: 'UNLaM',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2023 - Dic 2023',
  },
  {
    title: 'SSr Software Engineer - WISE CAPITAL',
    company_name: 'NetOne',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2023 - Actualidad',
  },
  {
    title: 'Arquitecto de Software | Spring Reactive Kafka',
    company_name: 'LoMt',
    icon: dcc,
    iconBg: '#333333',
    date: 'Dic 2023 - Actualidad',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
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
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
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
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
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
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
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
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
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
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
