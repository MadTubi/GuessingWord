
const words = [
    "python",
    "java",
    "pearl",
    "ruby"
];

const hint = [
    "Coding language named after an animal",
    "A coding language that starts with a J",
    "Named after something found in a clam",
    "Names after a highly valued gemstone"
]

let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
let selectedHint = hint[randomIndex];

document.getElementById("hint").textContent = selectedHint;


//store the already guessed letters
let guessedList = []


//initial display word
let displayWord = "";
for(let i = 0; i < selectedWord; i++){
    displayWord += "_ ";
}

document.getElementById("displayWord").textContent = displayWord;

//function
const button = document.getElementById("submit");

button.addEventListener("click", function(){

    let inputElement = document.getElementById("letter_input");

    //to check empty input
    if(!inputElement.value){
        alert("Empty input box. Please add input letter!!");
        return;
    }

    let letter = inputElement.value.toLowerCase();

    //clear input field
    inputElement.value = "";

    //check if the letter has already been guessed
    if(guessedList.includes(letter)){
        alert("You have already guessed that letter!");
        return;
    }

    //add letter to guessed letter array
    guessedList.push(letter);

    //update word display based on guessed letters
    let updatedDisplay = "";
    let allLettersGuessed = true;

    for(let i = 0; i < selectedWord.length; i++){
        if(guessedList.includes(selectedWord[i])){
            updatedDisplay += selectedWord[i] + " ";
        }else{
            updatedDisplay += "_ ";
            allLettersGuessed = false;
        }
    }

    document.getElementById("displayWord").textContent = updatedDisplay;

    //check if all letters have been guessed
    if (allLettersGuessed){
        alert("Congratulations! You guessed the word correctly");
    }
});
