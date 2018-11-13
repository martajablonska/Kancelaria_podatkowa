/*const menuBtn = document.querySelector('.btn-nav');
const menu = document.querySelector('.header_menu');

menuBtn.addEventListener('click', function() {
     menu.classList.toggle('show_menu');
});*/

let width= window.innerWidth; 

$(document).ready(function(){
    
    if(width < 950) {
          $('#menu').hide(); 
    
        $("#hamburger").click(function(){
           $('#menu').slideToggle();

        });
        
        
         $('#menu').click(function() {  
            $('#menu').slideUp();
        });
    }
    
    
      
        
});