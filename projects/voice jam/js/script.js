/**
 * Voice Jam
 * Nancy He
 * 
 *Creating a pronounciating game with Mandarin to show the different tones.
 */

"use strict";
const speechRecognizer = new p5.SpeechRec(`zh-CN`);
const speechSynthesizer = new p5.Speech();
const MandarinText = [
    "去",
    "日",
    "四十",
    "水",
]; 


function setup() {
    createCanvas(500, 500);

    speechRecognizer.onResult = handleSpeechInput;
    speechRecognizer.continuous = true;
    speechRecognizer.start();
}

function draw() {
background(240, 207, 255);

textSize(30);
textAlign(CENTER,CENTER);
text(`Let's see how good is your Chinese pronounciation`, width/2, height/2);
  
}

function handleSpeechInput() {
    if (!speechRecognizer.resultValue) {
        return;
    }
    console.log(speechRecognizer.resultString);

}