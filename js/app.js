const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

function update(cursorPosition) {
    parallax_el.forEach(el => {
        let speedx = parseFloat(el.dataset.speedx) || 0;
        let speedy = parseFloat(el.dataset.speedy) || 0;
        let speedz = parseFloat(el.dataset.speedz) || 0;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px)`;
    });
}

update(0);

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    update(e.clientX);
});

const upElements = document.querySelectorAll('.up');
const downElements = document.querySelectorAll('.down');

// Função que verifica se o elemento está visível na tela
function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  return (
    rect.top <= windowHeight && rect.bottom >= 0
  );
}

function handleUp() {
  upElements.forEach(element => {
  if (isElementVisible(element)) {
      element.classList.add('up-active');
    } else {
      element.classList.remove('up-active')
  }
  });
}
