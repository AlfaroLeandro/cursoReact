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
  tornado,
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
    date: 'Abr 2022 - Oct 2022',
  },
  {
    title: 'TornadoStore Middleware - Integraciones',
    company_name: 'NetOne',
    icon: tornado,
    iconBg: '#333333',
    date: 'Oct 2022 - May 2023',
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

const testimonios = [
  {
    index: 0,
    name: 'name',
    designation: 'designation',
    testimonial: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    company: 'NetOne',
    image: tornado,
  },
  {
    index: 1,
    name: 'name',
    designation: 'designation',
    testimonial: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    company: 'NetOne',
    image: tornado,
  },
  {
    index: 2,
    name: 'name',
    designation: 'designation',
    testimonial: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    company: 'NetOne',
    image: tornado,
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Netegia',
    description: 'Sistema de Gestión para Pymes y Emprendedores.',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'Thymeleaf',
        color: 'pink-text-gradient',
      },
    ],
    image: pr_netegia,
    demo: 'https://www.netegia.com/',
  },
  {
    id: 'project-2',
    name: 'WISE CAPITAL',
    description:
      'Agente de mercado de capitales',
    tags: [
      {
        name: 'Springboot 3',
        color: 'blue-text-gradient',
      },
      {
        name: 'node',
        color: 'green-text-gradient',
      },
      {
        name: 'Mysql',
        color: 'pink-text-gradient',
      },
    ],
    image: pr_wise,
    demo: 'https://wise.com.ar/',
  },
  {
    id: 'project-3',
    name: 'TornadoStore',
    description: 'Ecommerce para Pymes',
    tags: [
      {
        name: 'Jazz',
        color: 'blue-text-gradient',
      },
      {
        name: 'Yiqi',
        color: 'green-text-gradient',
      },
      {
        name: 'Tango',
        color: 'pink-text-gradient',
      },
      {
        name: 'Dragonfish',
        color: 'pink-text-gradient',
      },
    ],
    image: pr_tornadostore,
    demo: 'https://www.tornadostore.com/',
  },
  {
    id: 'project-4',
    name: 'Ojo de aguila',
    description: `Sistema Integral de Comunicación Policial`,
    tags: [
      {
        name: 'Springboot 3',
        color: 'blue-text-gradient',
      },
      {
        name: 'WebRTC',
        color: 'green-text-gradient',
      },
      {
        name: 'Maps API',
        color: 'pink-text-gradient',
      },
      {
        name: 'Red neuronal',
        color: 'pink-text-gradient',
      },
    ],
    image: pr_oda,
  }
];

export { services, technologies, experiences, projects, testimonios };
