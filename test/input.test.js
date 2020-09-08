const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false;
Vue.config.devtools = false;

// mocha 提供的 describe and it
describe('Input', () => {
  it('存在', () => {
    expect(Input).to.exist
  });

  describe('props', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(function () {
      vm.$destroy()
    });
    it('可以设置value', () => {
      vm = new Constructor({
        propsData: {
          value: '张三'
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.value).to.equal('张三');
    });

    it('可以设置disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.disabled).to.equal(true);
    });

    it('可以设置readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      console.log(inputElement.outerHTML);
      expect(inputElement.readOnly).to.equal(true);
    });

    it('可以设置error', () => {
      vm = new Constructor({
        propsData: {
          error: '你错了'
        }
      }).$mount();
      const useElement = vm.$el.querySelector('use');
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error');
      const spanElement = vm.$el.querySelector('span');
      expect(spanElement.innerText).to.equal('你错了')
    });
  });

  describe('事件', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(function () {
      vm.$destroy()
    });
    it('支持input/click/focus/change/blur事件', () => {
      ['input','click','focus','change','blur'].forEach((eventName)=>{
        vm = new Constructor({}).$mount();
        const callback = sinon.fake();
        vm.$on(eventName,callback);
        //自定义一个事件
        let event = new Event(eventName);
        Object.defineProperty(event,'target',{
            value:{value:'hi'},
          enumerable:true

        });
        let inputElement = vm.$el.querySelector("input");
        //触发该事件
        inputElement.dispatchEvent(event);
        console.log(eventName);
        console.log(event);
        //期望该回调被调用
        expect(callback).to.have.been.calledWith('hi')

      });
    })
    // it('支持click事件', () => {
    //   vm = new Constructor({}).$mount();
    //   const callback = sinon.fake();
    //   vm.$on('click',callback);
    //   let event = new Event('click');
    //   let inputElement = vm.$el.querySelector("input");
    //   inputElement.dispatchEvent(event);
    //   expect(callback).to.have.been.calledWith(event)
    // })
    // it('支持change事件', () => {
    //   vm = new Constructor({}).$mount();
    //   const callback = sinon.fake();
    //   vm.$on('change',callback);
    //   let event = new Event('change');
    //   let inputElement = vm.$el.querySelector("input");
    //   inputElement.dispatchEvent(event);
    //   expect(callback).to.have.been.calledWith(event)
    // })
    // it('支持focus事件', () => {
    //   vm = new Constructor({}).$mount();
    //   const callback = sinon.fake();
    //   vm.$on('focus',callback);
    //   let event = new Event('focus');
    //   let inputElement = vm.$el.querySelector("input");
    //   inputElement.dispatchEvent(event);
    //   expect(callback).to.have.been.calledWith(event)
    // })
    // it('支持blur事件', () => {
    //   vm = new Constructor({}).$mount();
    //   const callback = sinon.fake();
    //   vm.$on('blur',callback);
    //   let event = new Event('blur');
    //   let inputElement = vm.$el.querySelector("input");
    //   inputElement.dispatchEvent(event);
    //   expect(callback).to.have.been.calledWith(event);
    // })
  })
});