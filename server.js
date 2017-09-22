'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const path=require("path");

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
    hot:true,
    contentBase:path.join(__dirname,"dist")
});

server.listen(10000, '192.168.0.145', () => {
  console.log('Starting server on http://192.168.0.145:10000');
});