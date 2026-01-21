/* Логика отправки формы через AJAX */

const contactForm = document.querySelector('.contact-form');

// Проверяем есть ли форма //
if (contactForm) {
    contactForm.addEventListener('submit'), async function (event) {
       event.preventDefault(); 
    }
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerText;

    // Визуализация загрузки //
    btn.innerText = "Отправляется...";
    btn.disabled = true;
    btn.style.opacity = "0.7";

    // Сбор данных //
    const formData = new FormData(contactForm);

    try {
        // Отправка запроса на Formspree //
        const response = await fetch(contactForm.action , {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'applicatioin/json'
            }
        });
        
        // Обработка ответа //
        if (response.ok) {
            btn.innerText = "Успешно отправлено!";
            btn.style.backgroundColor = "#4CAF50";
            btn.style.color = "white";
            contactForm.reset();
        } else {
            btn.innerText = "Ошибка!";
            btn.style.backgroundColor = "red";
            alert("Ошибка при отправке. Проверьте данные.");
        }
    } catch (error) {
        btn.innerText = "Ошибка сети";
        console.error("Network error:" , error);
    } finally {
        // Возврат кнопки в исходное состояние //
        setTimeout(function() {
            btn.innerText = originalText;
            btn.style.backgroundColor = "";
            btn.style.color = "";
            btn.disabled = false;
            btn.style.opacity = "1";
        }, 3000);
    }
}