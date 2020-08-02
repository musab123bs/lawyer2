burger = document.querySelector('.burger')
header = document.querySelector('.header')
navList = document.querySelector('.nav-list')
navBar = document.querySelectorAll('.nav-bar, .Display')

burger.addEventListener('click' , ()=>{
    header.classList.toggle('h-class');
    navList.classList.toggle('v-class');
    navBar.classList.toggle('v-list');
})


readOne = document.querySelector('.displayOne')
btnDivOne = document.querySelector('.bonty-moreOne')
// noDisplay = document.querySelector('.noDisplay')

readOne.addEventListener('click', ()=>{
    // readOne.classList.toggle('noneOne')
    btnDivOne.classList.toggle('nicheOne');
    // noDisplay.classList.toggle('dissplay');
})

readTwo = document.querySelector('.displayTwo')
btnDivTwo = document.querySelector('.bonty-moreTwo')

readTwo.addEventListener('click', ()=>{
    btnDivTwo.classList.toggle('nicheTwo');
})
readThree = document.querySelector('.displayThree')
btnDivThree = document.querySelector('.bonty-moreThree')

readThree.addEventListener('click', ()=>{
    btnDivThree.classList.toggle('nicheThree');
})
