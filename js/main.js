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
    var resumeTop = document.getElementById('about').offsetTop;
    //scroll the windows to that top position
    window.scrollTo({
        top: resumeTop,
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