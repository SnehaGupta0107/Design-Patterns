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

// Trying to use AdvancedAudioPlayer without an adapter
const player = new MediaPlayer();
const advancedPlayer = new AdvancedAudioPlayer();

// Now you have to write conditional logic to handle different formats
function play(fileName) {
    if (fileName.endsWith(".mp3")) {
        advancedPlayer.playMp3(fileName); // Direct call to AdvancedAudioPlayer
    } else if (fileName.endsWith(".wav")) {
        advancedPlayer.playWav(fileName); // Direct call to AdvancedAudioPlayer
    } else {
        console.log("Unsupported file format");
    }
}

play("song.mp3"); // Playing MP3 file: song.mp3
play("song.wav"); // Playing WAV file: song.wav
