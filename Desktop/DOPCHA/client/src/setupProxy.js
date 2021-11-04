const {createProxyMiddleware}=require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        'api',
        createProxyMiddleware({
            target:'http://loacalhost:5000',
            changeOrigin: true,
        })
    );
};