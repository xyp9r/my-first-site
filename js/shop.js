let buyButtons = document.querySelectorAll(".product-card button");
let cartCountLabel = document.getElementById("cart-count");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function updateCartCount() {
	if (cartCountLabel) {
		cartCountLabel.innerText = "Корзина (" + cart.length + ")";
	}
}
updateCartCount();
if (buyButtons.length > 0) {
	buyButtons.forEach(function(button) {
		button.addEventListener("click", function() {
			let card = button.closest(".product-card");
			let imgSrc = card.querySelector("img").src;
			let title = card.querySelector("h3").innerText;
			let price = card.querySelector(".price").innerText;
			let size = card.querySelector(".size-select").value;
			let itemFound = false;
			for (let i = 0; i < cart.length; i++) {
				// Если названия совпадают... 
				if (cart[i].title === title && cart[i].size === size) {
					// ...значит товар уже есть
					itemFound = true;
					if (!cart[i].count) {
						cart[i].count = 1;
					}
					cart[i].count = cart[i].count + 1;
					break;
				}
			}
			if (itemFound === false) {
			let newProduct = {
				title: title,
				price : price,
				imgSrc: imgSrc,
				size: size,
				count: 1
			};
			cart.push(newProduct);
			}
			localStorage.setItem("cart", JSON.stringify(cart));
			updateCartCount();
			let originalText = button.innerText;
			button.innerText = "Добавлено (Размер + " + size + ")";
			button.style.backgroundColor = "#4CAF%)";
			button.style.color = "white";

			setTimeout(function() {
				button.innerText = originalText;
				button.style.backgroundColor = "gold";
				button.style.color = "black";
			}, 1000);
		});
		function getCountInCart(title) {
			for(let i = 0; i < cart.length; i++) {
				if(cart[i].title === title) {
					return cart[i].count;
				}
			}
			return 1;
		}
		
	});
}