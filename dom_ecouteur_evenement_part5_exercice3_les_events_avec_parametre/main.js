// > Sur base de l'html fourni :

// # 1. En utilisant une boucle pour appliquer un écouteur d'événement sur chaque "li", créer un programme qui permet de lancer une function du nom de sayMyName qui affiche une alert du texte du li sur le quel on clique.



let ul = document.getElementById('ul');
let enfant = ul.children;

//     for (let i = 0; i < enfant.length; i++) {
//     enfant[i].addEventListener('click',function sayMyName(){
//         alert(enfant[i].innerHTML)
//     })
// }
// # 2. En utilisant le meme procédé qu'au dessus Créer un programme qui permet de modifier le contenu de chaque Li en double cliquant dessus via un prompt(attention peut-être que tu devras commenter l'exercice précédent)
let chang;
for (let i = 0; i < enfant.length; i++) {
    enfant[i].addEventListener('dblclick',()=>{
        chang = prompt(`Entrez un nouveau nom`)
        enfant[i].innerHTML = chang;
    })
}



// # 3. Créer un programme qui permet d'inverser l'ordre de deux li ! avec l'aide des inputs et du button inverser



let btnInv = document.getElementById('btnInv')

let label1 = document.querySelector('div label')

let label2 = document.querySelectorAll('div label')[1];

let label3 = label1.innerHTML;


btnInv.addEventListener('click',()=>{
    label1.innerHTML = label2.innerHTML;
    label2.innerHTML = label3;
})
URLSearchParams
if (condition) {
    
} else {
    
}

