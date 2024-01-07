jQuery(document).ready(function($){
    "use strict";
    
    $('#slider').ripples({
        dropRadius: 11,
        perturbance: 0.01,
        
    });

        $(".text").typed({
        strings: ["<strong>TA </strong><strong class='primary'> SHOT!</strong>","<strong>MOVE ON </strong><strong class-'primary'> NA!</strong>"],
        typeSpeed: 1,
        loop: true
            });



    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=60 && top<1500){
            $("nav").addClass('secondary');
        }
        else if (top>=1500){
            $("nav").addClass('third');
        }
        else 
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary');
            }
            else if($("nav").hasClass('third')){
                    $("nav").removeClass('third');
            }
    });


    $("#lobster").click(function(){
        $("#text").css("font-family","lobster")
      });//lobster






                const body = document.body,
                jsScroll = document.getElementsByClassName('js-scroll')[0],
                height = jsScroll.getBoundingClientRect().height - 1,
                speed = 0.05

            var offset = 0

            body.style.height = Math.floor(height) + "px"

            function smoothScroll() {
                offset += (window.pageYOffset - offset) * speed
                
                var scroll = "translateY(-" + offset + "px) translateZ(0)"
                jsScroll.style.transform = scroll
                
                raf = requestAnimationFrame(smoothScroll)
            }
smoothScroll()



});