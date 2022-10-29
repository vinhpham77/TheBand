let modal = document.querySelector('.js-modal');
let buyBtns = document.querySelectorAll('.js-buy-btn');
let closeBtn = document.querySelector('.js-close-btn');
let modalContainer = document.querySelector('.js-modal-container');


function closeModal() {
    modal.classList.remove('open');
};

buyBtns.forEach(buyBtn => {
    buyBtn.addEventListener('click', function openModal() {
        modal.classList.add('open');
    });
});

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', function closeModalWhenClickOutside() {
    closeModal();
});
modalContainer.addEventListener('click', function(e) {
    e.stopPropagation();
});

let menuIcon = document.getElementById('menu-icon');
let header = document.getElementById('header');
let headerHeight = header.clientHeight;

menuIcon.onclick = function() {
    let isOpen = header.clientHeight === headerHeight;
    if (isOpen) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
}

let menuItems = document.querySelectorAll('#nav li a');
menuItems.forEach(menuItem => {
    menuItem.onclick = function(e) {
        let hasSubNav = this.nextElementSibling && 
                        this.nextElementSibling.classList.contains('sub-nav');
        
        if (hasSubNav) {
            e.preventDefault();
        } else {
            header.style.height = null;
        }
    };
})