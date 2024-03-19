let osc;
let lfo;

function setup() {
  createCanvas(400, 400);
 
 
  osc = new Tone.Synth({
    oscillator: {
      type: 'sine'
    },
    envelope: {
      attack: 0.01,
      decay: 0.2,
      sustain: 0.5,
      release: 0.1
    }
  }).toDestination();
 
  // Initialize the LFO and connect it to the oscillator's frequency
  lfo = new Tone.LFO({
    frequency: 2,  
    min: 50,      
    max: 70000        
  });
  lfo.connect(osc.oscillator.frequency);
  lfo.start();
}

function preload() {
  laser = loadImage('Assets/LaserTag.jpg');
}

function draw() {
  if (mouseIsPressed) {
    background(laser);
    playLaserSound();
  } else {
    background(240);
    text('Press left click for LaserTag', 150, height / 3);
  }
}

function playLaserSound() {
  osc.triggerAttackRelease("C4", "8n");  // Play a note with the LFO applied
}
