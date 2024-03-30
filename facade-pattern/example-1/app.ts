class AudioPlayer {
  playAudio() {
    console.log("Playing audio...");
  }

  stopAudio() {
    console.log("Stopping audio...");
  }
}

class VideoPlayer {
  playVideo() {
    console.log("Playing video...");
  }

  stopVideo() {
    console.log("Stopping video...");
  }
}

class DisplayController {
  showDisplay() {
    console.log("Displaying content...");
  }

  hideDisplay() {
    console.log("Hiding display...");
  }
}

class MultimediaFacade {
  private audioPlayer: AudioPlayer;
  private videoPlayer: VideoPlayer;
  private displayController: DisplayController;

  constructor() {
    this.audioPlayer = new AudioPlayer();
    this.videoPlayer = new VideoPlayer();
    this.displayController = new DisplayController();
  }

  playMultimedia() {
    this.audioPlayer.playAudio();
    this.videoPlayer.playVideo();
    this.displayController.showDisplay();
  }

  stopMultimedia() {
    this.audioPlayer.stopAudio();
    this.videoPlayer.stopVideo();
    this.displayController.hideDisplay();
  }
}

const multimediaFacade = new MultimediaFacade();
multimediaFacade.playMultimedia();
multimediaFacade.stopMultimedia();
