<template>
  <button @click="$emit('click')" class="g-button" :class="{[`icon-${iconPosition}`]:true}">
   <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
    <slot/>
    </div>
  </button>
</template>

<script>
  import Icon from './icon.vue'
  export default {
    name:'XiaoxiaoButton',
    // props: ['icon', 'iconPosition']
    components:{'g-icon':Icon},
    props:{
      icon:{},
      loading:{
        type:Boolean,
        default:false
      },
      iconPosition:{
        type:String,
        default:'left',
        validator: function (value) {
          return value === 'right' || value === 'left';
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @keyframes spin { 0%{transform: rotate(0deg)} 100%{transform:rotate(360deg)} }
  .g-button {font-size: var(--font-size);
    height: var(--button-height);padding: 0 1em;border-radius: var(--button-radius);border: 1px solid var(--border-color);
    background: var(--button-bg);display: inline-flex;justify-content: center;align-items: center;vertical-align: middle;
    &:hover {border-color: var(--border-color-hover);}
    &:active {background-color: var(--button-active-bg);}
    &:focus {outline: none;}
    > .icon {order: 1;margin: .1em .3em 0 0;}
    > .content {order: 2;}
    &.icon-right {
      > .icon {order: 2;margin: .1em 0 0 .3em;}
      > .content {order: 1}
    }
  }
  .loading{animation:spin 2s infinite linear;}
</style>