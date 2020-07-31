$(document).ready(function() {
    const parallaxx = document.getElementById("parallax-background");
    const pandparallax = document.getElementById('parallax-background2');
    const pandheight = pandparallax.getBoundingClientRect().top
    const productenheight = document.getElementById('producten').getBoundingClientRect().top;
    const disclaimerHeight = document.getElementById('disclaimer').getBoundingClientRect().bottom;
    const homeHeight = parallaxx.getBoundingClientRect().top;
    const pandOffset = pandheight-productenheight;
// const videoparallax = document.getElementById('kantband-video');
    console.log("disclaimer ehight:  " + disclaimerHeight);

    window.addEventListener("scroll", function() {
        let offset = window.pageYOffset;
        parallaxx.style.backgroundPositionY = -172 + offset * 0.8 + "px";
        let factorOffset = 0.9*offset;
        let relativeOffset = disclaimerHeight-homeHeight;
        console.log(relativeOffset);
        //pandparallax.style.backgroundPositionY = (disclaimerHeight - 250 + factorOffset) + "px";
        // videoparallax.style.transform = "translate( 0px," + offset * 0.15 + "px)";
    })
})

