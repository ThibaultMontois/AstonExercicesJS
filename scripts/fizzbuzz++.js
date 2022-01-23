/**
 * To display the previous value of FizzBuzz and number.
 */
function previousFizzbuzz() {
    let fizzbuzzplus_container = document.getElementsByClassName('fizzbuzzplus_container')[0];
    let fizzbuzz_p = fizzbuzzplus_container.getElementsByTagName('p')[0];
    let num_p = fizzbuzzplus_container.getElementsByTagName('p')[1];
    let num = parseInt(num_p.textContent);
    if (num > 1) {
        num_p.innerText = `${num - 1}`;
        fizzbuzz_p.innerText = fizzBuzz(num - 1, isMultiple, 3, 5);
        if (fizzbuzz_p.classList.contains('hide')) {
            if (fizzbuzz_p.textContent !== '') fizzbuzz_p.classList.remove('hide');
        } else {
            if (fizzbuzz_p.textContent === '') fizzbuzz_p.classList.add('hide');
        }
    }
}

/**
 * To display the next value of FizzBuzz and number.
 */
function nextFizzbuzz() {
    let fizzbuzzplus_container = document.getElementsByClassName('fizzbuzzplus_container')[0];
    let fizzbuzz_p = fizzbuzzplus_container.getElementsByTagName('p')[0];
    let num_p = fizzbuzzplus_container.getElementsByTagName('p')[1];
    let num = parseInt(num_p.textContent);
    num_p.innerText = `${num + 1}`;

    fizzbuzz_p.innerText = fizzBuzz(num + 1, isMultiple, 3, 5);
    if (fizzbuzz_p.classList.contains('hide')) {
        if (fizzbuzz_p.textContent !== '') fizzbuzz_p.classList.remove('hide');
    } else {
        if (fizzbuzz_p.textContent === '') fizzbuzz_p.classList.add('hide');
    }
}

/**
 * Creates main, div, buttons and p elements.
 * Displays first number and add buttons event listeners.
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

    let fizzbuzz_p = document.createElement('p');
    fizzbuzz_p.classList.add('hide');
    fizzbuzz_p.innerText += fizzBuzz(1, isMultiple, 3, 5);
    fizzbuzzplus_container.appendChild(fizzbuzz_p);
    
    let num_p = document.createElement('p');
    num_p.innerText += '1';
    fizzbuzzplus_container.appendChild(num_p);

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