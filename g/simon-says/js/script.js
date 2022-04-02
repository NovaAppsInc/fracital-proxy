// Welcome page
var mainBoard = function(play) {
    if(play === true) {
        $('main').children().remove();
        simonBoard.play = false;
    }
    // Simon.playSound(7);
    var intro =  `
        <div>
            <h2 class='header'> SIMON</h2>
            <h3> DO WHAT SIMON SAYS</h3>
            <h4>FOLLOW THE LIGHTS AND NEW PATTERNS ON EACH ROUND AS LONG AS YOU CAN..</h4>
            <form>

            <div class='mode'>
                <h5 id='easy' onclick="Simon.playSound(6); modeAssign('easy')">Easy</h5>
                <h5 id='medium' onclick="Simon.playSound(6); modeAssign('medium')">Medium</h5>
                <h5 id='nightmare' onclick="Simon.playSound(6); modeAssign('nightmare')">Nightmare</h5>
            </div>
            <h2 id="play" onclick = "simonBoard();"> Play</h2>
        </div>`;


    $('main').append(intro);
    hideButton();
};

// To hide buttons other than selected
var hideButton = function() {
    $('#easy').on('click', function(){
        $('#easy').css('background', '#bbdefb');
        $('#medium').hide();
        $('#nightmare').hide();
        // $('#spin').removeClass('spinSimon');
        // $('#spin').addClass('container');
    });

    $('#medium').on('click', function(){
        $('#medium').css('background', '#bbdefb');
        $('#easy').hide();
        $('#nightmare').hide();
        // $('#spin').removeClass('spinSimon');
        // $('#spin').addClass('container');
    });

    $('#nightmare').on('click', function(){
        $('#nightmare').css('background', '#bbdefb');
        $('#medium').hide();
        $('#easy').hide();

    });
}

var modeAssign = function(s) {
    mode = s;
};

// Game board
var simonBoard = function() {
    var play = true;
    $('main').children().remove();
    var simonB = `<section id="spin" class="container">
                    <div class='box yellow ' data-tile='1' id='yellow'></div>
                    <div class='box red' data-tile='2' id='red'></div>
                    <div class='box blue' data-tile='3' id='blue'></div>
                    <div class='box green' data-tile='4' id='green'></div>
                    <div class='center'>
                        <h1>SIMON</h1>
                    </div>
                  </section>
                  <section class="board">
                    <div class="score">
                        <div id='quit' class ="quit" onclick = "Simon.playSound(5); mainBoard(${play});">quit</div>
                    </div>
                    <div class="score">
                        <div class='level'></div>
                        <div class="highscore"> </div>
                    </div>
                  </section>`;
    $('main').append(simonB);
    Simon.startGame();
};

// Game Over page
var endMessage = function(score) {
    $('main').children().hide();
    var endMsg = `<div id='end'>
                    <h2 class="header"> Game Over</h2>
                    <h3>Congratulations!!</h3>
                    <div class="endMsg">
                        <h4>Your Score : ${(Simon.round - 1)}</h4>
                        <h4>High Score : ${Simon.score} </h4>
                    </div>
                    <h2 id="end1" onclick = "show(${score});">RePlay</h2>
                  </div>`;
    $('main').append(endMsg);
};

// To get the value of highscore from gameover page to game page
var show = function(score) {
    Simon.sequence = [];
    Simon.round = 0;
    Simon.score = score;
    Simon.copy = [];
    $('#end').remove();
    $('main').children().show();
    Simon.newRound();
};

// Main game
var Simon = {
    sequence: [],
    copy: [],
    round: 0,
    active: true,
    score: 0,
    speed: 1000,
    multiplier: 1,

    startGame: function() {
        this.sequence = [];
        this.copy = [];
        this.round = 0;
        this.active = true;
        this.modeAssign();
        this.newRound();
    },
    // Based on player selection the difficuly will be set
    modeAssign: function(){
        if(mode == 'easy') {
                this.speed = 1000;
                this.multiplier = 1;

            } else if (mode == 'medium') {
                this.speed = 600;
                this.multiplier = 1;
            } else if( mode == 'nightmare') {
                this.speed = 350;
                this.multiplier = 2;
                // $('#spin').removeClass('container');
                $('#spin').addClass('spinSimon');
                // $('.center').addClass('spinSimon');
        }
    },

// This function will be called for every new round of sequence
    newRound: function() {
        // console.log('somon: ' + this.round);
        console.log(mode);
        ++this.round;

        if(this.round >= 1) {
            this.sequence=[];
        }

        if(this.score < this.round){
            this.score = this.round - 1;
            $('.highscore').html('High Score : ' + this.score);
        }
        else {
            $('.highscore').html('High Score : ' + this.score);
        }

        $('.level').html('Count : ' + (this.round - 1) );
        var mul = this.round * this.multiplier;

        for(i = 0; i < mul; i++){
            this.sequence.push(this.randomNumber());
            this.copy = this.sequence.slice(0);
        }
        this.animate(this.sequence);
    },

// This function checks player sequence is correct or not
    checkSeq: function(e) {
        var desiredResponse = this.copy.shift();
        var playerResponse = $(e.target).data('tile');
        this.active = (desiredResponse === playerResponse);
        if (this.copy.length === 0 && this.active) {
            this.deactivate();
            this.newRound();
        } else if (!this.active) { // user lost
            this.deactivate();
            this.endGame();
        }
    },
// This function is called when player enters wrong sequence
// It will call the end page
    endGame: function() {
        this.playSound(5);
        endMessage(this.score);
    },

// This function enables the player input
    activate: function() {
        var that = this;
        $('.container')
            .on('click', '[data-tile]', function(e) {
                that.checkSeq(e);
            })

            .on('mousedown', '[data-tile]', function(){
                var col = $(this).attr('data-tile');
                that.lightUp(col);
                that.playSound($(this).data('tile'));
            });
    },
// this ddeactivates the player input while aomputer playing the sequence
    deactivate: function() {
        $('.container')
            .off('click', '[data-tile]')
            .off('mousedown', '[data-tile]')
            .off('mouseup', '[data-tile]');
    },

    animate: function(sequence) {
        var i = 0;
        var that = this;
        var interval = setInterval(function() {
            that.playSound(sequence[i]);
            that.lightUp(sequence[i]);
            i++;
            if (i >= sequence.length) {
                clearInterval(interval);
                that.activate();
            }
        }, (this.speed + 200));
    },
// lightup the simon board by changing opacity from 0.7 to 1 and back to 0.7
// after this.speed amount of time
    lightUp: function(tile) {
        // if (this.mode !== 'sound-only') {
            var $tile = $('[data-tile=' + tile + ']').addClass('light');
            window.setTimeout(function() {
                $tile.removeClass('light');
            }, this.speed);
        // }
    },

    playSound: function(num) {
        if (this.mode !== 'light-only') {
            var link;
            switch (num) {
                case 1:
                    link = 'audio/simonSound1.mp3';
                    break;
                case 2:
                    link = 'audio/simonSound2.mp3';
                    break;
                case 3:
                    link = 'audio/simonSound3.mp3';
                    break;
                case 4:
                    link = 'audio/simonSound4.mp3';
                    break;
                case 5:
                    link = 'audio/simonEnd.wav';
                    break;
                case 6:
                    link = 'audio/click.wav';
                    break;
                case 7:
                    link = 'audio/simonStart.mp3';
                    break;
            }
            var audio = new Audio(link);
            audio.play();
        }
    },

    randomNumber: function() {
            return Math.floor((Math.random()*4)+1);
    }
};

var mode = 'easy';

window.onload = function() {
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
mainBoard(false);
};
