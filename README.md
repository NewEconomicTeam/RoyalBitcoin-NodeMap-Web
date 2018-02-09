# RoyalBitcoin-NodeMap-Web

节点地图前端页面项目（当前版本基于RBTC项目信息）

## Badge

### GitHub

[![GitHub followers](https://img.shields.io/github/followers/NewEconomicTeam.svg?label=github%20follow)](https://github.com/NewEconomicTeam/RoyalBitcoin-NodeMap-Web)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/NewEconomicTeam/RoyalBitcoin-NodeMap-Web.svg)](https://github.com/NewEconomicTeam/RoyalBitcoin-NodeMap-Web)
[![GitHub stars](https://img.shields.io/github/stars/NewEconomicTeam/RoyalBitcoin-NodeMap-Web.svg?label=github%20stars)](https://github.com/NewEconomicTeam/RoyalBitcoin-NodeMap-Web)
[![GitHub release](https://img.shields.io/github/release/NewEconomicTeam/RoyalBitcoin-NodeMap-Web.svg)](https://github.com/NewEconomicTeam/RoyalBitcoin-NodeMap-Web/releases)
[![Github commits (since latest release)](https://img.shields.io/github/commits-since/NewEconomicTeam/RoyalBitcoin-NodeMap-Web/latest.svg)](https://github.com/NewEconomicTeam/RoyalBitcoin-NodeMap-Web)

[![Github All Releases](https://img.shields.io/github/downloads/NewEconomicTeam/RoyalBitcoin-NodeMap-Web/total.svg)](https://github.com/NewEconomicTeam/RoyalBitcoin-NodeMap-Web/releases)
[![GitHub Release Date](https://img.shields.io/github/release-date/NewEconomicTeam/RoyalBitcoin-NodeMap-Web.svg)](https://github.com/NewEconomicTeam/RoyalBitcoin-NodeMap-Web/releases)

### 其他

[![license](https://img.shields.io/github/license/NewEconomicTeam/RoyalBitcoin-NodeMap-Web.svg)](https://github.com/NewEconomicTeam/RoyalBitcoin-NodeMap-Web)

## 项目展示

[RBTC官方节点地图](https://nodemap.rbtc.world)

## 功能描述

此项目用于生成节点地图的完成前端页面，生成后用于后端服务器 & Nginx 使用，静态文件使用 Nginx 提供访问服务， HTML 模板使用后端 Django 服务提供渲染并呈现给客户端。

## 命令用例

### `npm install`

根据 `package.json` 中的依赖安装 node 包

### `gulp`

开发模式，会 __watch__ 所有源码路径，并使用 `browsersync` 打开指定的浏览器( 默认为Google Chrome )，并代理访问 `localhost:8081` (此服务由后台Server项目启动后提供)，每次修改源码后会自动刷新浏览器，并且该测试插件支持多终端同步滚屏，便于开发测试

### `gulp publish`

发布模式，将对源码进行编译、压缩，并输出到 `gulp/config.js` 文件中指定的路径中

## 技术栈

- HTML
    - Django Template
- CSS
    - PostCSS
    - Bootstrap
- JS
    - jQuery
    - Vue
    - ECharts
- Base
    - Node.js
    - Gulp

## License

本项目采用 [![license](https://img.shields.io/github/license/NewEconomicTeam/RoyalBitcoin-NodeMap-Web.svg)](https://github.com/NewEconomicTeam/RoyalBitcoin-NodeMap-Web) 协议开源发布，请您在修改后维持开源发布，并为原作者额外署名，谢谢您的尊重

## 问题

如果您在使用该应用时遇到任何问题，请在 GitHub 上查看本项目 [![RoyalBitcoin-NodeMap-Web](https://img.shields.io/badge/Repo-RoyalBitcoin--NodeMap--Web-brightgreen.svg)](https://github.com/NewEconomicTeam/RoyalBitcoin-NodeMap-Web) ，并在其中提交 Issues 给我们，多谢您的帮助~~
