var windowWidth = window.innerWidth;

var horLength = document.querySelector(".element-wrapper").scrollWidth;


var distFromTop = document.querySelector(".horizontal-section").offsetTop;

var scrollDistance = distFromTop + horLength - windowWidth;

document.querySelector(".horizontal-section").style.height = (horLength / 16) + "rem";


window.onscroll = function() {
    var scrollTop = window.pageYOffset;

    if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
        document.querySelector(".element-wrapper").style.transform = "translateX(-" + ((scrollTop - distFromTop) / 16) + "rem)";
    }

}