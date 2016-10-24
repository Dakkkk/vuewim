var AnimateWeb = function($main) {
    this.svgContainer = $main.find("#web-skill");
    console.log(this.svgContainer.length);

    if (this.svgContainer.length === 0) {
        return;
    }

    this.mobile = this.svgContainer.find('#mobile');
    this.mobile2 = this.svgContainer.find('#mobile2');
    this.desktop = this.svgContainer.find('#desktop');
    


    this.timeLine = new TimelineMax({
        yoyo: true,
        paused: false,
        onComplete: function() {
            this.restart();
        }
    })
    .to(this.desktop, 0.5, {
        x: 13,
        delay: 1
    })
    .to([this.mobile, this.mobile2], 0.5, {
        x: -6,
        delay: 1
    }, 0)
    .to(this.mobile2, 0, {
        opacity: 1
    })
    .to([this.mobile, this.mobile2, this.desktop], 0.5, {
        x: 0
    })
    .to(this.desktop, 0.5, {
        x: 13,
        delay: 1
    })
    .to([this.mobile, this.mobile2], 0.5, {
        x: -6,
        delay: 1
    }, 2.0)
    .to(this.mobile2, 0, {
        opacity: 0
    })
    .to([this.mobile, this.mobile2, this.desktop], 0.5, {
        x: 0
    });

    this.svgContainer.off('runAnimation').on('runAnimation', function() {
        this.timeLine.play();
    }.bind(this));

    this.svgContainer.off('stopAnimation').on('stopAnimation', function() {
        this.timeLine.reverse();
    }.bind(this));
};



function setSkillAnimation($main) {

    new AnimateWeb($main);

    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  
    $main.find("#skills li").on('mouseenter touchstart', function(e) {

            if(e.type == 'touchstart'){
                $("#skills li").find('svg').trigger('stopAnimation');
            }

            $(this).find('svg').trigger('runAnimation');
     }).on('mouseleave', function() {
            $(this).find('svg').trigger('stopAnimation');
      });

}

setSkillAnimation($('body'));
