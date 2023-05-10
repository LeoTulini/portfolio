document.body.addEventListener("mousemove", function(event) {
    var rastro = document.querySelector(".rastro");
    rastro.style.left = event.clientX + "px";
    rastro.style.top = event.clientY + "px";

    var velocidade = Math.sqrt(Math.pow(event.clientX - mouseXAnterior, 2) + Math.pow(event.clientY - mouseYAnterior, 2));

    var tamanho = Math.max(20, Math.min(velocidade * 2, 100));
    rastro.style.width = tamanho + "px";
    rastro.style.height = tamanho + "px";
    rastro.style.marginLeft = -tamanho/2 + "px";
    rastro.style.marginTop = -tamanho/2 + "px";

  });
  