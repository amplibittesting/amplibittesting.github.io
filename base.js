$(document).ready(() => {
    $(".amplify").addClass("zoom");

    var cursor = document.getElementById("cursor");
    document.body.addEventListener("mousemove", function(e) {
        cursor.style.left = e.clientX + "px",
        cursor.style.top = e.clientY + "px";
    });

    $(".hamby, .lets-talk, .logo, a").hover(function() {
        $(".cursor").addClass("hover");
    }, function() {
        $(".cursor").removeClass("hover");
    })

    $(".cursor-transition").hover(function() {
        $(".cursor").addClass("cursor-black");
    }, function() {
        $(".cursor").removeClass("cursor-black");
    })

    $(".partners-wrapper").hover(function() {
        $(".cursor").addClass("invert-color");
    }, function() {
        $(".cursor").removeClass("invert-color");
    })


    $(".hamby").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $("body").removeClass("navigationActive");
        } else {
            $(this).addClass("active");
            $("body").addClass("navigationActive");
        }
    });

    $(".banner-wrapper").ripples({
        resolution: 512,
        dropRadius: 20,
        interactive: true,
        perturbance: 0.02,
    });
});