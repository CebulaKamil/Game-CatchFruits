$(function(){

    const buttonStartGame = $("#start-game");
    const scoreValue = $("#scoreValue");
    const valueLifeElement = $("#valueLife");
    const fruitsContainer = $("#fruits-container");
    const imgFruit = $("#fruit");
    const fruitsList = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'pineapple', 'watermelon'];
    let playing = false;
    let score;
    let valueLife; 

    const startGame = function() {
        //If playing
        if (playing == true) {
            location.reload(); 
        } else {  //Not playing
            console.log(":)");
            playing == true;
            score = 0;
            scoreValue.html(score);

            //Add heart icons
            valueLife = 3;
            addHearts();

            //Change button text 
            buttonStartGame.html("Reset game");

            //Start sending fruits (start action)
            startSendingFruits();
        }
    }

    const addHearts = function() {
        for (i=0; i<valueLife; i++) {
            valueLifeElement.append("<img class='heart' src='img/heart.png'>");
        }
    };


    const chooseFruit = function() {
        imgFruit.attr('src', 'img/' + fruitsList[Math.round(9 * Math.random())] + '.png');
    }

    const startSendingFruits = function() {
        imgFruit.show();
        imgFruit.css({'left' : 300, 'top' : -50});

        //Choose a random fruit
        chooseFruit();
    }

    /* Button click */
    buttonStartGame.click(startGame);
});