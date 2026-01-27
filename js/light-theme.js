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