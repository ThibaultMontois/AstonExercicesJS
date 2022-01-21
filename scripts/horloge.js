/**
 * 
 * @returns { String } a string that represent current time.
 */
function getTime() {
    let date = new Date();
    let hours = `${date.getHours()}`;
    let minutes = `${date.getMinutes()}`;
    let seconds = `${date.getSeconds()}`;
    if (hours.length === 1) hours = `0${hours}`;
    if (minutes.length === 1) minutes = `0${minutes}`;
    if (seconds.length === 1) seconds = `0${seconds}`;
    return `${hours}:${minutes}:${seconds}`;
}

/**
 * Change current time displayed into the timer element.
 */
function changeTime() {
    let p = document.getElementsByClassName('timer')[0];
    p.innerText = getTime();
}

/**
 * Creates a main and a paragraph element to display current time, then appends them into body element.
 */
function horloge() {
    let main = document.createElement('main');

    let p = document.createElement('p');
    p.classList.add('timer');
    p.innerText = getTime();

    main.appendChild(p);
    document.getElementsByTagName('body')[0].appendChild(main);

    setInterval(() => changeTime(), 1000);
}

/**
 * Launch horloge function
 */
horloge();