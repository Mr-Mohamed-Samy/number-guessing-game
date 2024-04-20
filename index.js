const guess = document.getElementById('guess'); 
const att = document.getElementById('att'); 
const corrans = document.getElementById('corrans'); 
const btn = document.getElementById('btn');
let attemps = 0;
let min = 1;
let max = 100;
let rightNum = Math.floor(Math.random () * (max - min + 1)) + min;
    btn.onclick = function() {
    attemps++;
    att.textContent = attemps;
    let theGuess = parseInt(guess.value);
    if(theGuess > rightNum){
        corrans.textContent = "YOUR GUESS IS GREATER THAN THE CORRECT ANSWER";
    } else if(theGuess < rightNum){
        corrans.textContent = "YOUR GUESS IS LESS THAN THE CORRECT ANSWER";
    } else if(theGuess == rightNum){
        corrans.textContent = "YOUR GUESS IS CORRECT";
    }
    if (attemps === 3) {
        btn.disabled = true; 
        guess.disabled = true; 
    }
};


