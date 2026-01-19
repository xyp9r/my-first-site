let heading = document.querySelector("h1");
if (heading) {
heading.addEventListener("click" , function() {
	heading.innerText = "Я теперь знаю JS!";
	heading.style.color = "gold";
	console.log("Клик произошел!");
});
console.log(heading);
heading.innerText = "Ivan The Developer";
}

// --- БЛОК 2: Аватарка (Работает, только если есть .avatar) ---
let avatar = document.querySelector(".avatar");
if (avatar) { // Проверяем: существует ли аватарка?
    avatar.addEventListener("click" , function() {
        let userName = prompt("Как тебя зовут?");
        if (userName && userName !== "") {
            // Если заголовка нет, ищем его или создаем логику (тут оставим как есть, но с проверкой)
            if (heading) {
                heading.innerText = "Привет , " + userName;
            }
        } else {
            alert("Эй, ты не ввёл имя!");
        }
    });
}

let themeButton = document.querySelector("#theme-btn");
let page = document.querySelector("body");
if (localStorage.getItem("theme") === "light") {
	page.classList.add("light-theme");
}
themeButton.addEventListener("click" , function () {
	page.classList.toggle("light-theme");
	if (page.classList.contains("light-theme")) {
		localStorage.setItem("theme" , "light");
	} else {
		localStorage.setItem("theme" , "dark");
	}
});
function search() {
    let input = document.getElementById('google-input');
    let text = input.value;
    if (text !== "") {
        window.location.href = 'https://www.google.com/search?q=' + text;
    } else {
        alert("Введи хоть что-нибудь! 😅");
    }
}
function lucky() {
    window.location.href = "https://hackertyper.net/";
}

/* =========================================
   ЛОГИКА ФОРМЫ КОНТАКТОВ
   ========================================= */

const contactForm = document.querySelector('.contact-form');

// Проверяем , есть ли форма на странице //
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 1. Главное: отменяем перезагрузку страницы //

        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;

        // 2. Меняем кнопку чтобы было видно что процесс пошел //
        btn.innerText = "Отправляется...";
        btn.style.opacity = "0.7";

        // 3. Ждем 1.5 секунды (отправляем письмо типо) //
        setTimeout(function() {
            // Успех! 
            btn.innerText = "Успешно отправлено!";
            btn.style.backgroundColor = "#4CAF50";
            btn.style.color = "white";
            btn.style.opacity = "1";

            // Очищаем поля чтобы человек не отправил тоже самое
            contactForm.reset();

            // 4. Еще через 3 секунды возвращаем кнопку в исходное состояние
            setTimeout(function () {
                btn.innerText = originalText;
                btn.style.backgroundColor = "gold";
                btn.style.color = "black";
            }, 3000);
        }, 1500);
    });
}