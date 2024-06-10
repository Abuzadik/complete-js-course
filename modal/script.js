'use strict'

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelectorAll('.show-modal');

const openModals = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
 }

for (let i = 0; i < openModal.length; i++) {
    const element = openModal[i].addEventListener('click', openModals)
}

const closeModals = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click', closeModals)
overlay.addEventListener('click', closeModals)

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hiddem')){
            closeModals();
        }
    }
})



