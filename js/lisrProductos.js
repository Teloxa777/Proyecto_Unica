// Ejemplo de productos
var products = [
    {id: 1, name: "Pan Blanco", description: "Delicioso pan blanco recién horneado", price: 10},
    {id: 2, name: "Pan Integral", description: "Saludable pan integral", price: 12},
    // ... podemos agregar más productos de ejemplo aquí
];

// Función para mostrar productos
function displayProducts() {
    $("#productsTable").empty();
    products.forEach(product => {
        $("#productsTable").append(`
            <tr>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>
                    <button class="btn btn-warning">Editar</button>
                    <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Borrar</button>
                </td>
            </tr>
        `);
    });
}

// Función para borrar producto
function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    displayProducts();
}

// Mostrar productos al cargar la página
$(document).ready(function() {
    displayProducts();
});