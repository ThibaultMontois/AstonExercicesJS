/**
 * Add 'text' in 'container'
 * 
 * @param { HTMLElement } container 
 * @param { String } text 
 */
function writeResp(container, text) {
    container.innerText += text;
}

/**
 * Check if 'num' is a multiple of 'den'
 * 
 * @param { Number } num 
 * @param { Number } den 
 * @returns { Boolean } true if 'num' is a multiple of 'den', else false
 */
function isMultiple(num, den) {
    return num % den === 0;
}

/**
 * 
 * Check if numbers from 1 to 'max' are multiples of 3, 5 or both.
 * Write respectively 'Fizz', 'Buzz' or 'FizzBuzz' if they are.
 * 
 * @param { HTMLElement } container 
 * @param { Number } max 
 * @param { Function } test_function 
 */
function addFizzBuzz(container, max, test_function) {
    for (let num = 1; num <= max; num++) {
        let p = document.createElement('p');
        p.innerText += num < 10 ? `00${num} : ` : num < 100 ? `0${num} : ` : `${num} : `; // add '00' if num < 10, '0' if num < 100
        if (test_function(num, 3)) writeResp(p, 'Fizz');
        if (test_function(num, 5)) writeResp(p, 'Buzz');
        container.appendChild(p);
    }
}

/**
 * Creates a main and div element.
 * Fill it with results of 'max' fizzbuzz using 'test_function'.
 * Then appends them into body element.
 * 
 * @param { Number } max 
 * @param { Function } test_function 
 */
function fizzBuzz(max, test_function) {
    let main = document.createElement('main');

    let fbz_container = document.createElement('div');
    fbz_container.classList.add('fizzbuzz_container');

    addFizzBuzz(fbz_container, max, test_function);

    main.appendChild(fbz_container);
    document.getElementsByTagName('body')[0].appendChild(main);
}

/**
 * Launch fizzBuzz function.
 */
fizzBuzz(100, isMultiple);