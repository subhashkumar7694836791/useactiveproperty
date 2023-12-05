var show=document.querySelectorAll('.detail');
show.forEach(element=>{
    element.addEventListener('click',()=>{
        removeClass()
        element.classList.add('active');
    })
})

 function removeClass(){
show.forEach(element=>{
    element.classList.remove('active');
})
}