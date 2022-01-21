/**
 * Create a home-card element.
 * 
 * @param { String } title 
 * @param { String } desc 
 * @param { String } url 
 * @returns { HTMLDivElement } the home-card created
 */
function createHomeCard(title, desc, url) {
    let card = document.createElement('div');
    card.classList.add('home-card');


    let h1 = document.createElement('h1');
    h1.innerText = title;
    card.appendChild(h1);

    let p = document.createElement('p');
    p.innerText = desc;
    card.appendChild(p);

    let a = document.createElement('a');
    a.href = url;
    a.innerText = 'Voir l\'exercice';

    let btn = document.createElement('button');
    btn.appendChild(a);

    card.appendChild(btn);

    return card;
}

/**
 * Creates main and home-cards element, then display them into body.
 */
function homePage() {
    let main = document.createElement('main');

    let card_FIM = createHomeCard('Friendship is Magic', 'Vous intégrerez une page qui listera les noms des principaux personnages de la série "Friendship is magic", sous forme de liste non ordonnée.\n\nLe texte sera écrit en blanc sous un fond "arc-en-ciel" (gradient) du rose vers le violet.\n\nL\'affichage sera ENTIEREMENT géré par le script JS de la page : votre page HTML ne doit contenir aucune information si ce n\'est un "H1".\n\nVous insérerez un minimum de style afin que ce soit au moins agréable à regarder.\n\nPoint de compensation : une image !', '/html/friendship_is_magic.html');
    main.appendChild(card_FIM);

    let card_HRL = createHomeCard('L\'Horloge', 'Vous créerez une page qui affichera l\'heure actuelle sous forme : "hh:mm:s" au centre de la page.\n\nVous insérerez un minimum de style afin que ce soit au moins agréable à regarder.', '/html/horloge.html');
    main.appendChild(card_HRL);

    let card_FBZ = createHomeCard('FizzBuzz', 'Vous créerez une page qui affichera un champs de texte un compteur allant de 0 à 100.\n\nIl affichera le nombre en question, Fizz si c\'est un multiple de 3, Buzz si c\'est un multiple de 5 ou FizzBuzz si c\'est un multiple de 3 et de 5.\n\nTout votre code sera géré exclusivement par des fonctions.', '/html/fizzbuzz.html');
    main.appendChild(card_FBZ);

    let card_FBP = createHomeCard('FizzBuzz++', 'Vous créerez un nouveau FizzBuzz, sauf qu\'une case affichera le chiffre.\n\nFizz, Buzz ou FizzBuzz s\'afficheront au dessus du chiffre, en grand.\n\nLes valeurs s\'afficheront une à une.\n\nUn boutton next permettra de passer à la valeur suivante.\n\nUn bouton "prev" permettra d\'afficher la valeur précédente.\n\nRecyclage de script : 1 point de récup <3', '/html/fizzbuzz++.html');
    main.appendChild(card_FBP);

    document.getElementsByTagName('body')[0].appendChild(main);
}

/**
 * Launch homePage function
 */
homePage();