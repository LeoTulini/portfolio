// selecione a barra superior e a seção onde ela deve se tornar fixa
const topBar = document.querySelector('nav');
const section = document.querySelector('.container-1');

// defina a posição em que a barra superior deve se tornar fixa
const threshold = section.offsetTop;

// adicione um ouvinte de evento de rolagem à janela
window.addEventListener('scroll', () => {
  // verifique se a posição atual da barra de rolagem está abaixo do limite
  if (window.pageYOffset > threshold) {
    // adicione a classe "fixed" à barra superior
    topBar.classList.add('fixed');
    // diminua a fonte da barra superior
    topBar.style.fontSize = '0.8rem';
  } else {
    // remova a classe "fixed" da barra superior
    topBar.classList.remove('fixed');
    // restaure o tamanho da fonte da barra superior
    topBar.style.fontSize = '0.9rem';
  }
});