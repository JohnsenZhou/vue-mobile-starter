# vue-mobile-starter &middot;  [![PyPI](https://img.shields.io/pypi/status/Django.svg)]()  [![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/JohnsenZhou/vue-mobile-starter/blob/master/LICENSE)

[View README in English](https://github.com/JohnsenZhou/vue-mobile-starter/blob/master/README_en.md)

> 基于 vue2 + vuex + vue-router 构建的移动端单页微应用，适合于vue2、vuex、vue-router核心概念的理解与掌握。

## 前言
本项目虽说是一个十来个页面的小型项目，不过却涉及到**vue**模块的全局和局部应用配置、第三方UI组件的使用、**vuex stroe**的合理化配置、**vue-router**编程式的导航，路由子路由配置，路由信息对象等。非常适合于新手对**vue**核心开发理念的掌握。
> 之后会做一版 **react + redux** 的版本，感兴趣的同学可以持续关注哦。**[查看 React 版本](https://github.com/JohnsenZhou/react-mobile-starter)**
> 


## 开源技术支持

1. **[vue全家桶](https://cn.vuejs.org/)**：vue2 + vuex + vue-router + vue-cli
2. **[jsonplaceholder](http://jsonplaceholder.typicode.com)**：一个简单的在线模拟REST API服务器
3. **[axios](https://github.com/mzabriskie/axios)**：基于Promise 的 HTTP 请求客户端,可同时在浏览器和 node.js 中使用
4. **[muse-ui](https://museui.github.io/)**：基于 Vue 2.0 和 Material Desigin 的 UI 组件库
5. **[express](http://www.expressjs.com.cn/)**：基于 Node.js 平台的 web 应用开发框架
6. **[pm2](http://pm2.keymetrics.io/)**：Node应用进程管理器

## 如何开发

``` bash
# 克隆本仓库
git clone https://github.com/JohnsenZhou/vue-mobile-starter.git

# 进入仓库目录
cd vue-mobile-starter

# 安装依赖
npm install

# 启动项目，本地浏览地址 => localhost:8080
npm run dev

# 打包压缩
npm run build

```

## 目录结构
```
.
├── README.md            // README文件
├── build                // vue-cli生成的配置文件
├── config               // vue-cli生成的配置文件
├── config.dev.json      // 部署配置文件
├── config.prod.json     // 部署配置文件
├── index.html           // index入口文件
├── node_modules         
├── npm-shrinkwrap.json  // 依赖版本锁定
├── package.json         // npm 配置文件
├── pm2.json             // pm2 配置文件
├── server.js            // node 部署服务文件配置
├── src                  // 项目开发目录
│   ├── App.vue          // 项目主组件
│   ├── assets           // 资源文件夹
│   ├── components       // vue通用组件
│   ├── main.js          // vue实例入口文件
│   ├── router           // vue-router配置文件
│   ├── services         // 接口文件
│   ├── store            // vuex配置文件
│   ├── utils            // js通用工具组件
│   └── views            // vue视图页面
└── static               // 静态资源文件

```

## 效果演示

[**在线浏览Demo请戳这里**](http://47.94.102.32:8001)

>1. 项目通过阿里云部署
>1. 想了解详细部署过程的同学请浏览 [**此文档**](https://github.com/JohnsenZhou/NodeApp-Deploy)


### 手机浏览请扫描下方二维码

![在线浏览](https://raw.githubusercontent.com/JohnsenZhou/NodeApp-Deploy/img/qrcode.png)

## License
[MIT](https://github.com/JohnsenZhou/vue-mobile-starter/blob/master/LICENSE) license.
