/* =========================================
   ЛОГИКА КОРЗИНЫ (js/cart.js)
   ENGLISH VERSION
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
        // Перевод: Cart
        countLabel.innerText = "Cart (" + cart.length + ")";
    }
}

function renderCart() {
    cartItemsContainer.innerHTML = "";
    let totalSum = 0;
    
    updateCartCount(); 

    if (cart.length === 0) {
        if (emptyMessage) emptyMessage.style.display = "block";
        if (orderBtn) orderBtn.style.display = "none";
        if (totalPriceLabel) totalPriceLabel.style.display = "none";
    } else {
        if (emptyMessage) emptyMessage.style.display = "none";
        if (orderBtn) orderBtn.style.display = "block";
        if (totalPriceLabel) totalPriceLabel.style.display = "block";
        
        cart.forEach(function(product, index) {
            if (!product.count) {
                product.count = 1;
            }
            
            let card = document.createElement("div");
            card.classList.add("product-card");
            
            // ПЕРЕВОД ВНУТРИ HTML
            card.innerHTML = `
                <img src="${product.imgSrc}" alt="${product.title}">
                
                <div class="item-info">
                    <h3>${product.title}</h3>
                    <p>Size: <b>${product.size || "Standard"}</b></p>
                    <p>Qty: <b>${product.count} pcs</b></p>
                    <div class="price">${product.price}</div>
                </div>

                <button class="delete-btn">Remove</button>
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
            // Перевод: Total
            totalPriceLabel.innerText = "Total: " + totalSum + " UAH";
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
            alert("Cart is empty! Add some products.");
            return;
        }
        orderBtn.innerText = "Processing...";
        orderBtn.style.backgroundColor = "#ccc";
        
        setTimeout(function () {
            alert("Order successfully placed! A manager will contact you.");
            
            cart = [];
            localStorage.removeItem("cart");
            
            renderCart(); 
            
            orderBtn.innerText = "Checkout";
            orderBtn.style.backgroundColor = "gold";
            
             window.location.href = "index.html";
        }, 1500);
    });
}