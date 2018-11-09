const doradztwo = document.querySelector('#doradztwo');
const btn = doradztwo.querySelector('.btn-show_more');
const btnClose = doradztwo.querySelector('.btn-close');
const container = document.querySelector('.doradztwo_container');



const otherItems = [...document.querySelectorAll('.doradztwo_item')];

const arrayBtn = [...document.querySelectorAll('.btn-show_more')];

container.addEventListener('click', function(e) {
    const wasClicked = e.target;
    console.log(wasClicked);
});



btn.addEventListener('click', function() {
    doradztwo.classList.add('show');
    
    otherItems.forEach(function(item) {
        if(item !== doradztwo) {
            item.classList.add('decrease');
        }
    });
});

btnClose.addEventListener('click', function() {
    doradztwo.classList.remove('show');
    
    otherItems.forEach(function(item) {
        if(item !== doradztwo) {
            item.classList.remove('decrease');
        }
    });
});



/*const showMoreBtn = this.querySelector('.btn-show_more');
const closeBtn = this.querySelector('.btn-close');*/



