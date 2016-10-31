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
    
        var resources = {
    "pl": {
        "translation": {
            "title": "Hejo!",
            "welcome-title": "Witamy na stronie firmy Web In Mobile!",
            "welcome-p1": "Witamy na stronie firmy Web In Mobile.",
            "welcome-p2": "Zaparaszamy do współpracy!"
               
        }
    },
        "en": {
        "translation": {
            "title": "title of the page",
            "welcome-title": "Welcome!",
            "welcome-p1": "Witamy on the page of Web In Mobile.",
            "welcome-p2": "Cooperation"
            
              
            }
        }
    }

    // $document.onload(function() {
    //        i18n.init({
    //     "lng": 'pl',
    //     "resStore": resources,
    //     "fallbackLng" : 'pl'
    // }, function (t) {
    //     $(document).i18n();
    // });

    $('.lang').click(function () {
        //location.reload();
        if (!lang) {
        var lang = $(this).attr('data-lang');
        localStorage.setItem('lang', lang);
        }
        else {
        var lang = localStorage.getItem( 'lang' )
        }
        i18n.init({
            lng: lang
        }, function (t) {
            $(document).i18n();
        });
    });
   // })
    
    router.beforeEach(function () {
     

    
  
    })
  }
}
