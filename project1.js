let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#rest-btn");
let turno=true;//playerx ,playry
let newbtn=document.querySelector("#new-btn");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame=() => {
    turno=true;
    enable();
    msgcont.classList.add("hide");



}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled="true";
        checkwinner();
    });
}
);
const disab=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner = (winner) => {
    msg.innerHTML=`Congratulations,winner is ${winner}`;
    msgcont.classList.remove("hide");
    disab();
}
const checkwinner=()=>{
    for (pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

         if(pos1!=""&& pos2!=""&& pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showwinner(pos1);
            }
         }
    }
};
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
