module.exports = {
  publicUrl: '/create-one-page-website/',
  extraFilesToCopy: ['.htaccess', 'robots.txt', 'sitemap.xml'],
  plugins: {
    'cow-scripts/posthtml-cow-component': {
      workingDir: __dirname,
      manifest: {
        short_name: 'Cédric B.',
        name: 'Cédric Bazureau',
        start_url: '/',
        // icons key isn't needed
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
      },
    },
  },
};
