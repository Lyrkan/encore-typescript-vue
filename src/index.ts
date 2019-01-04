import Vue from 'vue';
import MyComponent from './my-component.vue';

Vue.component('my-component', MyComponent);

new Vue({
  el: '#vue-root'
});
