import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3520e4c0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _efbcc22a = () => interopDefault(import('../pages/info.vue' /* webpackChunkName: "pages/info" */))
const _05276865 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3520e4c0,
    name: "about"
  }, {
    path: "/info",
    component: _efbcc22a,
    name: "info"
  }, {
    path: "/",
    component: _05276865,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
