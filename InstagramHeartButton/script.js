const con = document.querySelector(".container");


const LoveIcon = document.querySelector(".like");

const BottonLikeBtn = document.querySelector('.ButtomLikeBtn');

con.addEventListener("dblclick", function(){
  
    LoveIcon.style.transform = 'translate(-50%,-50% ) scale(1)';
    LoveIcon.style.opacity = "0.8";


    setTimeout(function(){

        LoveIcon.style.opacity = '0';

    }, 1000)

    setTimeout(function(){

        LoveIcon.style.transform = 'translate(-50%,-50% ) scale(0)';

    }, 2000)
})



