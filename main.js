let letters = "abcdefghijklmnopqrstuvwxyz";
letters = Array.from(letters);

let div = document.querySelector(".letters");
for (l of letters) {
    div.innerHTML += `<span class = "letter_box">${l}</span>`
}

// Object Of Words + Categories
const words = {
    programming: ["php", "javascript", "java", "typescript", "flutter", "mysql", "python"],
    movies: ["batman", "Inception", "Parasite", "Interstellar", "spiderman", "avengers", "avatar"],
    people: ["putin", "ilias", "khalid", "ali", "ayoub", "ahmed", "ismail"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar", "Morocco", "Spain"]
}
let wordKeys = Object.keys(words);
let randomCategory = Math.floor(Math.random() * wordKeys.length);
//category
let category = wordKeys[randomCategory];

let randomAnswer = Math.floor(Math.random() * words[category].length)
let answer = words[category][randomAnswer].toUpperCase();

document.querySelector(".container .info > h1 .category").innerHTML = category



let letterGuess = document.querySelector(".letters-guess");
letterGuess.innerHTML = `<span class = "letter_box">${answer[0]}</span>`

const letterBoxes = document.querySelectorAll(".letters .letter_box");

for (i = 1; i < answer.length; i++) {
    letterGuess.innerHTML += `<span style = "width: 60px;
    height: 60px; border-bottom: 3px solid #333"></span>`
}

function reset() {
    letterGuess.children[0].innerHTML = `<span class = "letter_box">${answer[0]}</span>`;
    for (i = 1; i < answer.length; i++) {
        letterGuess.children[i].classList.remove("letter_box")
        letterGuess.children[i].innerHTML = "";
        letterGuess.children[i].style = "width: 60px; height: 60px; border-bottom: 3px solid #333"

    }

}

let stand = document.querySelector(".container .game .stand")
let bar = document.querySelector(".container .game .bar")
let rope = document.querySelector(".container .game .rope")
let head = document.querySelector(".container .game .man .head")
let hands = document.querySelector(".container .game .man .hands")
let foot = document.querySelector(".container .game .man .foot")

let hang_elements = [stand, bar, rope, head, hands, foot]

let count = 1;
let attempts = 0;
let user_answer = [words[category][randomAnswer][0].toUpperCase()];
for (let i = 0; i < letterBoxes.length; i++) {
        letterBoxes[i].addEventListener("click", function (e) {
            if (count < answer.length) {
            letterGuess.children[count].innerHTML = e.target.innerHTML.toUpperCase();
            letterGuess.children[count].className = "letter_box"
            letterGuess.children[count].style = ""
            user_answer[count] = e.target.textContent.toUpperCase();
            count += 1;
            if (count == answer.length) {
                if (user_answer.join("") == answer) {
                    setTimeout(() => {
                        alert("Yaaay, you got it right");
                        window.location.reload();
                    },1000)
                }
                else {
                    if (attempts < 6) {
                        hang_elements[attempts].style.visibility = "visible";
                        attempts += 1;
                        if (attempts == 6) {
                            alert("You died idiot!")
                            window.location.reload();
                        }
                    }
                    reset();
                    count = 1;
                    user_answer = [words[category][randomAnswer][0].toUpperCase()];;
                }
            }
        }
    
        });
    
}
let LettersBoxes_Guess = letterGuess.children;
for (let j = 0; j < LettersBoxes_Guess.length; j++) {
    LettersBoxes_Guess[j].addEventListener("click", (e) => {
        if (j != 0) {
            e.target.classList.remove("letter_box")
            e.target.innerHTML = ""
            e.target.style = "width: 60px; height: 60px; border-bottom: 3px solid #333"

            count = j;
        }
    })
}
