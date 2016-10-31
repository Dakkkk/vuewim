var resources = {
    "pl": {
        "translation": {
            "title": "Hejo!",
            "welcome-title": "Witamy na stronie firmy Web In Mobile!"
               
        }
    },
        "en": {
        "translation": {
            "title": "title of the page",
            "welcome-title": "Welcome!"
              
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