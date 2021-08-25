/* NAVBAR START */
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
});
/* NAVBAR END */

/* TOGGLE DISPLAY START */
// let element = document.getElementById('question-one');
const accordion = document.getElementsByClassName('accordion-question');
let state = false;
for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        toggleAccordion(accordion[i].nextElementSibling.id);
        toggleIcon(accordion[i].nextElementSibling.id);
        
    });
}
function toggleAccordion(element){
    let idElement = document.getElementById(element);
    idElement.classList.toggle('active');
}
function toggleIcon(elementID){
    
    let openId = elementID + '-open'
    let closeID = elementID + '-close'
    let closeIcon = document.getElementById(closeID);
    if(state !== false) {
        openIcon = document.getElementById(openId)
        openIcon.style.display = 'block'
        closeIcon.style.display = 'none';
        console.log('this should display +');
        let openClass = document.getElementsByClassName('open');
        console.log(openClass);
    }
    else {
        openIcon = document.getElementById(openId)
        openIcon.style.display = 'none'
        closeIcon.style.display = 'block';
        console.log('this should display -');
        let openClass = document.getElementsByClassName('open');
        console.log(openClass);
    }
    state = !state;

}
/* TOGGLE ICON END */