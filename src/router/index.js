import Vue from 'vue'
import Router from 'vue-router'
import Intro from '../components/intro/Introduction'
import Analysis from '../components/analysis/Analysis'
import Conclusion from '../components/conclusion/Conclusion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Intro
    },
    {
      path: '/intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '*',
      component: Intro
    },
    {
      path: "/analysis",
      component: Analysis
    },
    {
      path: "/conclusion",
      component: Conclusion
    }
  ]
})
