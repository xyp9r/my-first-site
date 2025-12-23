/* 1. Мы НЕ создаем новый канвас, а ищем тот, что уже есть в HTML */
const canvas = document.getElementById('matrix'); 

/* 2. ПРОВЕРКА: Если канвас с id="matrix" найден — запускаем магию.
      Если мы в Магазине, канваса не будет, и код внутри if не сработает! */
if (canvas) {
    const ctx = canvas.getContext('2d');

    // Растягиваем на весь экран
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    // Японские символы и цифры
    const characters = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function drawMatrix() {
        // Полупрозрачный фон для эффекта затухания
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0'; // Зеленый цвет текста
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

    // Запускаем анимацию
    drawMatrix();

    // Следим за изменением размера окна
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}