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


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}