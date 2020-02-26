AOS.init({
  duration: 1000,
})

let carrousel = document.querySelector('.carrousel')
let carrito = document.querySelector('.carrousel-images')

let imagenActual = 0

let cantidadImagenes = document.querySelectorAll('.carrousel img').length



document.querySelector('i.prev').addEventListener('click', function () {
  if (imagenActual > 0) {
    imagenActual--
  } else {
    imagenActual = cantidadImagenes - 1
  }
  carrito.style.transform = 'translateX(' + (-carrousel.offsetWidth * imagenActual) + 'px)';
})

document.querySelector('i.next').addEventListener('click', function () {
  if (imagenActual < (cantidadImagenes - 1)) {
    imagenActual++
  } else {
    imagenActual = 0
  }
  carrito.style.transform = 'translateX(' + (-carrousel.offsetWidth * imagenActual) + 'px)';
})

carrito.addEventListener('transitionend', function () {
  console.log('fin de la transition')
})




var scrollTop = $(".scrollTop");

$(window).scroll(function () {
  // declare variable
  var topPos = $(this).scrollTop();

  // if user scrolls down - show scroll to top button
  if (topPos > 850) {
    $(scrollTop).css("opacity", "1");

  } else {
    $(scrollTop).css("opacity", "0");
  }

}); // scroll END

//Click event to scroll to top
$(scrollTop).click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;

}); // click() scroll top EMD