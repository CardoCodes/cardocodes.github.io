// gitprofile.config.js

const config = {
  github: {
    username: 'cardocodes', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'cardocodes',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'cardocodes',
    dev: '',
    website: 'https://cardocodes.com/',
    phone: '',
    email: 'cardocodes@gmail.com',
  },
  skills: [
    'Python',
    'C++',
    'TensorFlow',
    'Java',
    'JavaScript',
    'HTML',
    'CSS',
    'React',
    'Git',
    'Linux',
    'z/OS',
  ],
  experiences: [
    {
      company: 'Visa',
      position: 'Systems Programmer Intern',
      from: 'May 2022',
      to: 'Present',
    },
    {
      company: 'JPMC',
      position: 'Software Engineer Intern',
      from: 'Jan 2022',
      to: 'May 2022',
    },
    {
      company: 'ScholarWorks @ UTEP',
      position: 'Research',
      from: 'Aug 2021',
      to: 'Dec 2021',
    },
    {
      company: 'AI4ALL',
      position: 'Research',
      from: 'Aug 2021',
      to: 'Dec 2021',
    },
  ],
  education: [
    {
      institution: 'University of Texas at El Paso',
      degree: 'Bachelor of Science in Computer Science',
      from: '2019',
      to: '2022',
    },
    {
      institution: 'University of Texas at Austin',
      degree: 'Bachelors of Liberal Arts in Economics',
      from: '2016',
      to: '2018',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

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