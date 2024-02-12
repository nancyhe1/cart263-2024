/**
 * Voice Jam
 * Nancy He
 * 
 *Creating a pronounciating game with Mandarin to show the different tones.
 */

"use strict";
//the speech recognizer in mandarin
const speechRecognizer = new p5.SpeechRec(`zh-CN`);
//the speech synthesizer
const speechSynthesizer = new p5.Speech();
//an array of words to pronounce
const MandarinText = [
    "去",
    "日",
    "四十",
    "水",
]; 
let currentAnswer = `Let's see how good is your Chinese pronounciation! Click to begin!`;
let currentCharacter = ``;


function setup() {
    createCanvas(windowWidth, windowHeight);
    //make it listen continuously
    speechRecognizer.continuous = true;
    //tell it the function to call on result
    speechRecognizer.onResult = handleSpeechInput;
    //start it
    speechRecognizer.start();

    //text default
    textSize(30);
    textStyle(BOLD);
    textAlign(CENTER);
}

function draw() {
background(240, 207, 255);

displayAnswer();

/*textSize(30);
textAlign(CENTER,CENTER);
text(`Let's see how good is your Chinese pronounciation`, width/2, height/2);
 */ 
}

function displayAnswer() {
    if (currentAnswer === currentCharacter) {
        fill(0,255,0);
    }
    else {
        fill(255,0,0);
    }
    text(currentAnswer, width/2, height/2);
}

function handleSpeechInput() {
    if (!speechRecognizer.resultValue) {
        return;
    }
    console.log(speechRecognizer.resultString);

}
function nextQuestion() {
    currentAnswer = ``;
    currentCharacter = random(MandarinText);
}

function mousePressed() {
    nextQuestion();
}

/*let state = `title`; // can be title, simulation


function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {

    if (state === 'title') {
        title();
      }
      else if (state === 'simulation') {
        simulation();
      }

}

function title() {
    background(240, 207, 255);

    textSize(30);
    fill(255);
    textAlign(CENTER,CENTER);
    text(`Let's see how good is your Chinese pronounciation`, width/2, height/2); 
}

function simulation() {
    background(0);
  
    textSize(64);
    textAlign(CENTER, CENTER);
    text(`hello`, width/2, height/2);
    fill(255);

}

function mousePressed() {
    if (state === 'title') {
      state = 'simulation';
    }  
}*/ 
