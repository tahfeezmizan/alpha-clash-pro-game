
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}


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




