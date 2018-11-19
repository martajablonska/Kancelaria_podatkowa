$(document).ready(function(){
  
let width= window.innerWidth;    
        
    function scroll(e) {

    let href = $(this).attr('href');
    e.preventDefault();

    if(width < 950) {                     
       $('html, body').animate({
            scrollTop: $(href).offset().top - 40
        }, 800); 
    } else {                        
        $('html, body').animate({
            scrollTop: $(href).offset().top - 60
        }, 800);  
    };

    location.hash = href;
    };

    $('a[href*="#"]').click(scroll);
    
});
    