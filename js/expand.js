const arrayItems = [...document.querySelectorAll('.doradztwo_item')];
const closeButtons = [...document.querySelectorAll('.btn-close')];
const openButtons = [...document.querySelectorAll('.btn-show_more')];

                           
openButtons.forEach(function(button){
    
    button.addEventListener('click', function(e) {
        
        const parentBtn = button.parentNode.parentNode;
        
            arrayItems.forEach(function(item) {
                item.classList.remove('decrease');    
            }); 
        
            arrayItems.forEach(function(item) {
                item.classList.remove('show');    
            }); 
            
            parentBtn.classList.add('show');
            
            arrayItems.forEach(function(item) {
                if(item !== parentBtn) { 
                item.classList.add('decrease');
                }
            });  
    });
});

closeButtons.forEach(function(button) {
    
    button.addEventListener('click', function() {
        
        const parentBtn = button.parentNode;
        
        parentBtn.classList.remove('show');

        arrayItems.forEach(function(item) {
            if(item !== parentBtn) {
                item.classList.remove('decrease');
            }
        });
    });
});




