const inputText = document.getElementById("textInput");
const OutputText = document.getElementById("textOutput");
const morseCode = {
    'A': '.-',   'B': '-...', 'C': '-.-.', 'D': '-..',  'E': '.',
    'F': '..-.', 'G': '--.',  'H': '....', 'I': '..',   'J': '.---',
    'K': '-.-',  'L': '.-..', 'M': '--',   'N': '-.',   'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.',  'S': '...',  'T': '-',
    'U': '..-',  'V': '...-', 'W': '.--',  'X': '-..-', 'Y': '-.--',
    'Z': '--..', ' ':'  '
};

function playSound() {
     
    const sound = new Audio("C:\\Users\\USER\\OneDrive\\Documents\\VS code\\webdevelopment\\miniProject\\sound\\beep-08b.mp3");
    sound.play();
}

function displayMorse(morseArray, index) {
    if (index < morseArray.length) {
        OutputText.value += morseArray[index];
        playSound();
        setTimeout(function() {
            displayMorse(morseArray, index + 1);
        }, 500);
    }
}

function convertTextToMorse(text) {
    const morseArray = [];

    for (let char of text.toUpperCase()) {
        if (morseCode[char] !== undefined) {
            morseArray.push(morseCode[char]);
            
            morseArray.push(' '); 
        }
    }

    return morseArray.join('');
}

function convertToMorse(event) {
    if (event.key === "Enter") {
        OutputText.value = '';
        // Get the input value
        var Text = inputText.value;      
        // Convert to Morse code
        var morseCode = convertTextToMorse(Text);
        // Set the Morse code to the output text box
        displayMorse(morseCode.split(''), 0);
    }
}

inputText.addEventListener("keydown", convertToMorse);
 