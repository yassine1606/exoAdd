// > Event Target

// ### 1. Créer un programme qui au clique d'un des éléments de la div l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !

// ### 2. Créer un programme qui au double click d'un élément son texte est en majuscule

// ### 3. Créer un programme qui au hasard choisis parmis les propriétés suivants et l'applique aux éléments quand on clique sur le button GO : 
// - border: 1px solid gold;
// - background-color: blue;
// - background-color: red;
// - border: 5px dotted gold;

// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"



let div = document.getElementById("content");
let enfant = div.children;

for (let i = 0; i < enfant.length; i++) {
    enfant[i].addEventListener('click', () => {
        console.log(enfant[i]);
    })
}

Array.from(enfant).forEach((element) => {
    element.addEventListener("dblclick", () => {
        element.innerText = element.innerText.toUpperCase();
    });
});

let styles = [
    "border: 1px solid gold;",
    "background-color: blue;",
    "background-color: red;",
    "border: 5px dotted gold;",
];



document.querySelector("input").addEventListener("click", () => {
    let randomStyle = Math.floor(Math.random() * styles.length);
    Array.from(enfant).forEach((element) => {
        element.setAttribute("style", styles[randomStyle]);
    });
});