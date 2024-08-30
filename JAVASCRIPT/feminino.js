
var carouselImages = document.querySelector('.carousel-images');
var images = document.querySelectorAll('.carousel-images img');

var currentIndex = 0;
var slideWidth = images[0].clientWidth;

function showSlide(index) {
    // Calcula a posição do slide a exibir
    var newPosition = -index * slideWidth;
    carouselImages.style.transform = 'translateX(' + newPosition + 'px)';
    currentIndex = index;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }


var MenuItens = document.getElementById("menu");

MenuItens.style.maxHeight = "0px";

function cllr(){
    if (MenuItens.style.maxHeight == "0px"){
        MenuItens.style.maxHeight = "200px";
    }else{
        MenuItens.style.maxHeight = "0px";
    }
}