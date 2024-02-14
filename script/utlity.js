function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

// characters bg color add
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-yellow-600");
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-yellow-600');
}

function getARandomAlphabet() {
    // create an alphabet array
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'f', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // create random index generator between 0 - 25;
    const randomNumber = Math.random() * 25;
    const randomIndex = Math.round(randomNumber);

    const alphabet = alphabets[randomIndex];
    return alphabet;
}
// getARandomAlphabet()





