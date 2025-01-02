const clockContainer = document.getElementById('clockContainer');

clockContainer.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY, target } = e;
    const { offsetWidth, offsetHeight } = target;

    const xRotation = ((offsetY / offsetHeight) - 0.5) * -100; // Rotasi X
    const yRotation = ((offsetX / offsetWidth) - 0.5) * 100;  // Rotasi Y

    clockContainer.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

clockContainer.addEventListener('mouseleave', () => {
    clockContainer.style.transform = 'rotateX(0) rotateY(0)';
});

// Update waktu setiap detik
setInterval(() => {
    const d = new Date();  
    const hr = d.getHours(); 
    const min = d.getMinutes(); 
    const sec = d.getSeconds(); 
    const hr_rotation = 30 * hr + min / 2;  
    const min_rotation = 6 * min; 
    const sec_rotation = 6 * sec; 

    document.getElementById('hour').style.transform = `rotate(${hr_rotation}deg)`; 
    document.getElementById('minute').style.transform = `rotate(${min_rotation}deg)`; 
    document.getElementById('second').style.transform = `rotate(${sec_rotation}deg)`; 
}, 1000);
