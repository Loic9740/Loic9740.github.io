import Deck from "../src/models/deck";

let deck;
let myCards = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];
const crd = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];



describe('Deck', () => {
    beforeEach(() => {
        deck = new Deck({
            cards: myCards
        });
    })

    describe('appel la methode melanger(shuffle())', () => {
        it('ça doit melanger le deck', () => {
            expect(deck.shuffle()).toBe(true);
        });
    });


    describe('appel la methode melanger(draw())', () => {
        it('ça doit piocher dans le deck', () => {
            expect(deck.draw()).toBe(crd[0]);
        });
    });

    
    describe('appel la methode melanger(getCardsCount())', () => {
        it('Retourne le nombre de cartes actuellement dans le deck.', () => {
            expect(deck.getCardsCount()).toBe(deck[crd]);
        });
    });
    

    describe('appel la methode melanger(insertAt())', () => {
        it('ça doit rajouter une carte au deck', () => {
            expect(deck.insertAt()).toBe();
        });
    });

});

