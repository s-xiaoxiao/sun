<p align="center">
  <img src="https://travis-ci.com/travis-ci/travis-web.svg?branch=master" alt="">
  <img src="https://travis-ci.com/travis-ci/travis-web" alt="">
  <img src="https://img.shields.io/npm/dy/xiaoxiao-ui" alt="">
  <img src="https://img.shields.io/npm/v/xiaoxiao-ui" alt="">
  <img src="https://img.shields.io/npm/l/xiaoxiao-ui" alt="">
</p>

<h1 align="center" style="height: 150px;line-height: 75px"> xiaoxiao-ui <br /> 一个 Vue UI 组件 </h1>

## 介绍 
这是我在学习Vue过程中做的一个UI库，可以使用以及可供参考
## 开始使用
1. Add Css Style

    使用本框架前，请在CSS中开启 border-box
    
    ```css
    *,*::before,*::after{box-sizing:border-box;}
    /* e8 及以上浏览器都支持此样式 */
    ```
   
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
    /* ie 15 及以上浏览器都支持*/
   ``` 
   ```html
    <!-- 在使用ie时 要用edge 渲染 -->
    < meta http-equiv = "X-UA-Compatible" content = "IE=edge,chrome=1" />
    <!-- 以上代码可兼容 ie 根据实际情况 此条可参考 -->
   ```
2. 安装

   npm
   > npm i xiaoxiao-ui 

3. 引入
   ```javascript
   //按需引入 ui 组件
   import { Button,Input, ButtonGroup, Icon} from 'xiaoxiao-ui'
   import "xiaoxiao-ui/dist/index.css"
   
   export default{
     components:{
       "g-button":Button,
       "g-input":Input
     }
   }
   ```
   * g-button 使用方法
   ```vue
    <g-button icon="settings">设置</g-button> 
   
   //下次更新 支持的icon图标名，以及 g-button 接收的值
   ```
   * g-input 使用方法
   ```vue
     <g-input v-model="message"></g-input>
     <g-input v-model="message" disabled></g-input>  //不可用
     <g-input v-model="message" readonly></g-input>  //只读
     <g-input v-model="message" error="名字不对"></g-input> //根据message的值判断传入error值。
     
     当使用input时，目前 组件的事件click、change、input、focus、blur。使用emit返回最新值
   ```  
## 文档
## 提问
## 变更记录
## 贡献代码

