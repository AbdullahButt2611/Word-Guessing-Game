const inputs = document.querySelector(".inputs");
const resetBtn = document.querySelector(".reset-btn");
const hint = document.querySelector(".hint span");
const wrongLetter = document.querySelector(".wrong-letter span");
const typingInput = document.querySelector(".typing-input");

let word, incorrects = [];

//Function to generate the random word and then displaying teh corresponding data on the screen
function randomWord(){
    // Getting a random object from the list fo words in the word class
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];

    word = ranObj.word;                         // Getting word of random selected object
    console.log(ranObj);

    hint.innerHTML = ranObj.hint;


    // Creating html objects boxes for inputs according to the word length
    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += '<input type="text" name="" id=""  disabled>';
        
    }
    inputs.innerHTML = html;
}


randomWord();

function initGame(e){
    let key = e.target.value;

    // Checks if the key obtained is alphabetical or not
    //Also if the incorrect list contains the key which has been already pressed
    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(' '+ key)){
        if(word.includes(key))              //If the user letter is found in the word
        {
            for (let i = 0; i < word.length; i++) {
                if(word[i] === key)
                {
                    //if the letter is matched then it will place hat letter into the correct position.
                    //It will pick all the input tags in the .inputs classs and then at the ith value place the character
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        }
        else
        {
            incorrects.push(' '+ key);
        }
    }
    wrongLetter.innerText = incorrects;
    typingInput.value = '';
}


resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", ()=> typingInput.focus());             //Automatically enter the inputted value into the input with class typing-input

