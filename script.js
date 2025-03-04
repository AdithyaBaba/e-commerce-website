let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart(product, price);
        });
    });
});

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const total = document.getElementById('total');

    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    cartCount.textContent = cart.length;
    total.textContent = totalPrice.toFixed(2);
}

function clearCart() {
    cart = [];
    updateCart();
}
