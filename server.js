const express = require('express');
const path = require('path');
const server = express();
const webpack = require("webpack");
const webpackConfig = require("./webpack.dev.js");
const compiler = webpack(webpackConfig);

const buildDir = path.join(__dirname, 'dist');
const dataDir = path.join(__dirname, 'src/data');

// webpack hmr
server.use(
    require("webpack-dev-middleware")(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    })
);

server.use(require("webpack-hot-middleware")(compiler));

server.get('/orders.json', (request, response) => {
    response.sendFile(dataDir + '/orders.json');
});

server.get('/main.bundle.js', (request, response) => {
    response.sendFile(buildDir + '/main.bundle.js');
});

server.get('/', (request, response) => {
    response.setHeader("X-ESI", 1);
    response.send('<html>' +
        '<head>' +
        '<title>Hi</title>' +
        '</head>' +
        '<body>' +
        '<h1>Application</h1>' +
        '<div id="root">' +
        '</div>' +
        '<script src="bundle.js"></script>' +
        '</body>' +
        '</html>');
});

server.listen(3004, () => {
    console.log('Server started.')
});