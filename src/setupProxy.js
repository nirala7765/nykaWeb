const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/wp-json',
    createProxyMiddleware({
      target: 'https://your-wordpress-site.com',
      changeOrigin: true,
    })
  );
};
