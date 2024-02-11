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
text(`Let's see how good is your Chinese pronounciation`, width/2, height/2);
  
}

function handleSpeechInput() {
    if (!speechRecognizer.resultValue) {
        return;
    }
    console.log(speechRecognizer.resultString);

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
}  

/*const speechRecognizer = new p5.SpeechRecognizer(`zh-CN`);
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

}*/