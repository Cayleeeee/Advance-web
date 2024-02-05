function animateBox(day) {
    const animatedBox = document.querySelector('.animated-box');
    const button = document.querySelector(`button:contains('${day}')`);
    
    const boxStartPosition = button.getBoundingClientRect();
    
    animatedBox.style.backgroundColor = '#e74c3c';
    animatedBox.style.transform = `translate(${boxStartPosition.left}px, ${boxStartPosition.top}px)`;

    setTimeout(() => {
        animatedBox.style.backgroundColor = '#3498db';
        animatedBox.style.transform = 'translate(0, 0)';
    }, 500);
}
