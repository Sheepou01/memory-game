var app = {
    init: function() {

        // je crée mon tableau de cartes
        var setOfCards = [];

        // je crée une boucle qui va générer mes cartes
        for (var nb = 0; nb < 28; nb++) {
            var card = $('<div class="carte cache"></div>');
            setOfCards.push(card);
        }

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

        $('.carte').on('click', app.showCard);
    },

    showCard: function(evt) {
        var card = evt.currentTarget;
        
        $(card).removeClass('cache').addClass('image');

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
    }
};

document.addEventListener('DOMContentLoaded', app.init);