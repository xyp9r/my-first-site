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