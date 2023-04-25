

let carousel = document.querySelector('.carousel');
let container = carousel.querySelector('.container');
let item = carousel.querySelectorAll('.items');
let items = [...item];

window.onload = function slider(){
    setInterval(slide, 6000)
    function slide() {
    
        for (let i = 0; i < items.length; i++){
            items.forEach((e) => {
                e.classList.remove(`item${i + 1}`);
            });
            items[i].classList.add(`item${i + 1}`);
        }            
        let e = items.shift();
        items.push(e);
          
    }
    
}






function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);