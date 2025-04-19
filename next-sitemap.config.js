/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://muhammedsinan.space',
    generateRobotsTxt: true,
    exclude: [],
    transform: async (config, path) => {
      let priority = 0.7;
      
      if (path === '/') {
        priority = 1.0;
      } else if (path === '/projects' || path === '/stack') {
        priority = 0.9;
      } else if (path === '/open-source' || path === '/contact') {
        priority = 0.8;
      }
      
      return {
        loc: path,
        changefreq: config.changefreq,
        priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    },
  };