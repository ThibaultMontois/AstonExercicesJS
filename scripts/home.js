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

function main() {
    let main = document.createElement('main');

    let card_FIM = createHomeCard('Friendship is Magic', 'Vous intégrerez une page qui listera les noms des principaux personnages de la série "Friendship is magic", sous forme de liste non ordonnée. Le texte sera écrit en blanc sous un fond "arc-en-ciel" (gradient) du rose vers le violet. L\'affichage sera ENTIEREMENT géré par le script JS de la page : votre page HTML ne doit contenir aucune information si ce n\'est un "H1". Vous insérerez un minimum de style afin que ce soit au moins agréable à regarder. Point de compensation : une image !', '/friendship_is_magic.html');
    main.appendChild(card_FIM);

    let card_HRL = createHomeCard('L\'Horloge', 'Vous créerez une page qui affichera l\'heure actuelle sous forme : "hh:mm:s" au centre de la page. Vous insérerez un minimum de style afin que ce soit au moins agréable à regarder.', '/horloge.html');
    main.appendChild(card_HRL);

    let card_FBZ = createHomeCard('FizzBuzz', 'Vous créerez une page qui affichera un champs de texte un compteur allant de 0 à 100. Il affichera le nombre en question, Fizz si c\'est un multiple de 3, Buzz si c\'est un multiple de 5 ou FizzBuzz si c\'est un multiple de 3 et de 5. Tout votre code sera géré exclusivement par des fonctions.', '/fizzbuzz.html');
    main.appendChild(card_FBZ);

    let card_FBP = createHomeCard('FizzBuzz++', 'Vous créerez un nouveau FizzBuzz, sauf qu\'une case affichera le chiffre. Fizz, Buzz ou FizzBuzz s\'afficheront au dessus du chiffre, en grand. Les valeurs s\'afficheront une à une. Un boutton next permettra de passer à la valeur suivante. Un bouton "prev" permettra d\'afficher la valeur précédente. Recyclage de script : 1 point de récup <3', '/fizzbuzz++.html');
    main.appendChild(card_FBP);

    document.getElementsByTagName('body')[0].appendChild(main);
}

main();