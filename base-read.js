$(document).ready(() => {
    /*
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
    
    
        $(".hamby").click(function(){
            if($(this).hasClass("active")){
                $(this).removeClass("active");
                $("body").removeClass("navigationActive");
            } else {
                $(this).addClass("active");
                $("body").addClass("navigationActive");
            }
        });

         document.addEventListener("scroll", (event) => {
        if(document.querySelector('.first-service').getBoundingClientRect().top - window.innerHeight*0.25 < 0) {
            document.body.classList.add("blue");
        } else {
            document.body.classList.remove("blue");
        }
    });

    let buttons = document.querySelectorAll('.career-opening h3');
let containers = document.querySelectorAll('.career-description');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let container = containers[index];
        
        if (!container.classList.contains('active')) {
            container.classList.add('active');
            container.style.height = 'auto';
            let height = container.clientHeight + 'px';
            container.style.height = '0px';
            setTimeout(() => {
                container.style.height = height;
            }, 0);
        } else {
            container.style.height = '0px';
            container.addEventListener('transitionend', () => {
                container.classList.remove('active');
            }, { once: true });
        }
    });
});

    */
        $(".banner-wrapper").ripples({
            resolution: 512,
            dropRadius: 20,
            interactive: true,
            perturbance: 0.02,
        });
        
    });