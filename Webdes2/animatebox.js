function animateBox(day) {
    const box = document.getElementById('box');
    box.textContent = day;

    // Clear previous animations
    box.style.transition = 'none';
    box.style.transform = 'translateY(0)';
    box.style.backgroundColor = 'initial';

    // Trigger reflow
    box.offsetHeight;

    // Apply animation
    box.style.transition = 'transform 1s ease-out, background-color 1s ease-out';
    box.style.transform = 'translateY(200px)';
    box.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
