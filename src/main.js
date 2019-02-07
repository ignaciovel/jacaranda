import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import SpanishData from './data/spanish.json'
import EnglishData from './data/english.json'
import VueRouter from 'vue-router'
import Router from './Router.js'
import { Plugin } from 'vue-fragment'

let mixin = {

  methods: {
    changeLanguage() {
      if (this.$root.language == 'English') {
        this.$root.language = "Español"
        this.$root.dataPage = EnglishData
      } else {
        this.$root.language = "English"
        this.$root.dataPage = SpanishData
      }

    }
  }
};
const router = new VueRouter(Router)


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
  this.$parent.$children[1].$refs.rightSidenav.toggle()
};

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(Plugin)
Vue.mixin(mixin)

Vue.material.registerTheme({
  default: {
    primary: 'black',
    accent: 'white'
  }
});

new Vue({
  router,
  // mixins:[mixin],
  render: h => h(App),
  data: {
      language: 'English',
      dataPage: SpanishData,
  },
  computed: {
    language: {
      get: () => this.language,
      set: (language) => this.language = language
    },
    dataPage: {
      get: () => this.dataPage,
      set: (dataPage) => this.dataPage = dataPage
    }
  },
  methods: {
  }
}).$mount('#app')
