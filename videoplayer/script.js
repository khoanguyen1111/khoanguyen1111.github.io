const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImage = document.querySelector("#play-pause-img");
console.log(playPauseImage);

playPauseButton.addEventListener("click",playPauseVideo);

function playPauseVideo(){
    if(myVideo.paused || myVideo.ended)
        {
            playPauseImage.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png"
            myVideo.play();
        } else {
            playPauseImage
        myVideo.pause();
   }
}

