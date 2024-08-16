// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ade6ayo', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/developerPortfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'OpenCart Software Testing Lifecycle Visual Illustrations', //5
          description:
            'These projects follow a structured software testing life cycle (STLC): the e-commerce website development includes key features such as login, product browsing, cart management, checkout, and payment gateway integration using OpenCart. Beginning with requirement analysis and test planning to define scope, objectives, and methodologies, test case development covers critical functions like login and checkout. After setting up the test environment, execution involves rigorous testing, defect management, and comprehensive reporting to ensure readiness for production. Similarly, the HR module project involves testing functionalities such as employee management, salary processing, and leave management, following STLC phases to ensure thorough testing, risk management, and quality assurance before deployment.',
          imageUrl:
            'https://github.com/ade6ayo/developerPortfolio/blob/main/Screenshot%20(318).jpg?raw=true',
          link: 'https://drive.google.com/file/d/1g5J7hJNk3MGZGCDuXkf9LS-GA90rgufE/view?usp=drive_link',
        },
        {
          title: 'OpenCart', //4
          description:
            'Developed a user-friendly and secure e-commerce platform using OpenCart. Features include user registration, login, product catalog, shopping cart, checkout, payment gateway integration, and order management. The project folder includes test plans, test case development, test environments, and test strategy.',
          imageUrl:
            'https://github.com/ade6ayo/developerPortfolio/blob/main/Screenshot%20(322).png?raw=true',
          link: 'https://drive.google.com/drive/folders/1UG57G5AvrHAri_0mz-AOHIFbFKtUXy0V?usp=drive_link',
        },
        {
          title: 'Test Progress Report For XYZ Android Mobile App', //3
          description:
            'Detailed execution status, defect status, and testing suggestions for the Android version of the XYZ Mobile App.',
          imageUrl:
            'https://github.com/ade6ayo/developerPortfolio/blob/main/Screenshot%20(321).png?raw=true',
          link: 'https://docs.google.com/document/d/1vQaFAzWTjd4oKBiCqV3AUb6eewSRwvoFApV8BLPEfz8/edit',
        },
        {
          title: 'Test Case Report for Budget Manager App', //2
          description:
            'Summarized test progress, execution results, and effort for test cases based on the Budget Manager demo app, including the test coverage and results by environment. Click to access full pdf summary report.',
          imageUrl:
            'https://github.com/ade6ayo/developerPortfolio/blob/main/Screenshot%20(320).jpg?raw=true',
          link: 'https://drive.google.com/file/d/1p45wLbnpBHxvMnnaDFtCOVCz1j0QKa1C/view?usp=drive_link',
        },
        {
          title: 'Budget Manager Screens', //1
          description:
            'Showcased demo budget manager app with screenshots, providing the basis for creating and executing Zephyr Scale tests.',
          imageUrl:
            'https://github.com/ade6ayo/developerPortfolio/blob/main/Screenshot%20(319).jpg?raw=true',
          link: 'https://docs.google.com/document/d/12RK0MWpR0x1pfwOY17TGDfMFJk9fSNrHf9rNOJEGD6k/edit',
        },
      ],
    },
  },
  seo: {
    title: 'Developer Portfolio of Adebayo Adetunji',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'adetunji003',
    twitter: '',
    mastodon: 'ade6ayo@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'adetunji003@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1jgucutk2MDNO-OTKoIbscdJgO3K7x7Mb/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Kotlin',
    'Python',
    'JavaScript',
    'TypeScript',
    'Cucumber',
    'Java',
    'C#',
    'Postman & Newman',
    'Selenium Webdriver, IDE & Grid',
    'Trello & Zephyr Scale',
    'Playwright',
    'Apache JMeter',
    'CI/CD',
    'Jenkins',
    'API Testing',
    'Confluence',
    'Blazemeter',
    'Git',
    'Github',
    'GitLab',
    'Docker',
    'Http',
    'CSS',
    'MySQL',
    'PostgreSQL',
  ],
  experiences: [
    {
      company: 'Self-Employed',
      position: 'Freelance AI Quality Assurance Engineer',
      from: 'November 2023',
      to: 'Present',
    },
    {
      company: 'Scale AI',
      position: 'Artificial Intelligence Trainer & Researcher',
      from: 'February 2023',
      to: 'November 2023',
      companyLink: 'https://scale.com/',
    },
    {
      company: 'Filmhouse',
      position: 'Manual Quality Assurance Engineer',
      from: 'June 2021',
      to: 'January 2023',
      companyLink: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.filmhouseng.com/about-us&ved=2ahUKEwiJo9GS_viHAxUlQEEAHXVSNc4QFnoECAcQAQ&usg=AOvVaw2msl9Ap4XziT8JqFNfdgxy',
    },
  ],
  certifications: [
    {
      name: 'The Complete 2023 Software Testing Bootcamp',
      body: 'Udemy',
      year: 'March 2024',
      link: 'https://example.com',
    },
    {
      name: 'Kotlin Development Masterclass',
      body: 'Udemy',
      year: 'March 2022',
    },
  ],
  educations: [
    {
      institution: 'University of Ibadan',
      degree: 'B.Ed. Counseling Psychology',
      from: '2016',
      to: '2020',
    },
  ],
  /* publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ], */
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
