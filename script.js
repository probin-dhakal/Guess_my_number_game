"use strict";

const containerEl = document.querySelector(".container");
const reset = document.querySelector(".btn_again");
const check = document.querySelector(".btn_check");
const hide = document.querySelector(".hide_num");
const message = document.querySelector(".message");
const input_num = document.querySelector(".input_number");
const high_scoreEl = document.querySelector(".high_score");
const scoreEl = document.querySelector(".score");

const body = document.querySelector("#body")
//generate random number from 1 to 100

let secretNumber = Math.floor(Math.random() * 100 + 1);
 //console.log(secretNumber)
let score = 20;
let high_score = 20;



//checking


check.addEventListener("click", (e)=>{
    const guess = Number(input_num.value);
   
    e.preventDefault();


    if(guess){
      
       if(guess!=secretNumber){


        if(score>1){
                score--;
                scoreEl.textContent =score; 
                message.textContent = guess > secretNumber ? "Two High" : "Two Low"
                scoreEl.textContent =score; 
        }else{
                message.textContent = "Sorry !! YOU LOSE (:"
                scoreEl.textContent = 0;
                high_scoreEl.textContent = 0;
        }

       }
       else{
        //win
          message.textContent ="Congratulations ! YOU WON!!!"
          high_scoreEl.textContent = score;
          hide.textContent = secretNumber;
          body.style.backgroundColor = "#D74177"
          hide.style.backgroundColor = "#ea57d2"
          hide.style.width = "400px"
          hide.style.transition = " all 4s"
       }



    }else{//if nothing entered
       message.textContent ="Please Enter a Number (:"
    }
})


reset.addEventListener("click",()=>{
    scoreEl.textContent =20;
    high_scoreEl.textContent=20;
    hide.textContent="?";
    secretNumber = Math.floor(Math.random() * 100 + 1);
    message.textContent = "Start Guessing...........";
    body.style.backgroundColor = "#d6db95"
})
