let cart = JSON.parse(localStorage.getItem('cart')) || [];
const products = [
    { id: 1, name: 'Shoe', price: '$10.00', description: 'An outer covering for the human foot typically having a thick or stiff sole with an attached heel and an upper part of lighter material (such as leather)', imageUrl: 'https://images.pexels.com/photos/4464821/pexels-photo-4464821.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Product 2', price: '$20.00', description: 'Description for product 2', imageUrl: 'https://images.pexels.com/photos/8400222/pexels-photo-8400222.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Product 3', price: '$30.00', description: 'Description for product 3', imageUrl: 'https://images.pexels.com/photos/9595286/pexels-photo-9595286.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: 'Product 4', price: '$40.00', description: 'Description for product 4', imageUrl: 'https://images.pexels.com/photos/3812433/pexels-photo-3812433.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, name: 'Product 5', price: '$50.00', description: 'Description for product 5', imageUrl: 'https://images.pexels.com/photos/2249248/pexels-photo-2249248.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, name: 'Product 6', price: '$60.00', description: 'Description for product 6', imageUrl: 'https://images.pexels.com/photos/3856051/pexels-photo-3856051.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 7, name: 'Product 7', price: '$70.00', description: 'Description for product 7', imageUrl: 'https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 8, name: 'Product 8', price: '$80.00', description: 'Description for product 8', imageUrl: 'https://images.pexels.com/photos/3489131/pexels-photo-3489131.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 9, name: 'Product 9', price: '$90.00', description: 'Description for product 9', imageUrl: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 10, name: 'Product 10', price: '$100.00', description: 'Description for product 10', imageUrl: 'https://images.pexels.com/photos/20672172/pexels-photo-20672172/free-photo-of-elegant-yellow-jacket-on-mannequin-in-clothing-store.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 11, name: 'Product 11', price: '$110.00', description: 'Description for product 11', imageUrl: 'https://images.pexels.com/photos/16793431/pexels-photo-16793431/free-photo-of-a-man-at-a-jewelry-store.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 12, name: 'Product 12', price: '$120.00', description: 'Description for product 12', imageUrl: 'https://images.pexels.com/photos/8386644/pexels-photo-8386644.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 13, name: 'Product 13', price: '$130.00', description: 'Description for product 13', imageUrl: 'https://images.pexels.com/photos/8386648/pexels-photo-8386648.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 14, name: 'Product 14', price: '$140.00', description: 'Description for product 14', imageUrl: 'https://images.pexels.com/photos/9594673/pexels-photo-9594673.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 15, name: 'Product 15', price: '$150.00', description: 'Description for product 15', imageUrl: 'https://images.pexels.com/photos/15722837/pexels-photo-15722837/free-photo-of-man-walking-in-shopping-mall.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 16, name: 'Product 16', price: '$160.00', description: 'Description for product 16', imageUrl: 'https://images.pexels.com/photos/19738850/pexels-photo-19738850/free-photo-of-man-in-a-fashion-store.jpeg?auto=compress&cs=tinysrgb&w=600' },
    // Add more products as needed
];


document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    if (productsContainer) {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productsContainer.appendChild(productElement);
        });
    }

    updateCart();
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
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
            <img src="${item.imageUrl}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>${item.price}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}