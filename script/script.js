'use strict'

var btn = document.querySelector("#submit");
var card = document.querySelector(".card");
var feedback = document.querySelector(".feedback");
var btns = document.querySelectorAll(".num-btn");
var rate = document.querySelector("#rate")
var submit = document.querySelector("#submit");

function rating(){
    btns.forEach((btn, index)=>{
        console.log(`Button ${index + 1}: ${btn.textContent}`);

        btn.addEventListener('click', () => {
            btn.style.backgroundColor = "white";

            submit.addEventListener("click", ()=>{
                card.style.visibility = "hidden";
                card.style.pointerEvents = "none"; 
                feedback.style.display = "flex";
                rate.innerHTML = btn.textContent;
            });
        });
    }); 
} 

rating();