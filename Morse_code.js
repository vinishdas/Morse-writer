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
     
    var buttonClickSound = document.getElementById('buttonClickSound');
    if (buttonClickSound) {
        buttonClickSound.currentTime = 0;  
        buttonClickSound.playbackRate = 1;
        buttonClickSound.play();
    }
}
function playSound2(){
    var buttonClickSound = document.getElementById('buttonClickSound2');
    if (buttonClickSound) {
        buttonClickSound.currentTime = 0;  
        buttonClickSound.playbackRate = 0.5;
        buttonClickSound.play();
    }
}

function displayMorse(morseArray, index) {
    if (index < morseArray.length) {
        OutputText.value += morseArray[index];
    if(morseArray[index]==='.'){
        playSound();

    }
    else{
        playSound2();
    }
        setTimeout(function() {
            displayMorse(morseArray, index + 1);
        }, 250);
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
 