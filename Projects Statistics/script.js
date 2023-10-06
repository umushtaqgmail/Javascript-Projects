 const timerOut =setInterval (ProjectDone,  10 );
 const timerOut1 =setInterval (happyclients,  10 );
 const timerOut2 =setInterval (CoffeCups,  10 );
 let count1 =1;
 let count2 =1;
 let count3 =1;

 function ProjectDone(){
    count1++;
    document.querySelector('#number1').innerHTML=count1;
 
    if(count1 == 500){
        clearInterval(timerOut)
    }
 }

 function happyclients(){
    count2++;
    document.querySelector('#number2').innerHTML=count1;

    if(count2 == 35 ){
        clearInterval(timerOut1)
    }
 }


 function CoffeCups(){
    count3++;
    document.querySelector('#number3').innerHTML=count1;
    count3++;
    if(count3 == 349 ){
        clearInterval(timerOut1)
    }
 }

