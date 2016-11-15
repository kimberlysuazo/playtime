function playSound(noteAry) {

    var conductor = new BandJS()
    conductor.setTimeSignature(4,4)
    conductor.setTempo(120)
    var piano = conductor.createInstrument()

    noteAry.forEach((note) => {
        piano.note('whole', note)
    })

    var player = conductor.finish()
    player.play()
}

$( document ).ready(function() {
    var Correct = 0
    var GameStarted = false
    var Incorrect = 0
    var Turn = 0
    var notes = ['A4', 'A#4', 'B4', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4']

    // when top bar of notes are clicked
    $('body').on('click', '.notes', function(event) {
        console.log("sup sup")
        if (GameStarted) {
            console.log("game is live")
        }
        let note = $(event.target).parent().attr('id')
        playSound([note])
    })

    // when Start Game is clicked
    $('#start-game').on('click', function () {
        $(this).remove()
        $('body').append('<p>Correct: '+Correct+'</p>')
        $('body').append('<p>Incorrect: '+Incorrect+'</p>')
        GameStarted = true
        displaySelectedNotes()
        playNextThree()
    })

    function displaySelectedNotes() {
        console.log(Turn)
        $('body').append('<p>Your Current Notes Are: </p>')
        $('body').append($('.notes').clone().splice(Turn*3,Turn*3+3))
        // debugger;
    }

    function playNextThree() {
        let thirdNote = Turn*3 + 3;
        var notesToPlay = []
        for (let i = Turn*3; i < thirdNote; i++) {
            notesToPlay.push(notes[i])
        }
        playSound(notesToPlay)
    }

});
