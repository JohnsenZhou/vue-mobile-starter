const url = require('url');
const path = require('path');
const express = require('express');
// 代理转发
const proxy = require('http-proxy-middleware');
// 日志库
const expressWinston = require('express-winston');
const winston = require('winston');

const helmet = require('helmet');
const compression = require('compression');

// 环境变量
const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production' ? true : false;

// App配置
const config = isProd ? require('./config.prod.json')
                      : require('./config.dev.json');

// if (config.watcher) {
//     require(config.watcher);
// }

const app = express();

// 设置安全的 HTTP Header
app.use(helmet());

// 开启 gzip 压缩
app.use(compression());

// 静态资源
app.use(express.static(path.join(__dirname, 'dist')));

// 代理转发
app.use('/replace', proxy({
  target: config.api, // target host
  changeOrigin: true,               // needed for virtual hosted sites
  pathRewrite: {
      '^/replace' : ''           // remove base path
  }
}));

// express-winston errorLogger makes sense AFTER the router.
app.use(
  expressWinston.logger({
    transports: [
      new winston.transports.Console({
        json: true,
        colorize: true
      })
    ]
  })
);

app.listen(config.port, () => {
  console.log(`🌎  => Server is running on port ${config.port}`);
});