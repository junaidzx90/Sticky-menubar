$(document).ready(function () {
    responsive_toggle_btn();
    function responsive_toggle_btn() {
        if ($(window).width() <= 768) {
            $(document).on('click',function (e) {
                if ($(e.target).hasClass("devjoo-btn") || $(e.target).hasClass("line") || $(e.target).closest("#devjoo-navbar").length
                    === 1) {
                    $('#devjoo-navbar').fadeIn(function () { 
                        $('#devjoo-navbar').css('transform', 'perspective(1000px) translate3d(0px, 0px, 0px) rotateY(0deg)');
                        $('.hasMenu').css('margin-left', '260px').css('transition', '.5s');
                        $(".devjoo-btn").fadeOut('fast')
                    });
                } else {
                    $(".devjoo-btn").fadeIn(100,function () { 
                        $('.hasMenu').css('margin-left', '0px');
                        $('#devjoo-navbar').css('transform', 'perspective(1000px) translate3d(0px, 0px, 0px) rotateY(90deg)');
                        $('#devjoo-navbar').fadeOut();  
                     });
                }
            });
        }
    }//responsive_toggle_btn

    
    menus();
    function menus() {
        $("nav").children().find("ul li ul").each(function () {
            $(this).parent("li").children("a").addClass("expand_submenus").click(function () {
                $(this).next("ul").slideToggle(400);
                $(this).toggleClass('close_submenus');
            });
        });

        
        let menuItem = $("nav ul li a");
        menu = menuItem.length;
        menuItem.each(function (i, val) {
            color1 = Math.floor((Math.random() * 130) + 1);
            color2 = Math.floor((Math.random() * 130) + 1);
            color3 = Math.floor((Math.random() * 130) + 1);
            $(this).children("span").css("background-color", 'rgb('+color1+', '+color2+', '+color3+')');
            
        });
    }
});