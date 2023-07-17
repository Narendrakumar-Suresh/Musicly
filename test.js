function playSong(audioSrc){
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = audioSrc;
    audioPlayer.play();
}

var audioPlayer = document.getElementById("audioPlayer");
var playBtn = document.getElementById("masterPlay");
var progressBar = document.querySelector(".progress-bar");
var rewindBtn = document.getElementById("rewindBtn");
var forwardBtn = document.getElementById("forwardBtn");

// progressBar

// JavaScript

var audioPlayer = document.getElementById("audioPlayer");
var playBtn = document.getElementById("masterPlay");
var progressBar = document.querySelector(".progress-bar");

// Check if there's a saved playback time in the storage
var savedPlaybackTime = localStorage.getItem("playbackTime");
if (savedPlaybackTime) {
  audioPlayer.currentTime = parseFloat(savedPlaybackTime);
  updateProgressBar();
}

// Update the progress bar and current time display
function updateProgressBar() {
  var progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.width = progress + "%";
}

// Play or pause the audio
function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16"><path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/></svg>';
  } else {
    audioPlayer.pause();
    playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16"><path d="M4.5 2.5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10a.5.5 0 0 1 .5-.5zm7 0a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10a.5.5 0 0 1 .5-.5z"/></svg>';
  }
}

// Update the playback time based on the progress bar value
function updatePlaybackTime() {
  var progress = parseFloat(progressBar.style.width);
  var currentTime = (progress / 100) * audioPlayer.duration;
  audioPlayer.currentTime = currentTime;
}

// Update the progress bar and current time when the audio is playing
audioPlayer.addEventListener("timeupdate", function () {
  updateProgressBar();
});

// Save the playback time to storage when navigating away from the page
window.addEventListener("beforeunload", function() {
  localStorage.setItem("playbackTime", audioPlayer.currentTime);
});

function rewindAudio() {
    audioPlayer.currentTime = audioPlayer.currentTime - 5;
}

function forwardAudio() {
    audioPlayer.currentTime = audioPlayer.currentTime+5;
}

masterPlay.addEventListener("click", togglePlayPause);
progressBar.addEventListener("click", updatePlaybackTime);
rewindBtn.addEventListener("click", rewindAudio);
forwardBtn.addEventListener("click", forwardAudio);

