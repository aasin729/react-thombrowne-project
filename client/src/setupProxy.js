const { createProxyMiddleware } = require('http-proxy-middleware'); // npm i -D http-proxy-middleware

module.exports = function(app) {
    app.use( 
        createProxyMiddleware("/product/order", {
            target: "http://localhost:8001",
            changeOrigin: true
        })
    );
    app.use( 
        createProxyMiddleware("/auth/login", {
            target: "http://localhost:8001",
            changeOrigin: true
        })
    );
    app.use( 
        createProxyMiddleware("/auth/join", {
            target: "http://localhost:8001",
            changeOrigin: true
        })
    );
    app.use( 
        createProxyMiddleware("/auth/idcheck", {
            target: "http://localhost:8001",
            changeOrigin: true
        })
    );
    app.use( 
        createProxyMiddleware("/product/cart", {
            target: "http://localhost:8001",
            changeOrigin: true
        })
    )
    
};