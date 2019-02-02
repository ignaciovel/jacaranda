import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import DataJson from './json/data.json'

Vue.use(VueMaterial);

// Vue.material.registerTheme({
//   default: {
//     primary: 'black',
//     accent: 'white'
//   }
// });

let mixin = {
  data: {
    productos: DataJson,
  },
  computed: {},
  methods: {}
};

mixin.methods.openDialog = function (ref) {
  this.$refs[ref].open();
}

mixin.methods.closeDialog = function (ref) {
  this.$refs[ref].close();
}

mixin.methods.changeProduct = function (slug) {
  document.location.href = slug;
}

mixin.methods.toggleRightSidenav = function () {
  this.$refs.rightSidenav.toggle();
};

Vue.config.productionTip = false

new Vue({
  mixins:[mixin],
  render: h => h(App),
  data: {
  },
  methods: {
    toggleSeen: function (index) {
      vm.productos[index].isHidden = !vm.productos[index].isHidden;
      vm.productos[index].info = vm.productos[index].isHidden ? '- INFO' : '+ INFO';
    },
  }
}).$mount('#app')
