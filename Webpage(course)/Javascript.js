let cart = {
    items: [],
    total: 0,
    quantity: 0,
};

function addToCart() {
    cart.items.push({ name: 'Product', price: 120 }); // Example item
    cart.total += 120; // Example price
    cart.quantity++;
    updateCartBadge();
}

function removeFromCart() {
    if (cart.quantity > 0) {
        cart.items.pop(); // Remove last item for simplicity
        cart.total -= 120; // Example price
        cart.quantity--;
        updateCartBadge();
    }
}

function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    cartBadge.textContent = cart.quantity;
}

function toggleCart() {
    // Toggle cart display logic
}

// Example: Add event listeners for add and remove buttons
document.getElementById('add-to-cart-button').addEventListener('click', addToCart);
document.getElementById('remove-from-cart-button').addEventListener('click', removeFromCart);
