$(function(){
    const fruitsList = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'pineapple', 'watermelon'];
    const buttonStartGame = $("#start-game");
    const scoreValue = $("#scoreValue");
    const scoreValueGameOver = $("#score-game-over-value");
    const valueLifeElement = $("#valueLife");
    const fruitsContainer = $("#fruits-container");
    const gameOverModal = $("#modal-game-over");
    const imgFruit = $("#fruit");
    let playing = false;
    let score;
    let trialsLeft; 
    let step;
    let action;

    const startGame = function() {
        //If playing
        if (playing == true) {
            location.reload(); 
        } else {  
        //Not playing
            playing = true;
            score = 0;
            scoreValue.html(score);

            //Add heart icons
            trialsLeft = 3;
            addHearts();

            // Change button text 
            buttonStartGame.html("Reset game");
            startSendingFruits();
        }
    }

    imgFruit.mouseover(function(){
        score ++;
        scoreValue.html(score);
        // Stop fruit going down
        clearInterval(action);
        imgFruit.hide( "explode", 500);
        setTimeout(startSendingFruits, 500);
    });

    const addHearts = function() {
        valueLifeElement.empty();
        for (i=0; i<trialsLeft; i++) {
            valueLifeElement.append("<img src='img/heart.png' class='heart'>");
        }
    }

    const chooseFruit = function() {
        imgFruit.attr('src', 'img/' + fruitsList[Math.round(9 * Math.random())] + '.png');
    }

    const stopAction = function() {
        clearInterval(action);
        imgFruit.hide();
    }

    const startSendingFruits = function() {
        imgFruit.show();
        chooseFruit();
        imgFruit.css({
            'left' : Math.round(90 * Math.random()) + '%',
            'top' : -100
        })
        // Generate a random step
        step = 1 + Math.round(5 * Math.random());
        action = setInterval(function() {
            imgFruit.css('top', imgFruit.position().top + step);
            // Check if the fruit is too low
            if (imgFruit.position().top > fruitsContainer.height()) {
                if (trialsLeft > 1) {
                    imgFruit.show();
                    chooseFruit();
                    imgFruit.css({
                        'left' : Math.round(90 * Math.random()) + '%',
                        'top' : -100
                    })
                    // Generate a random step
                    step = 1 + Math.round(5 * Math.random());
                    trialsLeft --;
                    addHearts();
                } else {
                    // Game over
                    playing = false;
                    valueLifeElement.html("You lose");
                    buttonStartGame.html("Start game")
                    gameOverModal.show();
                    scoreValueGameOver.html(score);
                    stopAction();
                }
            }
        }, 10);
    }
    const hideModal = function() {
        gameOverModal.hide();
    }

    /* Button click */
    buttonStartGame.click(startGame);
    gameOverModal.click(hideModal);
});