var Scroll=document.querySelector(".scroll")
var flex =document.querySelector(".scroll-button-box")

Scroll.addEventListener("click",function(){
var intro_one = document.querySelector(".in1")
var intro_two = document.querySelector(".in2")

if(intro_two.style.transform==="translateX(-350px)"){
    intro_one.style.transform="translateX(0px)"
    intro_two.style.transform="translateX(350px)"
     
}else{
     intro_one.style.transform="translateX(400px)"
     intro_two.style.transform="translateX(-350px)"
     
}
    

})



var logo = document.querySelector(".logo")

window.onscroll = function (e){
    if(this.scrollY>90){
        logo.style.opacity="0"
        
    }else{
        logo.style.opacity="1"
    }
}


var open_btn =document.querySelector(".nav")
var close_btn =document.querySelector(".close-icon")
var nav = document.querySelector("nav")

open_btn.addEventListener("click",function(){


        nav.style.transform="translate(0)"
})

close_btn.addEventListener("click",function(){


    nav.style.transform="translate(-100vw)"
})