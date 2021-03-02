function fade_scroll_animation() {
            var $anim_scroll = $(".fade-text"),
                anim_time = .5,
                anim_stagger = 0.2,
                initial_delay = 2,
                easing =  Power2.easeInOut,
                elem_y = 40;
            var tl = new TimelineLite();
            $anim_scroll.each(function(index, element) {
                var $this = $(this),
                    $anim = $this.find(".anim-el");
                   
                //this animates each .anim-el in each .quick-info-item
                //this stagger gets created 3 times and added to the tl which is created outside the each() loop
                tl.staggerFrom($anim, anim_time, { y: elem_y, opacity: 0, ease: easing}, anim_stagger, index * 0.2);
     
     
            });
     
        }
     
        fade_scroll_animation();
     