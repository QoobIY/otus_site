const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api', proxy({target: 'http://192.168.101.31:9000', changeOrigin: true,}));
};