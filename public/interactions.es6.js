var Correct = 0
var GameStarted = false
var Incorrect = 0
var Turn = 0
var notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
var guessedNote
var randomNote


function displaySelectedNotes() {
    console.log(Turn)
    $('body').append('<p>Your Current Notes Are: </p>')
    let currNotes = $('.notes').clone().splice(Turn*3,Turn*3+3)
    $(currNotes).addClass('current')
    $('body').append(currNotes)
    // debugger;
    let thirdNote = Turn*3 + 3;
    var notesToPlay = []
    for (let i = Turn*3; i < thirdNote; i++) {
      notesToPlay.push(notes[i])
    }
    return notesToPlay;
}


// function playGame() {
//   console.log("playgame")
//   let thirdNote = Turn*3 + 3;
//   var notesToPlay = []
//   for (let i = Turn*3; i < thirdNote; i++) {
//     notesToPlay.push(notes[i])
//   }
//   playSound(notesToPlay)
//
//   // until the game is over
//
//   // play sound and then check user guess
//   // randomNote = playRandomNote(notesToPlay)
//   return notesToPlay
// }

function playRandomNote(notes) {
    var piano = Synth.createInstrument('piano')
    console.log(notes)
    let selectedSound = notes[Math.floor(Math.random()*notes.length)]
    setTimeout(function(){
      piano.play(selectedSound, 4, 4)
    }, 5000)
    return selectedSound;
}

function playSound(noteAry) {
  var piano = Synth.createInstrument('piano');
  noteAry.forEach((note) => {
    var timeInterval = (noteAry.indexOf(note))*1000
    setTimeout(function(){
      piano.play(note, 4, 4)
    }, timeInterval)
  })
    return noteAry
}

$( document ).ready(function() {
    // when top bar of notes are clicked
    $('body').on('click', '.notes', function(event) {
        console.log("sup sup")
        if (GameStarted) {
            console.log("game is live")
        }
        let note = $(event.target).parent().attr('id')
        playSound([note])
    })

    $('#start-game').on('click', function () {
        $(this).remove()
        // $('body').append('<p>Correct: '+Correct+'</p>')
        // $('body').append('<p>Incorrect: '+Incorrect+'</p>')
        GameStarted = true
        // displaySelectedNotes()
        // playGame()
        var gamePromise = new Promise(function(resolve, reject) {
          resolve(displaySelectedNotes());
        })

        gamePromise
        .then(playSound)
        .then(playRandomNote)
        //then gameLogic --selectedSound is passed to next callback
    })




    $('body').on('click', '.current', function(event) {
        guessedNote = $(event.target).parent().attr('id')
        // marks this note as the guessed one
        if (randomNote === guessedNote) {
                alert("Correct! Get ready to hear your next note");
                randomNote = playRandomNote(notesToPlay);
                Correct += 1
            } else {
                Incorrect += 1
                alert("Oops... You have one more guess");
                playSound([randomNote])

                if (randomNote === guessedNote) {
                    alert("Correct!");
                    Correct += 1
                } else {
                    Incorrect +=1
                    randomNote = playRandomNote(notesToPlay);
                }
            }
        if (Correct === 6){
            Turn += 1
            alert("DONE!");
        }
    })

});
