$(document).ready(function(){
  
let width= window.innerWidth;    
    
    //hamburger menu 
    
    /*if(width<600) {                         //600px breakpoint in css
        $('#menu').hide();                  
        $("#hamburger").click(function(){
            $('#menu').slideToggle();
        });
        
        //hide menu after click 'home'//
        
         $('#home_menu').click(function() {  
            $('#menu').slideUp();
        });
        
    };*/
    
    //smooth scroll 
    
    function scroll(e) {

    let href = $(this).attr('href');
    e.preventDefault();

    if(width < 600) {                      //600px breakpoint in css
       $('html, body').animate({
            scrollTop: $(href).offset().top -227
        }, 800); 
    } else {                        
        $('html, body').animate({
            scrollTop: $(href).offset().top - 50
        }, 800);  
    };

    location.hash = href;
    };

    $('a[href*="#"]').click(scroll);
    
});
    