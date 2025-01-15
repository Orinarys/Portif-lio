// Seleciona o ícone do menu e a barra de navegação
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Adiciona um ouvinte de eventos para o clique no ícone do menu
menuIcon.addEventListener('click', () => {
    // Alterna a classe 'bx-x' para o ícone do menu, mudando sua aparência
    menuIcon.classList.toggle('bx-x');
    // Alterna a classe 'active' para a barra de navegação, mostrando ou ocultando-a
    navbar.classList.toggle('active');
});
