let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartItemsContainer = document.getElementById("cart-items");
let emptyMessage = document.getElementById("empty-message");
let orderBtn = document.getElementById("order-btn");
let totalPriceLabel = document.getElementById("total-price");
function renderCart() {
	cartItemsContainer.innerHTML = "";
	let totalSum = 0;
	if (cart.length === 0) {
		emptyMessage.style.display = "block";
		orderBtn.style.display = "none";
		if (totalPriceLabel) totalPriceLabel.style.display = "none";
	} else {
		emptyMessage.style.display = "none";
		orderBtn.style.display = "block";
		if (totalPriceLabel) totalPriceLabel.style.display = "block";
		cart.forEach(function(product, index) {
			if (!product.count) {
				product.count = 1;
			}
			let card = document.createElement("div");
			card.classList.add("product-card");
			card.innerHTML = `
				<img src="${product.imgSrc}" alt="${product.title}">
				<h3>${product.title}</h3>
				<p>Размер: <b>${product.size || "Стандарт"}</b></p>
				<p>Количество: <b>${product.count} шт.</b></p>
				<div class="price">${product.price}</div>
				<button class="delete-btn">Удалить</button>
			`;
			let priceNumber = parseInt(product.price.replace(/\D/g, ""));
			totalSum = totalSum + (priceNumber * product.count);
			let deleteButton = card.querySelector(".delete-btn");
			deleteButton.addEventListener("click", function() {
				removeItem(index);
			});
			cartItemsContainer.appendChild(card);
		});
		if (totalPriceLabel) {
			totalPriceLabel.innerText = "Итого: " + totalSum + " UAH";
		}
	}
}
function removeItem(index) {
	cart.splice(index, 1);
	localStorage.setItem("cart", JSON.stringify(cart));
	renderCart();
}
renderCart();
if (orderBtn) {
	orderBtn.addEventListener("click", function() {
		if (cart.length === 0) {
			alert("Корзина пуста! Добавь товары.");
			return;
		}
		orderBtn.innerText = "Оформляем...";
		orderBtn.style.backgroundColor = "#ccc";
		setTimeout(function () {
			alert("Ваш заказ успешно оформлен! Менеджер свяжется с вами.");
			cart = [];
			localStorage.removeItem("cart");
			renderCart();
			updateCartCount();
			orderBtn.innerText = "Оформить заказ";
			orderBtn.style.backgroundColor = "gold";
			window.location.href = "index.html";
		}, 1500)
	}
}