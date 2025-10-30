/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://masoandrocapital.com",
  generateRobotsTxt: true,
  outDir: "./public",
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [], // exclure certaines pages

  // Ajout de pages manuelles
  additionalPaths: async (config) => [
    await config.transform(config, "/pages/musics"),
    await config.transform(config, "/pages/film"),
    await config.transform(config, "/pages/contact"),
    await config.transform(config, "/pages/services"),
  ],
};
