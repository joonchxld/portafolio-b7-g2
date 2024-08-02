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