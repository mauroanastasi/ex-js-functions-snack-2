// // snack 1
// console.log(somma(2, 3))

// function somma(a, b) {
//     return a + b
// }

// // -------------------------------------------

// const anotherSomma = function (c, d) {
//     return c + d
// }

// console.log(anotherSomma(6, 6))

// // -------------------------------------------

// const sum = (c, d) => {
//     return c + d
// }

// console.log(sum(4, 4))

// // snack 2

// const quadrato = (n) => n * n

// console.log(quadrato(5))

// // puoi anche fare

// const quadratoo = n ** 2
// console.log(quadratoo(5))


// // snack 3
// function piu(j, h) {
//     return j + h
// }

// function eseguiOperazione(n, m, operazione) {
//     return operazione(n, m)
// }

// console.log(eseguiOperazione(4, 5, piu))

// // oppure  

// const add = (n, m) => n + m;

// const eseguiOperazionex = (n, m, operazione) => operazione(n, m)


// console.log(eseguiOperazionex(4, 5, add));

// // snack 4

// function creaTimer(tempo) {
//     return function () {
//         setTimeout(() => {
//             console.log(`Tempo scaduto!`)
//         }, tempo)
//     }
// }

// const timer = creaTimer(1000);
// timer()

// // snack 5
// const tempo = stamp("questo messaggio verrà stampato ogni secondo")

// function stamp(message) {
//     return setInterval(() => {
//         console.log(message)
//     }, 1000)
// }

// // funzione con setTimeout che imposta il clarInterval dopo 3000ms dal suo avvio
// const stop = () => {
//     setTimeout(() => {
//         clearInterval(tempo)

//     }, 3000)
// }

// stop()

// // snack 6

// function creaContatoreAutomatico(tempo) {
//     let count = 0;
//     return function () {
//         return setInterval(() => {
//             count++;
//             console.log(count)
//         }, tempo)
//     }
// }

// // effettuando una doppia chiamata sulla funzione, riesco a eseguire anche la funzione interna anonima di creaContatoreAutomatico, così facendo posso assegnare l'id del setInterval che restituisce la funzione anonima in temp e utilizzarlo nel clearInterval per bloccare il contatore
// let temp = creaContatoreAutomatico(2000)()

// // altrimenti, senza la doppia coppia di parentesi tonde, mettendo solo quella contente il 2000, veniva effettuata solo una chiamta, la chiamata che restituiva la funzione annidata, non il suo risultato ossia il setInterval, e avrei poi dovuto effettuare la seconda chiamata assegnando il risultato a una nuova variabile
// // salvo l'id in setInterval per poi usarlo in clearInterval
// // const intervalId = temp()

// const ferma = () => {
//     setTimeout(() => {
//         clearInterval(temp)
//     }, 6000)
// }

// ferma()

// // snack 7

// let ora = eseguiEferma("questo mex è stampato a intervalli regolari", 1000, 7000)

// function eseguiEferma(messaggio, tempoAvvio, tempoStop) {
//     // assegno a clockId il setInterval così facendo salvo nella variabile il suo Id
//     const clockId = setInterval(() => {
//         console.log(messaggio)
//     }, tempoAvvio)
//     setTimeout(() => {
//         clearInterval(clockId)
//     }, tempoStop)
// }

// // snack 8

function contoAllaRovescia(n) {
    let counter = n
    let contoId = setInterval(() => {
        counter--
        console.log(counter)
        if (counter === 0) {
            console.log("Tempo scaduto!")
            clearInterval(contoId)
        }
    }, 1000)

}

contoAllaRovescia(5)