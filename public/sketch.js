// function test() {
//  console.log("what's up");
// }
//
// test();
//

var notes = [69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];

// For automatically playing the song
var index = 0;
var playback = [];
var justPlayedSound = false;
var playedNote = "blah";

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
// function mousePressed() {
//   // Map mouse to the key index
//   playNote(59, 500);
// }

// Fade it out when we release
function mouseReleased() {
  osc.fade(0,0.5);
}

$( document ).ready(function() {
    var Correct = 0
    var GameStarted = false
    var Incorrect = 0
    var Turn = 0
    var CurrentNotes = []


    // when top bar of notes are clicked
    $('body').on('click', '.notes', function(event) {
        console.log("sup sup")
        let note = $(event.target).text().trim()
        if (GameStarted) {
            console.log("game is live")
        }
        // debugger;
        if (justPlayedSound) {

        }
        playNote(70, 500)
    })

    // when Start Game is clicked
    $('#start-game').on('click', function () {
        $(this).remove()
        $('body').append('<p>Correct: '+Correct+'</p>')
        $('body').append('<p>Incorrect: '+Incorrect+'</p>')
        GameStarted = true
        // displaySelectedNotes()
        // playNextThree()
        playRandomNote()
    })

    function playRandomNote() {
        let playedNoteLocal = [69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80][Math.floor(Math.random()*12)]
        playedNote = playedNoteLocal
        playNote(playedNoteLocal, 600)
        justPlayedSound = true
    }

    function displaySelectedNotes() {
        console.log(Turn)
        CurrentNotes = []
        $('body').append('<p>Your Current Notes Are: </p>')
        $('body').append($('.notes').slice(Turn*3,Turn*3+3).clone())
        $('body').append(CurrentNotes)
        // debugger;
    }

    function playNextThree() {
        // let thirdNote = Turn*3 + 3;
        let first = Turn*3
        let deezNotes = [69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
        playNote(deezNotes[first], 600)
        playNote(deezNotes[first+1], 600)
        playNote(deezNotes[first+2], 600)

    }

});
