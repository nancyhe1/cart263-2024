/**
 * Voice Jam
 * Nancy He
 * 
 *Creating a pronounciating game with Mandarin to show the different tones.
 */

"use strict";

let state = `title`; // can be title, simulation

const speechRecognizer = new p5.SpeechRec(`zh-CN`);
const speechSynthesizer = new p5.Speech();
const displayTextMandarin = `你好`;
const displayTextPhonetics = `nǐ hǎo`;

function setup() {
    createCanvas(500, 500);

    speechRecognizer.onResult = handleSpeechInput;
    speechRecognizer.continuous = true;
    speechRecognizer.start();
}

function draw() {

    if (state === 'title') {
        title();
      }
      else if (state === 'simulation') {
        simulation();
      }
  
}

function handleSpeechInput() {
    if (!speechRecognizer.resultValue) {
        return;
    }
    console.log(speechRecognizer.resultString);

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
  fill(255);
  
  push();
  if (speechRecognizer.resultString === `你好`) {
    fill(50, 255, 50);
  }
  text(displayTextMandarin, width/2, height/3);
  pop();
  
  text(displayTextPhonetics, width/2, 2 * height/3);
}

/* const speechRecognizer = new p5.SpeechRecognizer(`zh-CN`);
const speechSynthesizer = new p5.Speech();
const MandarinText = [
    "去",
    "日",
    "四十",
    "水",
]; 
let currentAnswer = ``;



function setup() {
    createCanvas(windowWidth, windowHeight);

    speechRecognizer.onResult = handleSpeechInput;
    speechRecognizer.continuous = true;
    speechRecognizer.start();
}

function draw() {
background(240, 207, 255);

textSize(30);
textAlign(CENTER,CENTER);
//text(`Let's see how good is your Chinese pronounciation`, width/2, height/2);
  
}

function handleSpeechInput() {
    if (!speechRecognizer.resultValue) {
        return;
    }
    console.log(speechRecognizer.resultString);

} */