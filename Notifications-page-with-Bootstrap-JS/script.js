// Connection making
let unopened = document.querySelectorAll('.unopened');
let fontAwsom = document.querySelectorAll('i');
let unread = document.getElementsByClassName('read')[0];
let marked = document.getElementsByClassName('mark')[0];
let redDot = document.querySelectorAll('.red-dot');
let click = 0;

// unread message state change
unread.addEventListener('click',()=>{
    click++;
    console.log(click);
    unopened[0].classList.toggle('marked');
    unopened[1].classList.toggle('marked');
    unopened[2].classList.toggle('marked');
    if(click % 2 == 0){
        marked.innerHTML = 3;
        redDot[0].appendChild(fontAwsom[0]);
        redDot[1].appendChild(fontAwsom[1]);
        redDot[2].appendChild(fontAwsom[2]);
    }else{
        marked.innerHTML = 0;
        redDot[0].removeChild(fontAwsom[0]);
        redDot[1].removeChild(fontAwsom[1]);
        redDot[2].removeChild(fontAwsom[2]);
    }
});
