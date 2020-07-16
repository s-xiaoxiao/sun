<template>
  <div class="g-button-group">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'button-group',
    mounted() {
      for(let node of this.$el.children){
        if(node.localName !== 'button'){
          console.warn(`button-group的子元素应该是g-button 不是${node.localName}`);
        }
      }
    }
  };
</script>

<style lang="scss">
  .g-button-group{
    display: inline-flex;
    vertical-align: middle;
    > .g-button{
      border-radius:0;
      margin-left: -1px;
      &:first-child{
        border-top-left-radius: var(--button-radius);
        border-bottom-left-radius: var(--button-radius);
      }
      &:last-child{
        border-top-right-radius: var(--button-radius);
        border-bottom-right-radius: var(--button-radius);
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>