$( document ).ready(function() {
    var Correct = 0
    var GameStarted = false
    var Incorrect = 0
    var Level = 0

    // when top bar of notes are clicked
    $('.notes').on('click', function(event) {
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
        playNextThree()
        debugger;
    })

    function playNextThree() {
        let thirdNote = Level*3 + 3;
        for (let i = Level*3; i < thirdNote; i++) {
            window.setTimeout(console.log(`play note #${i}`), 1000)
        }
    }

});
