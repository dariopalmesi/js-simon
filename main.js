// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.





// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.
// Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"


// creare un arradi 5 numeri
let numbersRandom = [20,45,4,88,10]

let numbersUser = [];

const divEl = document.getElementById('num')
divEl.innerHTML = numbersRandom


const divEl_2 = document.getElementById('input')



setTimeout(countdown, 5000);

function countdown() {
    divEl.style.display = 'none'
    divEl_2.classList.remove('d-none')
}

function numbercomparison(random, user) {
    for (let i = 0; i < random.length; i++) {
        addnumber.includes(user[i])
        if (addnumber === random) {
            
            
        }
        
    }
    
}