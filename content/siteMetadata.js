const siteMetadata = {
  title: 'Vedant Sharma',
  author: 'Vedant Sharma',
  headerTitle: 'vedantsharma',
  description: 'Freelancer',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://vedant-sharma.vercel.app/',
  siteRepo: 'https://github.com/ThisIsVedant/my-portfolio',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpeg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'thisisvedant.2005@gmail.com',
  github: 'https://github.com/ThisIsVedant',
  linkedin: 'https://www.linkedin.com/in/vedant-sharma-4091aa243/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
