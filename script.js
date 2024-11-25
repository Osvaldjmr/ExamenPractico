const apiUrl = 'https://fakestoreapi.com/products';

const productsContainer = document.getElementById('products');

function fetchProducts() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al obtener los datos: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayProducts(data);
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}
//mostrar 10 productos
function displayProducts(products) {
    const limitedProducts = products.slice(0, 10);
    limitedProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
        <img src = "${product.image}" alt = "${product.title}">
        <h3>${product.title}</h3>
        <p><em>${product.description}</em></p>
        <p><strong>Categoria:</strong> ${product.category}</p>
        <p><strong>Rating:</strong> ${product.rating.rate}</p>
        <button type="submit" id="buyitem">$${product.price}</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}


fetchProducts();