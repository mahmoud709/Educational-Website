let bar_icon=document.getElementById("bar-icon");
let menue=document.querySelector(".nav");

bar_icon.onclick=function(){
    menue.classList.toggle("active");
}

// scroll button
const scroll_btn=document.getElementById('scroll_button');

window.onscroll=function(){
    if(scrollY>=400){
        scroll_btn.style.display='block';
    }
    else{
        scroll_btn.style.display='none';
    }
}


scroll_btn.onclick=function(){
scroll(0,0);
}