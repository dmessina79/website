$(window).on('afterunload', function(){
    $(window).scrollTop(0);
});

$(document).ready(function(){
    $("body").hide().fadeIn(800)
;});

var firstLink = document.getElementsByClassName('js-link')[0];

firstLink.addEventListener('click', function(e){
    // prevent the default click at an anchor
    e.preventDefault();
    // get the top psotiion of our element
    var aboutTop = document.getElementById('about').offsetTop;
    //scroll the windows to that top position
    window.scrollTo({
        top: aboutTop,
        behavior: 'smooth'
    })
});

var secondLink = document.getElementsByClassName('js-link')[1];

secondLink.addEventListener('click', function(e){
    // prevent the default click at an anchor
    e.preventDefault();
    // get the top psotiion of our element
    var resumeTop = document.getElementById('resume').offsetTop;
    //scroll the windows to that top position
    window.scrollTo({
        top: resumeTop,
        behavior: 'smooth'
    })
});

var thirdLink = document.getElementsByClassName('js-link')[2];

thirdLink.addEventListener('click', function(e){
    // prevent the default click at an anchor
    e.preventDefault();
    // get the top psotiion of our element
    var resumeTop = document.getElementById('contact').offsetTop;
    //scroll the windows to that top position
    window.scrollTo({
        top: resumeTop,
        behavior: 'smooth'
    })
});

// Scrolling down 250 pixels and button will appear to scroll to the top of the page
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("topscroll-button").style.display = "block";
    } else {
        document.getElementById("topscroll-button").style.display = "none";
    }
};

function topFunction() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
        })
};

var dm = document.getElementsByClassName('navbar-nav')[0];

document.getElementsByClassName('mobile-nav')[0].addEventListener('click', function() {
    dm.classList.toggle('is-visible');
});
