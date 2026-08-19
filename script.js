var audioToPlay = document.getElementById("audioFile");

window.onload = function() {
    audioToPlay.play(); // Only works on some browsers
    muted = false;
}

window.onclick = function() {
    audioToPlay.play();
    this.onclick = null;
}

var audio = document.querySelector('audio'); {

    audio.volume = 0.15;

}