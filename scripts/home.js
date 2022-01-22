/**
 * The home cards array
 */
let cards_tab = [
    {
        title: 'Friendship is Magic',
        desc: 'Vous intégrerez une page qui listera les noms des principaux personnages de la série "Friendship is magic", sous forme de liste non ordonnée.\n\nLe texte sera écrit en blanc sous un fond "arc-en-ciel" (gradient) du rose vers le violet.\n\nL\'affichage sera ENTIEREMENT géré par le script JS de la page : votre page HTML ne doit contenir aucune information si ce n\'est un "H1".\n\nVous insérerez un minimum de style afin que ce soit au moins agréable à regarder.\n\nPoint de compensation : une image !',
        url: './html/friendship_is_magic.html'
    }, 
    {
        title: 'L\'Horloge',
        desc: 'Vous créerez une page qui affichera l\'heure actuelle sous forme : "hh:mm:s" au centre de la page.\n\nVous insérerez un minimum de style afin que ce soit au moins agréable à regarder.',
        url: './html/horloge.html'
    },
    {
        title: 'FizzBuzz',
        desc: 'Vous créerez une page qui affichera un champs de texte un compteur allant de 0 à 100.\n\nIl affichera le nombre en question, Fizz si c\'est un multiple de 3, Buzz si c\'est un multiple de 5 ou FizzBuzz si c\'est un multiple de 3 et de 5.\n\nTout votre code sera géré exclusivement par des fonctions.',
        url: './html/fizzbuzz.html'
    },
    {
        title: 'FizzBuzz++',
        desc: 'Vous créerez un nouveau FizzBuzz, sauf qu\'une case affichera le chiffre.\n\nFizz, Buzz ou FizzBuzz s\'afficheront au dessus du chiffre, en grand.\n\nLes valeurs s\'afficheront une à une.\n\nUn boutton next permettra de passer à la valeur suivante.\n\nUn bouton "prev" permettra d\'afficher la valeur précédente.\n\nRecyclage de script : 1 point de récup <3',
        url: './html/fizzbuzz++.html'
    }
];


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
 * Creates main and home-cards element using a cards array, then display them into body.
 * 
 * @param { Array<Object> } cards 
 */
function homePage(cards) {
    let main = document.createElement('main');

    cards.forEach(card => {
        let home_card = createHomeCard(card.title, card.desc, card.url);
        main.appendChild(home_card);
    });

    document.getElementsByTagName('body')[0].appendChild(main);
}

/**
 * Launch homePage function
 */
homePage(cards_tab);