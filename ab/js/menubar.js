$(document).ready(function() {
    const parallaxx = document.getElementById("parallax-background");
    const pandparallax = document.getElementById('parallax-background2');
    const pandheight = pandparallax.getBoundingClientRect().top
    const productenheight = document.getElementById('producten').getBoundingClientRect().top;
    const disclaimerHeight = document.getElementById('disclaimer').getBoundingClientRect().bottom;
    const homeHeight = parallaxx.getBoundingClientRect().top;
    const pandOffset = pandheight-productenheight;

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // some code..
    }else
    {
        window.addEventListener("scroll", function() {
            let offset = window.pageYOffset;
            parallaxx.style.backgroundPositionY = -172 + offset * 0.8 + "px";
            let factorOffset = 0.9*offset;
            let relativeOffset = disclaimerHeight-homeHeight;

        })
    }


})