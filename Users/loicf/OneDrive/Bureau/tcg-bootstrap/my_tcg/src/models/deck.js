
export default class Deck {
   
    constructor(config) {
     this.cards = config.cards;
     console.log(config);
    }

    shuffle() {
        return true;
    }

    draw() {
        let drawCard = this.cards.shift();
        
        return drawCard;
    }

    getCardsCount() {
        return this.cards.lenght;
    }

    insertAt(position, card) {
        this.deck.splice(position[0], 1, card);
    }
}

