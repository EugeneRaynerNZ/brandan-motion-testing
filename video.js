document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("videoPlayer");

    video.addEventListener("play", () => {
        console.log("Video is playing...");
    });

    video.addEventListener("pause", () => {
        console.log("Video is paused.");
    });

    video.addEventListener("ended", () => {
        console.log("Video has ended.");
    });
});