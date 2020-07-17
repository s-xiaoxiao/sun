import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
new Vue({
  el:'#app',
  data:{
    loading1:false,
    loading2:false,
    loading3:false
  }
});

import chai from 'chai';
import spies from 'chai-spies'
chai.use(spies);
const expect = chai.expect
//单元测试
{
  let constructor = Vue.extend(Button);
  let vm = new constructor({
    propsData:{
      icon:'right'
    }
  });
  vm.$mount('#test');
  let useElement = vm.$el.querySelector('use');

  let href = useElement.getAttribute('xlink:href');
  expect(href).to.eq('#i-right');
  vm.$el.remove();
  vm.$destroy();
}

{
  let constructor = Vue.extend(Button);
  let vm = new constructor({
    propsData:{
      loading:true,
      icon:'down'
    }
  });
  vm.$mount();
  let useElement = vm.$el.querySelector('use');
  let href = useElement.getAttribute('xlink:href');
  console.log(href);
  expect(href).to.eq('#i-loading');
  vm.$el.remove();
  vm.$destroy();
}
{
  let constructor = Vue.extend(Button);
  let vm = new constructor({
    propsData:{
      loading:true,
      icon:'down',
    }
  });
  vm.$mount('#test2');
  let svg = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg);
  console.log(order);
  expect(order).to.eq('1');
  vm.$el.remove();
  vm.$destroy();
}
{
  const div = document.createElement('div');
  let constructor = Vue.extend(Button);
  let vm = new constructor({
    propsData:{
      icon:'down',
      iconPosition:'right'
    }
  });
  vm.$mount('#test4');
  let svg = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg);
  console.log(svg);
  expect(order).to.eq('2');
  vm.$el.remove();
  vm.$destroy();
}
{
  // mock
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    }
  });
  vm.$mount();
  let spy = chai.spy(function(){});
  vm.$on('click',spy);
  // 希望这个函数被执行
  let button = vm.$el;
  button.click();
  expect(spy).to.have.been.called();
}