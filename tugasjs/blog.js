// Ambil elemen audio
const audio = document.querySelector('audio');

// Putar audio ketika halaman dimuat
window.addEventListener('load', () => {
    audio.play();
});

// Tangani peristiwa jika audio tidak bisa dimainkan
audio.addEventListener('error', () => {
    console.error('Audio cannot be played.');
});
