// function test() {
//  console.log("what's up");
// }
//
// test();
//
var notes = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71];

// For automatically playing the song
var index = 0;
var playback = [];

// function setSong() {
//   playback.push({ note: 10, duration: 100, display: "A" });
// }


var song = playback;
var trigger = 0;
var autoplay = false;
var osc;

function setup() {

  var button = createDiv("");
  button.mousePressed(function() {
    if (!autoplay) {
      index = 0;
      autoplay = true;
    }
  });

  // A triangle oscillator
  osc = new p5.TriOsc();
  // Start silent
  osc.start();
  osc.amp(0);
}

// A function to play a note
function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  // Fade it in
  osc.fade(0.5,0.2);

  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}

// When we click
function mousePressed() {
  // Map mouse to the key index
  playNote(notes[4]);
}

// Fade it out when we release
function mouseReleased() {
  osc.fade(0,0.5);
}
