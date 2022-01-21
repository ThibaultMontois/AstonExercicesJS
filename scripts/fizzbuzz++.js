/**
 * To display the previous value of FizzBuzz.
 */
function previousFizzbuzz() {
    let fizzbuzzplus_container = document.getElementsByClassName('fizzbuzzplus_container')[0];
    let p = fizzbuzzplus_container.getElementsByTagName('p')[0];
    let num = parseInt(p.textContent);
    if (num > 0) {
        p.innerText = `${num - 1} :  `;
        writeFizzBuzz(p, num - 1, isMultiple);
    }
}

/**
 * To display the next value of FizzBuzz.
 */
function nextFizzbuzz() {
    let fizzbuzzplus_container = document.getElementsByClassName('fizzbuzzplus_container')[0];
    let p = fizzbuzzplus_container.getElementsByTagName('p')[0];
    let num = parseInt(p.textContent);
    p.innerText = `${num + 1} :  `;
    writeFizzBuzz(p, num + 1, isMultiple);
}

/**
 * Creates main, div, buttons and p elements.
 * Displays first FizzBuzz and add buttons event listeners.
 * Then appends them into body element.
 */
function fizzBuzzPlus() {
    let main = document.createElement('main');

    let fizzbuzzplus_container = document.createElement('div');
    fizzbuzzplus_container.classList.add('fizzbuzzplus_container');

    let btn_plus = document.createElement('button');
    btn_plus.classList.add('btn--plus');
    btn_plus.innerText = '+';
    btn_plus.addEventListener('click', nextFizzbuzz);

    fizzbuzzplus_container.appendChild(btn_plus);

    let p = document.createElement('p');
    p.innerText += '0 :';
    writeFizzBuzz(p, 0, isMultiple);

    fizzbuzzplus_container.appendChild(p);

    let btn_minus = document.createElement('button');
    btn_minus.classList.add('btn--minus');
    btn_minus.innerText = '-';
    btn_minus.addEventListener('click', previousFizzbuzz);

    fizzbuzzplus_container.appendChild(btn_minus);

    main.appendChild(fizzbuzzplus_container);
    document.getElementsByTagName('body')[0].appendChild(main);
}

/**
 * Launch fizzBuzzPlus function.
 */
fizzBuzzPlus();