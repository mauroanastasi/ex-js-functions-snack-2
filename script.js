// snack 1
console.log(somma(2, 3))

function somma(a, b) {
    return a + b
}

// -------------------------------------------

const anotherSomma = function (c, d) {
    return c + d
}

console.log(anotherSomma(6, 6))

// -------------------------------------------

const sum = (c, d) => {
    return c + d
}

console.log(sum(4, 4))

// snack 2

const quadrato = (n) => n * n

console.log(quadrato(5))

// snack 3
function piu(j, h) {
    return j + h
}

function eseguiOperazione(n, m, operazione) {
    return operazione(n, m)
}

console.log(eseguiOperazione(4, 5, piu))

// oppure

const somma = (n, m) => n + m;

const eseguiOperazione = (n, m, operazione) => operazione(n, m)


console.log(eseguiOperazione(4, 5, somma));

// snack 4