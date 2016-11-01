var resources = {
    "pl": {
        "translation": {
            "title": "Hejo!",
            "menu-1": "Witamy",
            "menu-2": "O nas",
            "menu-3": "Kontakt",         
            "welcome-heading": "WITAMY",
            "welcome-title": "Witamy na stronie firmy Web In Mobile!",
            "welcome-p1": "Witamy na stronie firmy Web In Mobile.",
            "welcome-p2": "Zaparaszamy do współpracy!",
            "about-heading": "O NAS",
            "about-title": "Czym się zajmujemy:",
            "about-p1": "Tworzymy responsywne witryny i aplikacje internetowe.",
            "about-p2": "Koncentrujemy się głównie na Single Page Applications.",
            "about-p3": "Korzystamy następującuch technologii: HTML5, CSS3, Bootstrap, ES6, AngularJs, VieJs, jQuery, Gulp, Grunt, SASS, Git",
            "main-title": "Strona główna",
            "main-p1": "Zapraszamy do zapoznania się z naszą ofertą!",
            "contact-heading": "KONTAKT",
            "contact-title": "Kontakt",
            "contact-p1": "Telefon:",
            "contact-h4": "Formularz kontaktowy:",
            "contact-label-title": "Tytuł",
            "contact-label-message": "Wiadomość",


               
        }
    },
        "en": {
        "translation": {
            "title": "title of the page",
            "menu-1": "Welcome",
            "menu-2": "About us",
            "menu-3": "Contact",
            "welcome-heading": "WELCOME",
            "welcome-title": "Welcome to the Web In Mobile website!",
            "welcome-p1": "Welcome on the page of Web In Mobile.",
            "welcome-p2": "Welcome to cooperate!",
            "about-heading": "ABOUT US",
            "about-title": "What we do?",
            "about-p1": "We create responsive websites and applications.",
            "about-p2": "We are mostly focusing on Single Page Applications.",
            "about-p3": "We use the following technologies: HTML5, CSS3, Bootstrap, ES6, AngularJs, VieJs, jQuery, Gulp, Grunt, SASS, Git",
            "main-title": "Main page",
            "main-p1": "See our offer for more details!",
            "contact-heading": "CONTACT",
            "contact-title": "Contact",
            "contact-p1": "Phone number:",
            "contact-h4": "Contact form",
            "contact-label-title": "Title",
            "contact-label-message": "Message",      
        }
    }
};

   
   // Start onlu if the SPA is ready
var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
         $.i18n.init({
        
        "lng": 'pl',
        "resStore": this.resources,
        "fallbackLng" : 'pl'
    }, function (t) {
        $(document).i18n();
       
    });
    
     $('.lang').click(function () {
        
        if (!lang) {
          var lang = $(this).attr('data-lang');
        localStorage.setItem('lang', lang);
        }
        else {
        var lang = localStorage.getItem( 'lang' );
        }
        i18n.init({
            lng: lang
        }, function (t) {
            $(document).i18n();
        });
    });
        $('.app-location').click(function () {
            setTimeout(function(){
        if (!lang) {
          var lang = $(this).attr('data-lang');
        localStorage.setItem('lang', lang);
        }
        else {
        var lang = localStorage.getItem( 'lang' );
        }
        i18n.init({
            lng: lang
        }, function (t) {
            $(document).i18n();
        });
        }, 25);
    });
    }    
}, 100);


   
    
   
