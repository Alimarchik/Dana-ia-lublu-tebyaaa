function openLetter() {
    document.getElementById('letter').classList.add('active');
    // Можно добавить звук, например, шелеста бумаги
    // new Audio('paper_sound.mp3').play();
}

function closeLetter() {
    document.getElementById('letter').classList.remove('active');
}

// Закрытие письма по клику на темную область вокруг (опционально)
document.getElementById('letter').addEventListener('click', function(event) {
    if (event.target === this) {
        closeLetter();
    }
});