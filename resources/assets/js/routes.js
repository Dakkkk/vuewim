module.exports = {

  configRouter: function (router) {

    router.map({
      '/home': {
        component: require('./compiled/pages/home.vue'),
        subRoutes: {
          '/': {
            component: require('./compiled/pages/home/home.vue')
          },
          '/welcome': {
            component: require('./compiled/pages/home/welcome.vue')
          },
          '/about': {
            component: require('./compiled/pages/home/about.vue')
          },
          '/contact': {
            component: require('./compiled/pages/home/contact.vue')
          }
        }
      },
    
      '/terms': {
        component: require('./compiled/pages/terms.vue')
      },
      '*': {
        component: require('./compiled/pages/404.vue')
      }
    })

    router.alias({
      '': '/home',
      '/auth': '/auth/login'
    })

    router.beforeEach(function (transition) {

      var token = localStorage.getItem('jwt-token')
      if (transition.to.auth) {
        if (!token || token === null) {
          transition.redirect('/auth/login')
        }
      }
      if (transition.to.guest) {
        if (token) {
          transition.redirect('/')
        }
      }
      transition.next()
    })
  }
}
