const btn=document.querySelector('#btn')
const modal=document.querySelector('.modal-container')
const close=document.querySelector('#close')
btn.addEventListener('click',function(){
    modal.style.display='block'
})
close.addEventListener('click',function(){
    modal.style.display='none'
})