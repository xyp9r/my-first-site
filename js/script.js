let heading = document.querySelector("h1");
if (heading) {
    heading.addEventListener("click" , function() {
        heading.innerText = "Easter egg!";
        heading.style.color = "gold";
        console.log("Click happened!");
    });
    console.log(heading);
    heading.innerText = "Ivan The Developer";
}

// --- Аватарка ---
let avatar = document.querySelector(".avatar");
if (avatar) { 
    avatar.addEventListener("click" , function() {
        let userName = prompt("What is your name?");
        if (userName && userName !== "") {
            if (heading) {
                heading.innerText = "Hello, " + userName;
            }
        } else {
            alert("Hey, you didn't enter a name!");
        }
    });
}

function search() {
    let input = document.getElementById('google-input');
    let text = input.value;
    if (text !== "") {
        window.location.href = 'https://www.google.com/search?q=' + text;
    } else {
        alert("Type something first! 😅");
    }
}

function lucky() {
    window.location.href = "https://hackertyper.net/";
}