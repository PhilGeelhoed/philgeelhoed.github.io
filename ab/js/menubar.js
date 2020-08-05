$(document).ready(function() {
    const parallaxx = document.getElementById("parallax-background");

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // some code..
    }else
    {
        window.addEventListener("scroll", function() {
            let offset = window.pageYOffset;
            parallaxx.style.backgroundPositionY = -172 + offset * 0.8 + "px";

        })
    }


})

