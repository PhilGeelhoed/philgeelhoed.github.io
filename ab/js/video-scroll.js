    frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 200,
    // get page height from video duration
    setHeight = document.getElementById("set-height"),
    // select video element         
    vid = document.getElementById('kantband-video');
// var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
    setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});


// Use requestAnimationFrame for smooth playback
function scrollPlay(){
    let frameNumber = window.pageYOffset / playbackConst;
    vid.currentTime  = frameNumber;
    // console.log("framenumber= " + frameNumber);
    // console.log("current time of video= " + vid.currentTime)
    window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);