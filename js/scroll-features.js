// Seleciona todos os elementos com a classe "fade-in"
const fadeElements = document.querySelectorAll('.fade-in');
const slideLeftElements = document.querySelectorAll('.slide-left');
const slideRightElements = document.querySelectorAll('.slide-right');

// Função que verifica se o elemento está visível na tela
function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  return (
    rect.top <= windowHeight && rect.bottom >= 0
  );
}

// Função que adiciona a classe "fade-in-active" quando o elemento está visível
function handleFade() {
  fadeElements.forEach(element => {
    if (isElementVisible(element)) {
      element.classList.add('fade-in-active');
    } else {
        element.classList.remove('fade-in-active')
    }
  });
}

function handleSlideLeft() {
    slideLeftElements.forEach(element => {
    if (isElementVisible(element)) {
        element.classList.add('slide-left-active');
      } else {
        element.classList.remove('slide-left-active')
    }
    });
}

function handleSlideRight() {
    slideRightElements.forEach(element => {
    if (isElementVisible(element)) {
        element.classList.add('slide-right-active');
      } else {
        element.classList.remove('slide-right-active')
    }
    });
}

// Adiciona o evento de scroll para chamar a função handleFade
window.addEventListener('scroll', handleFade);
window.addEventListener('scroll', handleSlideLeft);
window.addEventListener('scroll', handleSlideRight);

// Chama a função handleFade uma vez para verificar se os elementos já estão visíveis na tela
handleFade();
handleSlideLeft();
handleSlideRight();

// Função para subir uma imagem enquando da scroll para baixo na pagina inicial
window.addEventListener('scroll', function() {
  var img = document.getElementById('bytes');
  var distancia = window.pageYOffset || document.documentElement.scrollTop;
  img.style.transform = 'translate(-50%, -' + distancia / 10 + 'vh)';
});