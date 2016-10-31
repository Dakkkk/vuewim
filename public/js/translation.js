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
};

$(document).ready(function () {
    i18n.init({
        "lng": 'pl',
        "resStore": resources,
        "fallbackLng" : 'pl'
    }, function (t) {
        $(document).i18n();
    });

    $('.lang').click(function () {
        var lang = $(this).attr('data-lang');
        i18n.init({
            lng: lang
        }, function (t) {
            $(document).i18n();
        });
    });
});