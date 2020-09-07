<h1 align="center">xiaoxiao-ui  一个 Vue UI 组件</h1>
<p align="center">
<img src="https://travis-ci.com/travis-ci/travis-web.svg?branch=master">
<img src="https://img.shields.io/npm/dy/xiaoxiao-ui">
<img src="https://img.shields.io/npm/v/xiaoxiao-ui">
<img src="https://img.shields.io/npm/l/xiaoxiao-ui">
</p>
## 介绍 
这是我在学习Vue过程中做的一个UI库，可以使用以及可供参考
## 开始使用
1. Add Css Style

    使用本框架前，请在CSS中开启 border-box
    
    ```css
    *,*::before,*::after{box-sizing:border-box;}
    ```
   /*ie8 及以上浏览器都支持此样式*/
   
   目前使用前，需要设置颜色变量
   ```css
    :root {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --button-radius: 4px;
      --color: #999;
      --border-color: #999;
      --border-color-hover: #666;
    }
   ``` 
   /* ie 15 及以上浏览器都支持*/
   /*在使用ie时 要用edge 渲染*/
   ```html
    < meta http-equiv = "X-UA-Compatible" content = "IE=edge,chrome=1" />
   /* 以上代码可兼容 ie 根据实际情况 此条可参考*/
   ```
2. 安装

   npm
   > npm i xiaoxiao-ui 

3. 引入
   ```javascript
   import { Button, ButtonGroup, Icon} from 'xiaoxiao-ui'
   import "xiaoxiao-ui/dist/index.css"
   
   export default{
     components:{
       "g-button":Button
     }
   }
   ```
     
## 文档
## 提问
## 变更记录
## 贡献代码

