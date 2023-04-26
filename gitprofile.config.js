// gitprofile.config.js

const config = {
  github: {
    username: 'WanekNia', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 3, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'Nathan Wanecque',
    dev: 'WanekNia',
    stackoverflow: '', // format: userid/username
    website: 'nope',
    phone: '06.38.34.46.23',
    email: 'nathan.wanecque@outlook.com',
  },
  resume: {
    fileUrl:
      'https://github.com/WanekNia/WanekNia.github.io/blob/main/CV_Wanek.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'C#',
    'Unreal Engine',
    'WPF',
    'Computer Diagnostic',
    'Hardware selling',
    'computer adviser'
  ],
  experiences: [
    {
      company: 'Conforama after-sales service',
      position: 'Cambrai - France',
      from: 'September 2020',
      to: 'October 2021',
      companyLink: '',
    },
    {
      company: 'Public College Guillaume BUDE',
      position: 'Maubeuge - France',
      from: 'September 2021',
      to: 'June 2021',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'RNCP-4 "Technicien Assistance Informatique"',
      body: 'Lorem ipsum dolor sit amet',
      year: '13/10/2021',
      link: 'https://github.com/WanekNia/WanekNia.github.io/blob/main/RNCP-Wanek.pdf'
    },
  ],
  education: [
    {
      institution: 'Lyon Ynov Campus',
      degree: 'Bachelor 1',
      from: '2022',
      to: 'present',
    },
    {
      institution: 'GRETA Grand Hainaut',
      degree: 'RNCP Niv4',
      from: 'October 2019',
      to: 'October 2020',
    }, 
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'WanekNia', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  
  // Track visitor interaction and behavior. https://www.hotjar.com
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
