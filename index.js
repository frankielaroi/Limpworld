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
