
function handleKeyboardButtonPress(event){
    const playerPressedKey = event.key
    console.log('payer pressed', playerPressedKey);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const targetAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = targetAlphabet.toLocaleLowerCase();
    // console.log(playerPressedKey, expectedAlphabet);


    //check match or not
    if(playerPressedKey === expectedAlphabet){
        console.log('you have pressed correctly', expectedAlphabet);

        // update score 
        // 1. get current score 
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
        console.log(currentScore);

        // 2. increase the score 
        const newScore = currentScore + 1;

        // 3. show the update score 
        currentScoreElement.innerText = newScore;

        // start new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else{
        console.log('You lost a life');
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife - 1;

        currentLifeElement.innerText = newLife
    }
}

// capture keyboard key press detect
document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame() {
    // get generate random alphabet
    const alphabet = getARandomAlphabet();
    console.log('random alphabet', alphabet)

    // set randomly generated alphabet to the screen
    let currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerHTML = alphabet;

    // set background color 
    setBackgroundColorById(alphabet);
}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}


