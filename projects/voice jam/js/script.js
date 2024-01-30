/**
 * Voice Jam
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
const speechRecognizer = new p5.SpeechRec(`zh-CN`);
const speechSynthesizer = new p5.Speech();


function setup() {
    createCanvas(500, 500);

    speechRecognizer.onResult = handleSpeechInput;
    speechRecognizer.continuous = true;
    speechRecognizer.start();
}

function draw() {

  
}

function handleSpeechInput() {
    if (!speechRecognizer.resultValue) {
        return;
    }
    console.log(speechRecognizer.resultString);

}