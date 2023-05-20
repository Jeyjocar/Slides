/*01-05-2023
Fondos slide tipo WEB
Jeyfrey Calero*/ 



const slider = document.querySelector(".slider"); //querySelector es para llamar una class
const btns = document.querySelectorAll(".btn"); //querySelectorALL permite llamar varias clases
const myslider = document.querySelectorAll(".img"); //querySelect
const background = document.querySelectorAll(".bg");
const option = document.querySelectorAll(".option");

var index = 1;
var option_index = 0;
var size = myslider[index].clientWidth;

actualizar();
function actualizar(){
    slider.style.transform = 'translateX('+ -size*index +'px)';
    background.forEach((img) => img.classList.remove('show'));
    background[option_index].classList.add("show");
    option.forEach((option) => option.classList.remove('colored'));
    option[option_index].classList.add('colored');
}

function slide(){
    slider.style.transition = 'transform 0.5s ease-in-out';
    actualizar();
}

function btnCheck(){
    if (this.id === 'prev'){index--;
        if (option_index === 0){ option_index = 4;
        }
        else {
            option_index--;
        }
    }
        else {
        index++;
        if (option_index === 4){ 
            option_index = 0;
            }
        else {
            option_index++;
        }
    }
    slide();    
}

function validar_option(){
    let i = Number(this.getAttribute('option_index'));
    option_index = i;
    index = i+1;
    slide();
}


slider.addEventListener('transitionend',()=>{
    if (myslider[index].id === 'primera'){
        slider.style.transition = 'none';
        index = myslider.length-2;
        slider.style.transform = 'translateX('+ -size*index +'px)';
    }
        else if (myslider[index].id === 'ultima'){
        slider.style.transition = 'none';
        index = 1;
        slider.style.transform = 'translateX('+ -size*index +'px)';
    }
});


btns.forEach((btn) => btn.addEventListener('click',btnCheck));
option.forEach((option) => option.addEventListener('click',validar_option));

