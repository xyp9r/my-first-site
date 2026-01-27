/* =========================
    CRYPTO API (ВСЕ МОНЕТЫ)
   ========================= */

// 1. BITCOIN
const btcElement = document.getElementById("bitcoin-price");
async function getBitcoinPrice() {
    if (!btcElement) return;
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        btcElement.innerText = data.bitcoin.usd + " $";
        btcElement.style.color = "white";
        setTimeout(() => btcElement.style.color = "", 500);
    } catch (error) { console.error(error); }
}

// 2. ETHEREUM
const ethElement = document.getElementById("ethereum-price");
async function getEthereumPrice() {
    if (!ethElement) return;
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const data = await response.json();
        ethElement.innerText = data.ethereum.usd + " $";
        ethElement.style.color = "white";
        setTimeout(() => ethElement.style.color = "", 500);
    } catch (error) { console.error(error); }
}

// 3. SOLANA
const slnElement = document.getElementById("solana-price");
async function getSolanaPrice() {
    if (!slnElement) return;
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
        const data = await response.json();
        slnElement.innerText = data.solana.usd + " $";
        slnElement.style.color = "white";
        setTimeout(() => slnElement.style.color = "", 500);
    } catch (error) { console.error(error); }
}

// 4. TON (Обрати внимание на квадратные скобки!)
const tonElement = document.getElementById("ton-price");
async function getTonPrice() {
    if (!tonElement) return;
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd');
        const data = await response.json();
        
        // ВАЖНО: Используем скобки, так как в имени есть дефис
        const price = data["the-open-network"].usd;
        
        tonElement.innerText = price + " $";
        tonElement.style.color = "white";
        setTimeout(() => tonElement.style.color = "", 500);
    } catch (error) { console.error(error); }
}

// === ЗАПУСК ===
// Сначала вызываем один раз сразу, чтобы не ждать 10 секунд
getBitcoinPrice();
getEthereumPrice();
getSolanaPrice();
getTonPrice();

// Ставим на таймер (раз в 10 сек)
setInterval(getBitcoinPrice, 10000);
setInterval(getEthereumPrice, 10000);
setInterval(getSolanaPrice, 10000);
setInterval(getTonPrice, 10000);