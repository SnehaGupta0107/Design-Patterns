// Existing class with a specific interface
class MediaPlayer {
    playFile(fileName) {
        console.log("Playing audio file:", fileName);
    }
}

// New class with a different interface
class AdvancedAudioPlayer {
    playMp3(fileName) {
        console.log("Playing MP3 file:", fileName);
    }

    playWav(fileName) {
        console.log("Playing WAV file:", fileName);
    }
}

// Adapter class to make AdvancedAudioPlayer compatible with MediaPlayer
class AudioPlayerAdapter extends MediaPlayer {
    constructor(advancedPlayer) {
        super();
        this.advancedPlayer = advancedPlayer;
    }

    playFile(fileName) {
        if (fileName.endsWith(".mp3")) {
            this.advancedPlayer.playMp3(fileName);
        } else if (fileName.endsWith(".wav")) {
            this.advancedPlayer.playWav(fileName);
        } else {
            console.log("File format not supported");
        }
    }
}

// Usage with Adapter
const advancedAudioPlayer = new AdvancedAudioPlayer();
const player = new AudioPlayerAdapter(advancedAudioPlayer);

player.playFile("song.mp3"); // Output: "Playing MP3 file: song.mp3"
player.playFile("song.wav"); // Output: "Playing WAV file: song.wav"
