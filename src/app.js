import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
new Vue({
  el:'#app',
  data:{
    loading1:false,
    loading2:false,
    loading3:false,
    message:'hi'
  },
  methods:{
    iinput(x){
      console.log(x.target.value);
      console.log('input');
    },
    ichange(x){
      console.log(x.target.value);
      console.log('change');
    },
    iclick(x){
      console.log(x.target.value);
      console.log('click');
    },
    ifocus(x){
      console.log(x.target.value);
      console.log('focus');
    },
    iblur(x){
      console.log(x.target.value);
      console.log('blur');
    }
  }
});

