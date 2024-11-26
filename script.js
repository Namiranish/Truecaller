document.querySelectorAll('.feature-card-button').forEach(ele => {
    let arrow = ele.textContent;

    ele.addEventListener('mouseover', () => {
        ele.textContent += ' ➜';
    });

    ele.addEventListener('mouseleave', () => {
        ele.textContent = arrow
    });
});

document.querySelectorAll('.feature-card').forEach(card => {
    const video = card.querySelector('.phone-image');

    card.addEventListener('mouseover', () => {
        video.play(); // Start video playback on hover
    });

    card.addEventListener('mouseleave', () => {
        video.pause(); // Pause playback on hover exit
        video.currentTime = 0; // Reset video to the start
    });
});

