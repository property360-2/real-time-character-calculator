const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');


textInput.addEventListener('input', (text) => {
    const textLength = textInput.value.length;
    charCount.textContent = `Character count: ${textLength}/50`;
}); 

textInput.addEventListener('input', (text) => {
    const textLength = textInput.value.length;
    charCount.textContent = `Character count: ${textLength}/50`;
    limitCharacter(textLength);
}); 

function limitCharacter(characterLength) {
    if(characterLength >= 50) {
        textInput.value = textInput.value.substring(0, 50);
        charCount.textContent = `Character count: 50/50`;
        charCount.style.color = 'red';
        textInput.removeEventListener('input', limitCharacter);
    }
}