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

// GSAP Animation

let timeline = gsap.timeline();

parallax_el.forEach(el => {
  timeline.from(
    el,
    {
      top: `${el.offsetHeight / 2 - el.dataset.distance}px`,
      duration: 1,
    }
  )
})
