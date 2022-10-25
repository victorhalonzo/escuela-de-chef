

var checkpoint = 600;
var checkpoint2 = 950;

var checkpoint3 = 1100;
//const checkpoint4=1200;
if (screen.width < 500) {
    checkpoint2=800;
    checkpoint3=950;
    var checkpoint4 = 1100;
} else {
    var checkpoint4 = 1600;
}
const frase_intro = document.querySelectorAll('.frase-intro');
//debugger;
window.addEventListener('scroll', function () {
    for (var i = 0; i < frase_intro.length; i++) {
        frase_intro[i].classList.toggle('active', frase_intro[i].active);
    }
});

window.addEventListener("scroll", () => {
    //debugger;

    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        //opacity = 1 - currentScroll / checkpoint;
        opacity = 0.25;

    } else {
        opacity = 1;

    }
    if (currentScroll <= checkpoint2) {
        //opacity = 1 - currentScroll / checkpoint;
        opacity2 = 0.25;

    } else {
        opacity2 = 1;

    }

    if (currentScroll <= checkpoint3) {
        //opacity = 1 - currentScroll / checkpoint;
        opacity3 = 0.25;

    } else {
        opacity3 = 1;

    }
    if (currentScroll <= checkpoint4) {
        //opacity = 1 - currentScroll / checkpoint;
        opacity4 = 0.25;

    } else {
        opacity4 = 1;

    }

    var d = document.querySelectorAll(".frase-intro.active");
    //console.log(d);
    document.querySelector(".frase-intro").style.opacity = opacity;
    document.querySelector(".frase-intro2").style.opacity = opacity2;
    document.querySelector(".frase-intro3").style.opacity = opacity3;
    document.querySelector(".frase-intro4").style.opacity = opacity4;

});


const intro = document.querySelector('.intro');
/*
window.addEventListener('scroll', function () {
    intro.classList.toggle('active', window.scrollY > 0);
})
*/

var fadeStart = 100 // 100px scroll or less will equiv to 1 opacity
    , fadeUntil = 200 // 200px scroll or more will equiv to 0 opacity
    , fading = document.querySelector('.frase-intro');
/*
window.addEventListener('scroll', function () {
    //debugger;
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

    var scrollLeft = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    var offset = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    var opacity = 0
        ;
    if (offset <= fadeStart) {
        opacity = 1;
    } else if (offset <= fadeUntil) {
        opacity = 1 - offset / fadeUntil;
    }
    fading.style.opacity = opacity;
});


$(window).scroll(function(){
    $(".frase-intro").css("opacity",1-$(window).scrollTop()/1600);
})
*/