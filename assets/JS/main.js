const menuBtn = document.querySelector('.menuBtn')
const menuList = document.querySelector('.menuList')

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('show')
})

const menuBtn2 = document.querySelector('.menuBtn2')
const menuList2 = document.querySelector('.menuList2')

menuBtn2.addEventListener('click', ()=>{
    menuList2.classList.toggle('show')
})

const menuBtn3 = document.querySelector('.menuBtn3')
const menuList3 = document.querySelector('.menuList3')

menuBtn3.addEventListener('click', ()=>{
    menuList3.classList.toggle('show')
})



// slider

const track = document.querySelector('.track')
const backButton = document.querySelector('.back')
const nextButton = document.querySelector('.next')
const countImg = document.querySelectorAll('.img').length;
console.log(countImg);
let pos = 0;
let width = 250;
nextButton.addEventListener('click', function(){
    if(pos <= -(width *(countImg -3))) return
    pos -= width
    track.style.left = pos+'px'
})
backButton.addEventListener('click', function(){
    if(pos >= 0) return
    pos +=width
    track.style.left = pos+'px'
})

// accordion
const accordion = document.querySelectorAll('.accordion')

accordion.forEach(element=>{
    element.addEventListener('click',()=>{
        img = element.querySelector('.fa-caret-down')
        img.classList.toggle('img_active')
        accordionBody = element.querySelector('.accordion_body')
        accordionBody.classList.toggle('accordion_body_active')
    })
})