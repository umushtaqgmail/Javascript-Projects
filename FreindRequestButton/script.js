

const CurrentStatus=document.querySelector("h4");

const AddButton=document.querySelector("#add");


let check = 0;

AddButton.addEventListener("click",function(){
if(check == 0 ){
    CurrentStatus.innerHTML = "Friends";
    CurrentStatus.style.color = "green";
    AddButton.innerHTML = "Remove Friend";
    check = 1;

}

else{
CurrentStatus.innerHTML = "Strangers";
    CurrentStatus.style.color = "Red";
    AddButton.innerHTML = "Add Friend";
    check = 0;
}
   
})


