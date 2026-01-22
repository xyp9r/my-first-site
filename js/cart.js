/* =========================================
   ЛОГИКА КОРЗИНЫ (js/cart.js)
   FIXED VERSION
   ========================================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartItemsContainer = document.getElementById("cart-items");
let emptyMessage = document.getElementById("empty-message");
let orderBtn = document.getElementById("order-btn");
let totalPriceLabel = document.getElementById("total-price");

// Функция обновления счетчика в шапке
function updateCartCount() {
    let countLabel = document.getElementById("cart-count");
    if (countLabel) {
        countLabel.innerText = "Корзина (" + cart.length + ")";
    }
}

function renderCart() {
    // 1. ВАЖНО: Очищаем контейнер перед отрисовкой, чтобы товары не дублировались
    cartItemsContainer.innerHTML = "";
    
    let totalSum = 0;
    
    // Обновляем шапку
    updateCartCount(); 

    // Если корзина пуста
    if (cart.length === 0) {
        if (emptyMessage) emptyMessage.style.display = "block";
        if (orderBtn) orderBtn.style.display = "none";
        if (totalPriceLabel) totalPriceLabel.style.display = "none";
    } else {
        if (emptyMessage) emptyMessage.style.display = "none";
        if (orderBtn) orderBtn.style.display = "block";
        if (totalPriceLabel) totalPriceLabel.style.display = "block";
        
        // Цикл по товарам
        cart.forEach(function(product, index) {
            if (!product.count) {
                product.count = 1;
            }
            
            // Создаем карточку
            let card = document.createElement("div");
            card.classList.add("product-card");
            
            // Вставляем HTML с правильной структурой (item-info) для ровного дизайна
            card.innerHTML = `
                <img src="${product.imgSrc}" alt="${product.title}">
                
                <div class="item-info">
                    <h3>${product.title}</h3>
                    <p>Размер: <b>${product.size || "Стандарт"}</b></p>
                    <p>Количество: <b>${product.count} шт.</b></p>
                    <div class="price">${product.price}</div>
                </div>

                <button class="delete-btn">Удалить</button>
            `;
            
            // Считаем сумму
            let priceNumber = parseInt(product.price.replace(/\D/g, ""));
            totalSum = totalSum + (priceNumber * product.count);
            
            // Логика кнопки удалить
            let deleteButton = card.querySelector(".delete-btn");
            deleteButton.addEventListener("click", function() {
                removeItem(index);
            });
            
            // Добавляем карточку на страницу
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
    renderCart(); // Перерисовываем
}

// Запуск при загрузке
renderCart();

// Логика кнопки оформления
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
            
            // Очищаем корзину
            cart = [];
            localStorage.removeItem("cart");
            
            renderCart(); // Перерисовываем пустую корзину
            
            orderBtn.innerText = "Оформить заказ";
            orderBtn.style.backgroundColor = "gold";
            
            // Можно перекинуть на главную
             window.location.href = "index.html";
        }, 1500);
    });
}