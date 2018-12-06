var app = {
    init: function() {

        // je crée mon tableau de cartes
        var setOfCards = [];

        // je crée une boucle qui va générer mes cartes
        for (var nb = 0; nb < 28; nb++) {
            var card = $('<div class="carte cache"></div>');
            setOfCards.push(card);
        }
        // J'ajoute mon jeu de cartes au plateau
        $('#plateau').append(setOfCards);

        $('.carte').on('click', app.showCard);
    },

    showCard: function(evt) {
        var card = evt.currentTarget;
        
        $(card).removeClass('cache').addClass('image');

    }
};

document.addEventListener('DOMContentLoaded', app.init);