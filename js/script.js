var app = {
    init: function() {

        // je crée mon tableau de cartes
        var setOfCards = [];

        //je crée un tableau de paire pour mes comparaisons
        app.cardsToCompare = []; 

        // je crée une boucle qui va générer mes cartes
        for (var nb = 0; nb < 28; nb++) {
            var card = $('<div class="carte cache"></div>');
            setOfCards.push(card);
        }

        // Je crée ma variable qui gère le score
        app.foundPairs = 0;

        //Je récupère mon élément qui affiche le score
        app.score = $('h3');
        

        // J'assigne mes images de background à mes cartes
        var y = 0;
        $(setOfCards).each(function() {
            $(this).css({"background-position-y": "-" + y + "px"});
            y += 100;
            if (y > 1300) {
                y = 0;
            } 
        });

        // Je mélange mon tableau de cartes
        app.shuffle(setOfCards);

        // J'ajoute mon jeu de cartes au plateau
        $('#plateau').append(setOfCards);

        
        $('.cache').on('click', app.showCard);

        
        $('#progress').animate({
             'width': '100%'
        
         }, 60000, app.gameLost);
        
        
    },

    showCard: function(evt) {
        var card = evt.currentTarget;

        // je vérifie que ma carte n'a pas déjà été retournée
        if ($(card).hasClass('cache') == true) {
            $(card).removeClass('cache').addClass('image');
        app.cardsToCompare.push(card);
        

        if (app.cardsToCompare.length == 2) {
            $('.cache').off('click');
            app.isPaire(app.cardsToCompare);
            
            }
        }
        
        
        console.log(app.cardsToCompare.length)
    },

    shuffle: function(array) {
        var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
    },

    //Fonction qui va gérer s'il s'agit de paire ou non
    isPaire: function(array) {
        
        if (array[0].outerHTML == array[1].outerHTML) {
            alert('Bravo');
            app.cardsToCompare = [];
            app.foundPairs++;
            app.score.text('Nombre de paires trouvées: ' + app.foundPairs);
            if (app.foundPairs == 14) {
                alert('Vous avez gagné !!!!');
                app.newGame();
            }
            $('.cache').on('click', app.showCard);
            
        } else {
            window.setTimeout(app.hideCards, 1000);
            
        }
    }, 

    //Fonction qui se charge de recacher les cartes
    hideCards: function() {
        console.log('salut');
        $(app.cardsToCompare).each(function() {
            $(this).removeClass('image').addClass('cache');
        });
        app.cardsToCompare = [];
        $('.cache').on('click', app.showCard);
    },

    gameLost: function() {
        alert('Vous avez perdu, vous êtes nul');
        app.newGame();
    },

    newGame: function() {
        
        var newGame = confirm('Voulez vous rejouer ?');

        if (newGame === true) {
            location.reload();
        } else {
            alert('Tanpis !');
            $('.carte').off('click');
        }
    }


};

document.addEventListener('DOMContentLoaded', app.init);