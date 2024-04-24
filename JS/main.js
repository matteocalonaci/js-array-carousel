//  MILESTONE 1
// Per prima cosa, creiamo il markup statico come visto in mattinata.
// Costruiamo il container e inseriamo le immagini.
// Solo una sarà visibile grazie a una sua classe, avremo così la struttura base.
// Condite con un pò di CSS per dare stile(senza esagerare).
// Vi consiglio di rispolvere object - fit


// MILESTONE 2
// Ora dobbiamo scrivere del codice
// che al caricamento della pagina sposti la slide attiva da quella corrente alla successiva,
// non pensate al click.
// Devo recuperare un elemento specifico ? Devo recuperare più elementi ?
// Aiutandovi con la console dell'ispettore recuperate tutti gli elementi necessari.
// Scrivete poi il codice che all'avvio della pagina in automatico sposti
// la slide attiva dalla prima alla seconda.


// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva,
// Se abbiamo lavorato correttamente in milestone 2 dovrebbe bastarci poco.
// Creiamo un event listener per gestire il click sul pulsante.
// All'interno spostiamo il codice scritto in milestone 2 per far si che
//  la slide non venga cambia al caricamento della pagina, ma al nostro click sul pulsante.
// Se superate l'ultima slide si spacca tutto e non fa nulla: è un bonus.


// MILESTONE 4
// Create un ulteriore pulsante che vi permetta di fare il lavoro inverso:
//  la slide attiva invece di andare avanti torna indietro.
// Potete partire copiando il codice ma cosa dovete cambiare ?
//  In questa milestone vi assicurerete di aver davvero capito la precedente



//recupero tutte le slide e le metto in un array
let slides = document.getElementsByClassName("slide");
// console.log(slides);


// vado a dire a variavile nSliders di quanti elementi è composta
let nSlides = slides.length
// console.log(nSlides) // = 5 elemnti

// -- 2. mi appunto il suo i in una variabile
let immagineAttualmenteAttiva;

let prossimaSlide;

document.getElementById("btnNext").addEventListener("click", function () {

    // - fare un ciclo su tutte le slide

    for (i = 0; i < nSlides; i++) {

        const slide = slides[i];
        console.log(i, slide);


        // - ricerchiamo la slide con active
        if (slide.classList.contains("active")) {
            // console.log(slide.classList.contains("active"));

            // -- quando la trovo la rimuovo
            slide.classList.remove("active");

            // -- 1. mi appunto il suo i

            immagineAttualmenteAttiva = i
            console.log("Ho rimosso la classe active da:", i);
        }

    }

    // - mi sposta l'active alla i successiva
    prossimaSlide = immagineAttualmenteAttiva + 1;

    if (prossimaSlide >= nSlides) {

        prossimaSlide = 0
    }


    slides[prossimaSlide].classList.add("active");

    console.log(`Sposto la selezione da ${immagineAttualmenteAttiva} a ${prossimaSlide}`);

})

document.getElementById("btnPrev").addEventListener("click", function () {

    // - fare un ciclo su tutte le slide

    for (i = 0; i < nSlides; i++) {

        const slide = slides[i];
        console.log(i, slide);


        // - ricerchiamo la slide con active
        if (slide.classList.contains("active")) {
            // console.log(slide.classList.contains("active"));

            // -- quando la trovo la rimuovo
            slide.classList.remove("active");

            // -- 1. mi appunto il suo i

            immagineAttualmenteAttiva = i
            console.log("Ho rimosso la classe active da:", i);
        }

    }

    // - mi sposta l'active alla i precedente
    prossimaSlide = immagineAttualmenteAttiva - 1;

    if (prossimaSlide >= 0) {


    } else if (prossimaSlide = 4) {
        prossimaSlide;

    }






    slides[prossimaSlide].classList.add("active");

    console.log(`Sposto la selezione da ${immagineAttualmenteAttiva} a ${prossimaSlide}`);

})







