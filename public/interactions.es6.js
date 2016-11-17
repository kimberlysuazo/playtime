var Correct = 0
var GameStarted = false
var Incorrect = 0
var Turn = 0
var notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
var guessedNote
var randomNote
var correctGuess = false 
var currNotes 


function displaySelectedNotes() {
    $('#selected-notes').append('<p>Your Current Notes Are: </p>')
    currNotes = $('.notes').clone().splice(Turn*3,3)
    $(currNotes).addClass('current')
    $('#selected-notes').append(currNotes)
    // debugger;
    let thirdNote = Turn*3 + 3;
    var notesToPlay = []
    for (let i = Turn*3; i < thirdNote; i++) {
      notesToPlay.push(notes[i])
    }

    return notesToPlay;
}


function playRandomNote(notes, timing) {
    var piano = Synth.createInstrument('piano')
    console.log(notes)
    selectedSound = notes[Math.floor(Math.random()*notes.length)]
    setTimeout(function(){
      piano.play(selectedSound, 4, 4)
    }, timing)
    randomNote = selectedSound;
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

function gameLogic() {
    $('body').on('click', '.current', function(event) {
        guessedNote = $(event.target).parent().attr('id')

        if ((randomNote === guessedNote) && Turn < 4) {
            setTimeout(function(){
                alert("Correct! Get ready to hear your next note")}, 1000)
            Correct += 1
            playRandomNote(notesToPlay, 4000)
        } else {
            Incorrect += 1
            setTimeout(function(){ 
                alert("Oops... wrong guess")}, 1000)
        }

        if (Correct === 1) {
            Turn += 1 
            $("#selected-notes").empty()
            notesToPlay = displaySelectedNotes();
            setTimeout(function(){playSound(notesToPlay)}, 2000)
            setTimeout(function(){playRandomNote(notesToPlay, 6000)})
            Correct = 0
        }

        if (Turn > 3) {
            alert("Hooray! you're done and now have perfect pitch")
            $("#selected-notes").empty()
            $('#start-game').css({display: "block"})
        }


    })
          
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
    console.log("before craziness", Correct)
    $('#start-game').on('click', function () {
        $(this).css({display: "none"})
        GameStarted = true
        notesToPlay = displaySelectedNotes();
        playSound(notesToPlay)
        playRandomNote(notesToPlay, 4000)
        gameLogic();
        
    })
        
});





   


