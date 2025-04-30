// filepath: web-audio-project/web-audio-project/scripts/main.js
document.addEventListener('DOMContentLoaded', function() {
    let audioPlayed = sessionStorage.getItem('audioPlayed');

    if (!audioPlayed) {
        const audio = new Audio('assets/audio/intro-audio.mp3');
        audio.play().catch(function(error) {
            console.log('Error playing audio:', error);
        });
        sessionStorage.setItem('audioPlayed', 'true');
    }
});