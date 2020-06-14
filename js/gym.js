$(document).ready(function () {
        ////////////////////////////////////////////
    //    Nice Scrollllll
    $("body").niceScroll({
        cursorcolor: "#ffc107",
        cursorwidth: "13px",
        cursorminheight: 150,
        cursorborderradius:  0,
        scrollspeed: 80,
        cursorborder: "none",
        zindex: "7",
        cursor:"pointer",
         background: "lightgray"
    });
    ////////////////////////////////////////
      /////////////////////////////////////////
    ///////////////////////////////////////////
        //    Stats////////////////
    $('.counter').counterUp({
        delay: 5,
        time: 1300
    });
    ////////////////////////
    
 $(".FirstHeader .navbar-toggler span i").on("click", function () {
            $(this).toggleClass("fa-times fa-bars");
    });
    
    $(".navbar li a").on("click", function () {
        $(this).addClass("cooolo").parent().siblings().find("a").removeClass("active");
        $("html ,body").animate({
            scrollTop: $("#" + $(this).attr("data-value")).offset().top - 70
        }, 1000);
    });

    $(window).scroll(function () {
        $(".block").each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 150) {
                var blockdiv = $(this).attr("id");
                $(".navbar li a[data-value='" + blockdiv + "']").addClass("cooolo")
                    .parent().siblings().find("a").removeClass("cooolo");
            }
        });
    });

    // Header Slider
    $(".secondHeader .carousel-item img").height($(window).height());

    //    $(window).on("resize",function(){
    //        $(".secondHeader .carousel-item img").height($(window).height());
    //    });

    ////btn scroll top
    var topbtn = $(".topbtn");
    topbtn.on("click", function () {
        $("html ,body").animate({
            scrollTop: 0
        }, 1200);
    });


    //    Icons 
    $(".icons .icon-msg")
        .on("click", function () {
        $(".icons .icon-components").slideToggle(500);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 140) {
            $(".navbar-expand-lg").css("backgroundColor", "#000");
            topbtn.fadeIn(500);
            $(".icons").hide();
            
        } else {
            $(".navbar-expand-lg").css("backgroundColor", "transparent");
            topbtn.fadeOut(500);
        }

        if ($(window).scrollTop() > 10 && $(window).scrollTop() < 200) 
        {
            $(".navbar-expand-lg").removeClass("fixed-top");
        } else {
            $(".navbar-expand-lg").addClass("fixed-top");
            $(".navbar-expand-lg").css("marginTop", "0px");
        }

    });
//////////////////////////

});


       