var video;

// Initialize the video element and turn off autoplay and looping
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.autoplay=false;
	video.loop=false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});

// Play the video and update the volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

// Pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow the current video speed by 10% each time the button is clicked. New speed is logged to the console.
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate -= video.playbackRate*0.1;
	console.log("Speed is " + video.playbackRate)
});

// Speed up the current video speed each time the button is clicked. New speed is logged to the console.
// toFixed function rounds the returning speed to 1 decimal place.
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate += video.playbackRate*0.1;
	console.log("Speed is " + parseFloat(video.playbackRate.toFixed(1)))
});

// Advance the current video by 10 seconds. If the video length has been exceeded, go back to the start of the video. Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	var currentTime = video.currentTime;
	currentTime += 10;
	if (currentTime > video.duration){
		video.currentTime = 0;
	}else{
		video.currentTime = currentTime;
	}
	console.log("Video current time is " + video.currentTime)
});

// Mute/unmute the video and update the text in the button
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){ // video not muted
		console.log("Mute");
		video.muted = true;
		mute.textContent = 'Unmute';
	}else{ // video currently muted
		video.muted = false;
		mute.textContent = 'Mute';
		console.log("Unmute");
	}
});

// Change the volume based on the slider and update the volume information in console.
var volumeSpan = document.getElementById('volume');
document.querySelector("#slider").addEventListener("input", function() {
	console.log('The current value is ' + video.volume)
	video.volume = slider.value / 100;
	console.log('The current value is ' + video.volume);
	volumeSpan.innerHTML = slider.value + '%'
	console.log(volumeSpan)
});

// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

// Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});
