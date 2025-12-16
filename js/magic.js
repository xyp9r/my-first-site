const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);
const characters = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }

    requestAnimationFrame(drawMatrix);
}

drawMatrix();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});