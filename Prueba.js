document.addEventListener('DOMContentLoaded', () => {
    // Código para cargar productos y manejar la interactividad
    loadProducts();
});

function loadProducts() {
    // Imaginemos que tienes un array de productos
    const products = [
        { id: 1, name: 'Arnés de Seguridad', price: 89.99, description: 'Arnés ergonómico para trabajos en altura.' },
        { id: 2, name: 'Casco de Seguridad', price: 49.99, description: 'Casco robusto con suspensión ajustable.' },
        // ... más productos
    ];

    const productsContainer = document.querySelector('.products');
    products.forEach(product => {
        productsContainer.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Precio: $${product.price}</p>
            </div>
        `;
    });
}
 