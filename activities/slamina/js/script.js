/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

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

function handleSpeechInput() {
    if (!speechRecognizer.resultValue) {
        return;
    }
    console.log(speechRecognizer.resultString);

}