var nut = document.querySelector('.nut'),
logo=document.querySelector('.logo'),
menu = document.querySelector('.menu'),
layer2 = document.querySelector('.layer2');
var nutdn=document.querySelector('.nutdn');
var formdn = document.querySelector('.formdn');
var btndn = document.querySelector('.btndn');
nut.onclick=function(){
    //console.log('ok');
    nut.classList.toggle('bx-menu');
    nut.classList.toggle('bx-x');
    logo.classList.toggle('anlogo');
    menu.classList.toggle('nenmenu');
    layer2.classList.toggle('hienlayer2');
}
nutdn.onclick=function(){
    console.log('ok');
    formdn.classList.add('hienform')
}
btndn.onclick=function(){
    formdn.classList.remove('hienform');
}