let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    
    const products = [
        { id: 1, name: 'Product 1', price: '$10.00', description: 'Description for product 1' },
        { id: 2, name: 'Product 2', price: '$20.00', description: 'Description for product 2' },
        { id: 3, name: 'Product 3', price: '$30.00', description: 'Description for product 3' },
        // Add more products as needed
    ];

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`Product ${product.name} added to cart!`);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <h4>${item.name}</h4>
            <p>${item.price}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}
