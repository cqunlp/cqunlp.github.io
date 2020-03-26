import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [ 
      { text: '主页', to: '/', icon:'home'},
      { text: 'API服务', to: '/service', icon: 'rounded_corner'},
      { text: '新闻', to: '/events', icon: 'rounded_corner'},
      { text: '研究团队', to: '/team', icon:'group'},
      { text: '关于我们', to: '/about', icon: 'toc'},
      { text: '加入我们', to: '/contact', icon:'person'}
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
