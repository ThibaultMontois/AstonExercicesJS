/**
 * The friends array
 */
let friends_tab = [
    {
        name: 'Twilight Sparkle',
        bio: 'Twilight Sparkle est le personnage principal de la série, c’est une licorne violette avec une crinière rose, indigo et violette; sa marque de beauté est une étoile à 6 branches rose avec cinq autres petites étoiles blanches.',
        img: ''
    },
    {
        name: 'Rainbow Dash',
        bio: 'Rainbow Dash est une pégase bleue avec une crinière de couleur d’arc - en - ciel, sa marque de beauté est un éclair rouge jaune et bleu sortant d’un nuage blanc.Elle s’occupe du ciel de Poneyville et peut le nettoyer en dix secondes.',
        img: ''
    },
    {
        name: 'Spike',
        bio: 'C\'est un bébé dragon violet et vert et l\'un des personnages principaux de la série.Il est le meilleur ami et l\'assistant numéro un de Twilight Sparkle. Il a la capacité de livrer des lettres à la Princesse Celestia par magie en soufflant dessus.',
        img: ''
    },
    {
        name: 'Applejack',
        bio: 'Applejack est un poney terrestre orange aux crins blonds avec une marque de beauté qui a la forme de trois pommes rouges, elle porte toujours un chapeau de cowgirl.Elle s’occupe des récoltes de pommes, du tri et de la cuisine à la ferme de la Douce Pomme avec son grand frère Big McIntosh, sa petite sœur Apple Bloom et sa grand - mère Granny Smith.',
        img: ''
    },
    {
        name: 'Fluttershy',
        bio: 'Fluttershy est une pégase jaune avec une crinière et une queue rose, et une marque de beauté qui représente trois papillons; elle est timide et peureuse, mais se montre en colère lorsque les animaux ou ses amies sont en danger.',
        img: ''
    },
    {
        name: 'Rarity',
        bio: 'Rarity est une licorne blanche avec une crinière violette et une marque de beauté en forme de trois diamants bleus, elle est la sœur aînée de Sweetie Belle.Rarity vit et travaille dans son propre magasin, la Boutique Carrousel où elle crée, fabrique et vend des habits.',
        img: ''
    },
    {
        name: 'Pinkie Pie',
        bio: 'Pinkie Pie est une ponette terrestre rose, sa marque de beauté représente trois ballons symbolisant son talent pour organiser les fêtes les plus réussies de Poneyville.Elle travaille comme pâtissière dans la boutique SugarCube Corner.',
        img: ''
    }
];

/**
 * Creates a friend card using a friend object.
 * 
 * @param { Object } friend 
 * @returns { HTMLDivElement } a friend card
 */
function createFriendCard(friend) {
    let friend_card = document.createElement('div');
    friend_card.classList.add('friend-card');

    let h1 = document.createElement('h1');
    h1.innerText = friend.name;
    friend_card.appendChild(h1);

    let p = document.createElement('p');
    p.innerText = friend.bio;
    friend_card.appendChild(p);

    return friend_card;
}

/**
 * Creates a main element and an unordonned list of friends using a friends array, then appends them into body element.
 * 
 * @param { Array<Object> } friends 
 */
function friendshipIsMagic(friends) {
    let main = document.createElement('main');
    let ul = document.createElement('ul');
    friends.forEach(friend => {
        let li = document.createElement('li');
        let friend_card = createFriendCard(friend);
        li.appendChild(friend_card);
        ul.appendChild(li);
    });
    main.appendChild(ul);
    document.getElementsByTagName('body')[0].appendChild(main);
}

/**
 * Launch friendshipIsMagic function.
 */
friendshipIsMagic(friends_tab);