module.exports = {

  ready: function () {
          // this.translate(this.resources); 

    // this.$on('userHasLoggedOut', function () {
    //   this.destroyLogin()
    // })

    // this.$on('userHasLoggedIn', function (user) {
    //   this.setLogin(user)
    // })
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
           i18n.init({
        "lng": 'pl',
        "resStore": resources,
        "fallbackLng" : 'pl'
    }, function (t) {
        $(document).i18n();
    });

    $('.lang').click(function () {
        //location.reload();
        if (!lang) {
        var lang = $(this).attr('data-lang');
        localStorage.setItem('lang', lang);
        }
        else {
        var lang = localStorage.getItem( 'lang' ) || 'pl'
        }
        i18n.init({
            lng: lang
        }, function (t) {
            $(document).i18n();
        });
    });

  },

  resources: function () {
  //    return {
  //    "pl": {
  //       "translation": {
  //           "title": "Hejo!",
  //           "welcome-title": "Witamy na stronie firmy Web In Mobile!",
  //           "welcome-p1": "Witamy na stronie firmy Web In Mobile.",
  //           "welcome-p2": "Zaparaszamy do współpracy!"
               
  //       }
  //   },
  //       "en": {
  //       "translation": {
  //           "title": "title of the page",
  //           "welcome-title": "Welcome!",
  //           "welcome-p1": "Witamy on the page of Web In Mobile.",
  //           "welcome-p2": "Cooperation"
            
              
  //           }
  //       }
   
  
  // }
     
  },

  methods: {
    // translate: function (resources) {
    //    i18n.init({
    //     "lng": 'pl',
    //     "resStore": resources,
    //     "fallbackLng" : 'pl'
    // }, function (t) {
    //     $(document).i18n();
    // });

    // $('.lang').click(function () {
    //     var lang = $(this).attr('data-lang');
    //     i18n.init({
    //         lng: lang
    //     }, function (t) {
    //         $(document).i18n();
    //     });
    // });
    // }
    

    // setLogin: function (user) {
    //   // Save login info in our data and set header in case it's not set already
    //   this.user = user
    //   this.authenticated = true
    //   this.token = localStorage.getItem('jwt-token')
    // },

    // destroyLogin: function (user) {
    //   // Cleanup when token was invalid our user has logged out
    //   this.user = null
    //   this.token = null
    //   this.authenticated = false
    //   localStorage.removeItem('jwt-token')
    //   if (this.$route.auth) this.$route.router.go('/auth/login')
    // }
  }

}
