// gitprofile.config.js

const config = {
  github: {
    username: 'toure5013', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 20, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'toure5013',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: 'toure5013',
    medium: 'toure5013',
    dev: 'toure5013',
    website: 'https://toure5013.github.io',
    phone: '',
    email: 'toure5013@gmail.com',
  },
  skills: [
    'TypeScript',
    'JavaScript',
    'Vue.js',
    'Nuxt.js',
    'Angular.js',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'Postgres',
    'MongoDB',
    'Git',
    'Docker',
    'Aws',
    'Adonis Js',
    'CSS',
    'Antd',
    'Tailwind',
    'Bootstrap',
    'PHP',
    'Laravel',
    'Web3',
    'Solidity',
    'GraphQL',
    'API',
    'RESTFUL',
  ],
  experiences: [
    {
      company: 'Orange Côte d\'Ivoire',
      position: 'Fullstack Developer',
      from: 'February 2019',
      to: 'Present',
    },
    {
      company: 'Welti INC USA',
      position: 'Co-founder , CTO & Backend Developer',
      from: 'August 2020',
      to: 'September 2021',
    },
    {
      company: 'Sougahpay Côte d\'Ivoire',
      position: 'CTO and Backend Developer',
      from: 'July 2019',
      to: 'August 2020',
    },
    {
      institution: 'Internship Orange Digital Academy',
      degree: 'Fullstack Developer & Chatbot Developer',
      from: '2019',
      to: '2019',
    },
  ],
  education: [
    {
      institution: 'Virtual University Côte d\'Ivoire',
      degree: 'Master Blockchain',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'Virtual University Côte d\'Ivoire',
      degree: 'Bachelor of Software Developement and e-services',
      from: '2017',
      to: '2019',
    },
    {
      institution: 'NaN',
      degree: 'Fullstack Developer',
      from: '2018',
      to: '2019',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'toure5013', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '1034536496', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
