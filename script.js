// alert("Bienvenido/a");


/* Para la animación de máquina de escribir en el título.
Si lo quiero aplicar en otra zona, tenfo que cambiar el ID de "app" por alguna otra cosa. */

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});
// reconoces una acción porque tiene paréntesis después del nombre de la acción, a veces tiene el operador punto typewriter
typewriter
    .pauseFor(2500) // milisegundos 2.5 segundos
    .typeString('Karla Muñoz')
    .pauseFor(300)
    .deleteAll()
    .typeString('Estudiante')
    .pauseFor(1000)
    .start();


let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
    loop: true,
    delay: 75,
});
// reconoces una acción porque tiene paréntesis después del nombre de la acción, a veces tiene el operador punto typewriter
typewriterFrase
    .pauseFor(2500) // milisegundos 2.5 segundos
    .typeString('"No dejes que los demás te impidan crecer"')
    .pauseFor(300)
    .deleteAll()
    .start();


// PARA PONER MÚSICA
let audioElement; // Variable para almacenar el objeto Audio
const mainElement = document.querySelector('main'); // Seleccionar la etiqueta <main>
mainElement.addEventListener('click', function () {
    if (!audioElement) {
        audioElement = new Audio('assets/theme-of-laura.mp3');
        audioElement.volume = 0.1;
    }
    audioElement.play();
});
const pauseButton = document.getElementById('pauseButton');

pauseButton.addEventListener('click', function () {
    if (audioElement.paused) {
        audioElement.play();
        pauseButton.textContent = "Pausar";
    } else {
        audioElement.pause();
        pauseButton.textContent = "Reanudar";
    }
});


/*
async function copiarAlPortapapeles(texto) {
    try {
        await navigator.clipboard.writeText(texto);
        console.log('Texto copiado al portapapeles:', texto);
    } catch (err) {
        console.error('Error al copiar:', err);
    }
}
*/

// Copiar al portapapeles.
async function copiarAlPortapapeles(texto) {
    try {
        await navigator.clipboard.writeText(texto);
        alert('Texto copiado al portapeles.');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}