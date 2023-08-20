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



  // process animation:
  
    let processActive = 1;

const processElements = document.querySelectorAll(".single-process");
const containerProcesses = document.querySelectorAll(".process-icon");
const mobileProcesses = document.querySelectorAll(".process-icons-mobile div");

function slideDown(element) {
    element.style.height = "auto";

    var elementHeight = element.clientHeight + "px";
    element.style.height = "0px";

    setTimeout(function () {
        element.style.height = elementHeight;
    }, 0);
}

function slideUp(element) {
    var elementHeight = element.clientHeight + "px";
    element.style.height = elementHeight;

    element.addEventListener(
        "transitionend",
        function (event) {
            if (event.propertyName === "height" && element.style.height === "0px") {
                element.style.height = null;
            }
        },
        { once: true }
    );

    element.style.height = "0px";
}

function updateActiveStatus(processNumber) {
    processElements.forEach((element) => {
        slideUp(element.querySelector("p"));
        element.classList.remove("active");
    });

    const selectedProcess = processElements[processNumber - 1];
    selectedProcess.classList.add("active");
    processActive = processNumber;
    document.querySelector(".process-cycle").setAttribute("data-active", processActive);

    containerProcesses.forEach((process, index) => {
        if (index === processActive - 1) {
            process.classList.add("active");
        } else {
            process.classList.remove("active");
        }
    });
    mobileProcesses.forEach((process, index) => {
        if (index === processActive - 1) {
            process.classList.add("active");
        } else {
            process.classList.remove("active");
        }
    });

    slideDown(selectedProcess.querySelector("p"));
}

processElements.forEach((processElement) => {
    processElement.addEventListener("click", () => {
        if (!processElement.classList.contains("active")) {
            updateActiveStatus(parseInt(processElement.querySelector("h4").textContent));
        }
    });
});

containerProcesses.forEach((process, index) => {
    process.addEventListener("click", () => {
        if (!process.classList.contains("active")) {
            updateActiveStatus(index + 1);
        }
    });
});
updateActiveStatus(1);

    */
        $(".banner-wrapper").ripples({
            resolution: 512,
            dropRadius: 20,
            interactive: true,
            perturbance: 0.02,
        });
        
    });