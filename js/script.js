const menuBtn = document.getElementById('menu-btn');
const filtersBtn = document.getElementById('filters-btn');
const menu = document.getElementById('menu');
const filters = document.getElementById('filters');
const searchBtn = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar');
const productButtons = document.querySelectorAll('.product-card');

function redirectToProduct(id) {
    // Redireciona para a página de detalhes com o ID do produto
    window.location.href = `product-detail.html?id=${id}`;
}


searchBtn.addEventListener('click', () => {
    const searchQuery = searchBar.value.trim();
    if (searchQuery) {
        alert(`Você pesquisou por: ${searchQuery}`);
        // Aqui você pode implementar a lógica de busca
    } else {
        alert('Por favor, insira um termo para pesquisar.');
    }
});

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});


filtersBtn.addEventListener('click', () => {
    filters.classList.toggle('show');
});

function formatarMoeda(event) {
    let input = event.target;
    let value = input.value;

    // Remover caracteres não numéricos
    value = value.replace(/\D/g, "");

    // Adicionar a formatação de R$ (coloca a vírgula como separador de decimais)
    if (value.length > 2) {
        value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    }
    // Adiciona o símbolo R$
    if (value) {
        value = "R$ " + value;
    }

    input.value = value;
}
