"use strict";

function set() {
    textList = textLists.splice(Math.floor(Math.random() * textLists.length),1)[0];
    text.textContent = textList;
    
    type = 0;

    document.getElementById("btn").style.display = "none";
    document.getElementById("h1").style.display = "none";
}

const textLists = [
    'rugby',
    'takkuru',
    'jakkaru',
    'sukuramu',
    'nokkuonn',
    'rainnauto',
    'suro-fowa-do',
    'ofusaido',
    'nottosutore-to',
    'haitakkuru',
];

let textList;
let type = 0;  //何文字目を打ってるかを確認する
let startTime;
let count = 60;  

const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    startTime = Date.now();
    // function Timer(){
    //     count = count -1;
    //     console.log(count);
        
    // }
    // setInterval(Timer, 1000);

});

// if(count = 0) {
//     alert("GAME OVER");
// }


document.addEventListener('keydown',keyDown);

function keyDown(e) {
    if(e.key === textList[type]) {
        type ++;

        text.textContent = textList.substring(type);

        if(type === textList.length) {
            if(textLists.length === 0) {
                const endTime = ((Date.now() - startTime) / 1000).toFixed(2);
                
                
                const result = document.getElementById("result");
                result.textContent = "FINISH";
                
                const time = document.getElementById("time");
                time.textContent = `タイムは${endTime}秒です。`;
                
                const restart = document.getElementById("restart");
                restart.style.display = 'block';
                
                return;
            }

            set();
        }
    }
}

function reload(){
    location.reload();
}