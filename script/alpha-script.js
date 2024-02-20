// add audio sound for press right key and wrong key 

const audio = new Audio();

let isGamePlayOn = false;


function handleKeyboardButtonPress(event) {
    if (isGamePlayOn === false) return;

    const playerPressedKey = event.key;

    console.log("Pressed Key", playerPressedKey)

    // stop the game if pressed Esc
    if (playerPressedKey === 'Escape') {
        alert("Are You leave the game")
        gameOver();

    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const targetAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = targetAlphabet.toLocaleLowerCase();

    //check match or not
    if (playerPressedKey === expectedAlphabet) {

        audio.src = '../audio/success.mp3';
        audio.play()

        // update score 
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // ----------------
        // method 2
        // // 1. get current score 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)
        // console.log(currentScore);

        // // 2. increase the score 
        // const newScore = currentScore + 1;

        // // 3. show the update score 
        // currentScoreElement.innerText = newScore;


        // start new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else {
        // if (isGamePlayOn === true) return;

        audio.src = '../audio/wrong.mp3';
        audio.play()

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }

        // method 2
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;

        // currentLifeElement.innerText = newLife
    }
}

// capture keyboard key press detect
document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame() {
    // get generate random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('random alphabet', alphabet)

    // set randomly generated alphabet to the screen
    let currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerHTML = alphabet;

    // set background color 
    setBackgroundColorById(alphabet);
}


function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    isGamePlayOn = true;

    continueGame()
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    //update final score
    const lastScore = getTextElementValueById('current-score');
    // console.log(lastScore);
    
    setTextElementValueById('last-score', lastScore);
    
    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}

