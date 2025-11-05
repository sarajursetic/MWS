const hambuger = document.querySelector("#hamburger");
const menu = document.querySelector(".menu ul")

hamburger.onclick = function(){
    this.classList.toggle("open");
    
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';  
    } else {
        menu.style.display = 'flex';  
    }
}