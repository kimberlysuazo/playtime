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
        if (Game) {
            console.log("game is live")
        }
        // play corresponding sound
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
        CurrentNotes = []
        $('body').append('<p>Your Current Notes Are: </p>')
        $('body').append($('.notes').splice(Turn*3,Turn*3+3))
        CurrentNotes.concat($('.notes').splice(Turn*3,Turn*3+3))
        // debugger;
    }

    function playNextThree() {
        let thirdNote = Turn*3 + 3;
        for (let i = Turn*3; i < thirdNote; i++) {
            // play corresponding sound
        }
        playRandomNote()
    }

});
