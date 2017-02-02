require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT || '',
  apiTokenKey: 'access-token',
  apiSSL: true,
  tokenExpire: 14, // in days
  meta: {
    title: '',
    description: '',
    home: {
      htmlAttributes: {
        lang: 'en'
      },
      title: '',
      meta: [
        { name: 'description', content: '' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: '' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: '' },
        { property: 'og:description', content: '' },
      ]
    },
    notFound: {
      title: '',
      htmlAttributes: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: '' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: '' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: '' },
        { property: 'og:description', content: '' },
        { property: 'og:image', content: '/logo.jpg' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  }
}, environment);
