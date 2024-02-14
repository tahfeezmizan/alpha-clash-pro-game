
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
        console.log('Get a point')
    }
    else{
        console.log('You lost a life')
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


