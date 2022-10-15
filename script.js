'use strict';

let greetSlider = document.querySelector('#greet-slider');
let random = Math.ceil(Math.random()*4);
// Рандомная картинка на главном экране
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

const burger = document.querySelector('#burger');
const navMenu = document.querySelector('.nav-menu'); 
burger.addEventListener('click', ()=> navMenu.classList.toggle('nav-menu_active'))

