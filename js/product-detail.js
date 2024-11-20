
// Dados dos produtos simulados
const products = {
    1: {
        title: "Casa Moderna",
        image: "https://via.placeholder.com/400",
        price: "R$ 750.000",
        description: "Uma casa moderna localizada em um bairro tranquilo, com 3 quartos, 2 banheiros e uma ampla sala de estar."
    },
    2: {
        title: "Apartamento Luxuoso",
        image: "https://via.placeholder.com/400",
        price: "R$ 1.200.000",
        description: "Apartamento de luxo com vista para o mar, 4 quartos e 3 banheiros."
    },
    3: {
        title: "Casa Simples",
        image: "https://via.placeholder.com/400",
        price: "R$ 350.000",
        description: "Uma casa acessível com 2 quartos e 1 banheiro."
    }
};

// Captura o ID do produto da URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Exibe os detalhes do produto correspondente
if (productId && products[productId]) {
    const product = products[productId];
    document.querySelector('h1').innerText = product.title;
    document.querySelector('.product-image img').src = product.image;
    document.querySelector('.price').innerText = product.price;
    document.querySelector('.description').innerText = product.description;
} else {
    document.querySelector('main').innerHTML = '<p>Produto não encontrado.</p>';
}


