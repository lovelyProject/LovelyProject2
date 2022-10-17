'use strict';

let greetSlider = document.querySelector('#greet-slider');
let random = Math.ceil(Math.random()*4);
// Рандомная картинка на главном экране
if (greetSlider){
    switch (random){
        case 1:{
            greetSlider.classList.add('first-pic');
            break;
        }
        case 2:{
            greetSlider.classList.add('second-pic');
            break;
        }
        case 3:{
            greetSlider.classList.add('third-pic');
            break;
        }
        case 4:{
            greetSlider.classList.add('fourth-pic');
            break;
        }
    }
}


const burger = document.querySelector('#burger');
const navMenu = document.querySelector('.nav-menu'); 
if(burger){
    burger.addEventListener('click', ()=> navMenu.classList.toggle('nav-menu_active'))

}

//Slider
const sliderContainer = document.querySelector('.bottom-slider-container');
const slidesBlock =  document.querySelector('.slides');
const listOfSlides = document.querySelectorAll('.slide');
const sliderNext = document.querySelector('.action-next');
const sliderPrev = document.querySelector('.action-prev');
let activeSlide = 0;

init();

function init(){
    for (let i = 0; i < listOfSlides.length; i++){
        const slide = listOfSlides[i];
        slide.dataset.order = i;
        slide.style.transform = 'translate(-50%,-50%)';

        slide.addEventListener('click',clickHandler)
    }
    activeSlide = Math.floor(listOfSlides.length / 2);
    
    update();
}

function update(){
    const {width,height} = sliderContainer.getBoundingClientRect();

    const a = width/2;
    const b = height/2;

    const delta = Math.PI /listOfSlides.length / 4;
    
    for (let i = 0; i < listOfSlides.length; i++){
        const leftSlide = document.querySelector(`.slide[data-order="${activeSlide - i}"]`);
        
        leftSlide.style.zIndex = listOfSlides.length - i;
        leftSlide.style.opacity = 1 - 1.5 * i/listOfSlides.length;
        
        if (leftSlide){
            leftSlide.style.left = `${width/2  + a * Math.cos(Math.PI * 3 / 2 - delta * i * 2)}px`;
            leftSlide.style.top = `${-b * Math.sin(Math.PI * 3 / 2 - delta * i * 2)}px`;
        }
        const rightSlide = document.querySelector(`.slide[data-order="${activeSlide + i}"]`);
       
        rightSlide.style.zIndex = listOfSlides.length - i;
        rightSlide.style.opacity = 1 - 2 * i/listOfSlides.length;


        if (rightSlide){
            rightSlide.style.left = `${width/2  + a * Math.cos(Math.PI * 3 / 2 + delta * i * 2)}px`;
            rightSlide.style.top = `${-b * Math.sin(Math.PI * 3 / 2 + delta * i * 2)}px`;
        }
    }

}

function clickHandler(){
    const order = parseInt(this.dataset.order, 10);
    activeSlide = order;
    update();
}