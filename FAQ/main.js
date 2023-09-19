const plus=document.getElementsByClassName('content-container')
for(i=0;i<plus.length;i++){
    plus[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}