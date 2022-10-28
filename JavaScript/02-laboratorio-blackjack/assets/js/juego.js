let deck = [];
let tipos = ['C', 'D', 'H', 'S'];
let especiales = ['A', 'J', 'K', 'Q'];
let puntajeJugador = 0, 
    puntajeComputadora = 0;

const pedir = document.querySelector('#btnPedir');
const puntajes = document.querySelectorAll('small');

const deckRandom = () => {

    for( let i = 2; i <= 10; i++ ) {
        for( tipo of tipos ) {
            deck.push( i + tipo );
        }
    }

    for( tipo of tipos ) {
        for( esp of especiales ) {
            deck.push( esp + tipo );
        }
    }

    deck = _.shuffle( deck );
    return deck;
};

deckRandom();

const pedirCarta = () => {
    
    if( deck.length === 0 ) {
        throw 'Ya no hay más cartas en la baraja'
    }

    const carta = deck.pop();
    return carta; 
}

const valorCarta = ( carta ) => {

    let valor = carta.substring(0, carta.length - 1);

    return ( isNaN( valor ) ) ? ( valor === 'A' ) ? 11 : 10
                              : valor * 1;
}

btnPedir.addEventListener('click', () => {
    
    const carta = pedirCarta();
    puntajeJugador += valorCarta( carta );
    puntajes[1].innerText = puntajeJugador;
    console.log(puntajeJugador);

});

console.log(deck);

