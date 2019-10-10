import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _4fe8ad36 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _75fab046 = () => interopDefault(import('../pages/archives/index.vue' /* webpackChunkName: "pages/archives/index" */))
const _b55873a4 = () => interopDefault(import('../pages/clientSide/index.vue' /* webpackChunkName: "pages/clientSide/index" */))
const _2c27a289 = () => interopDefault(import('../pages/comment/index.vue' /* webpackChunkName: "pages/comment/index" */))
const _0b1ef5ca = () => interopDefault(import('../pages/donate/index.vue' /* webpackChunkName: "pages/donate/index" */))
const _974d679e = () => interopDefault(import('../pages/input.vue' /* webpackChunkName: "pages/input" */))
const _5ecb3d86 = () => interopDefault(import('../pages/inventory/index.vue' /* webpackChunkName: "pages/inventory/index" */))
const _7f1f79ba = () => interopDefault(import('../pages/links/index.vue' /* webpackChunkName: "pages/links/index" */))
const _12a32659 = () => interopDefault(import('../pages/RSS.vue' /* webpackChunkName: "pages/RSS" */))
const _e8523fe6 = () => interopDefault(import('../pages/about/blog.vue' /* webpackChunkName: "pages/about/blog" */))
const _a30949e4 = () => interopDefault(import('../pages/about/github.vue' /* webpackChunkName: "pages/about/github" */))
const _5bac6bc3 = () => interopDefault(import('../pages/about/me.vue' /* webpackChunkName: "pages/about/me" */))
const _23698976 = () => interopDefault(import('../pages/archives/caprice.vue' /* webpackChunkName: "pages/archives/caprice" */))
const _35eb61a0 = () => interopDefault(import('../pages/archives/id.vue' /* webpackChunkName: "pages/archives/id" */))
const _22898db1 = () => interopDefault(import('../pages/archives/live.vue' /* webpackChunkName: "pages/archives/live" */))
const _7ce312b6 = () => interopDefault(import('../pages/archives/reprint.vue' /* webpackChunkName: "pages/archives/reprint" */))
const _285a6153 = () => interopDefault(import('../pages/archives/resource.vue' /* webpackChunkName: "pages/archives/resource" */))
const _6bd371dc = () => interopDefault(import('../pages/archives/skill.vue' /* webpackChunkName: "pages/archives/skill" */))
const _18ef6265 = () => interopDefault(import('../pages/inventory/book.vue' /* webpackChunkName: "pages/inventory/book" */))
const _337e5afd = () => interopDefault(import('../pages/inventory/photos.vue' /* webpackChunkName: "pages/inventory/photos" */))
const _0613b2de = () => interopDefault(import('../pages/inventory/song.vue' /* webpackChunkName: "pages/inventory/song" */))
const _1e795939 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _4fe8ad36,
      name: "admin"
    }, {
      path: "/archives",
      component: _75fab046,
      name: "archives"
    }, {
      path: "/clientSide",
      component: _b55873a4,
      name: "clientSide"
    }, {
      path: "/comment",
      component: _2c27a289,
      name: "comment"
    }, {
      path: "/donate",
      component: _0b1ef5ca,
      name: "donate"
    }, {
      path: "/input",
      component: _974d679e,
      name: "input"
    }, {
      path: "/inventory",
      component: _5ecb3d86,
      name: "inventory"
    }, {
      path: "/links",
      component: _7f1f79ba,
      name: "links"
    }, {
      path: "/RSS",
      component: _12a32659,
      name: "RSS"
    }, {
      path: "/about/blog",
      component: _e8523fe6,
      name: "about-blog"
    }, {
      path: "/about/github",
      component: _a30949e4,
      name: "about-github"
    }, {
      path: "/about/me",
      component: _5bac6bc3,
      name: "about-me"
    }, {
      path: "/archives/caprice",
      component: _23698976,
      name: "archives-caprice"
    }, {
      path: "/archives/id",
      component: _35eb61a0,
      name: "archives-id"
    }, {
      path: "/archives/live",
      component: _22898db1,
      name: "archives-live"
    }, {
      path: "/archives/reprint",
      component: _7ce312b6,
      name: "archives-reprint"
    }, {
      path: "/archives/resource",
      component: _285a6153,
      name: "archives-resource"
    }, {
      path: "/archives/skill",
      component: _6bd371dc,
      name: "archives-skill"
    }, {
      path: "/inventory/book",
      component: _18ef6265,
      name: "inventory-book"
    }, {
      path: "/inventory/photos",
      component: _337e5afd,
      name: "inventory-photos"
    }, {
      path: "/inventory/song",
      component: _0613b2de,
      name: "inventory-song"
    }, {
      path: "/",
      component: _1e795939,
      name: "index"
    }, {
      path: "/archives/:id",
      component: _35eb61a0,
      name: "/archives/:id"
    }],

    fallback: false
  })
}
