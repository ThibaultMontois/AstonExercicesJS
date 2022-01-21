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
 * Check if 'num' are multiples of 3, 5 or both using 'test_function'.
 * Write respectively 'Fizz', 'Buzz' or 'FizzBuzz' in 'container' if they are.
 * 
 * @param { HTMLElement } container 
 * @param { Number } num 
 * @param { Function } test_function 
 */
function addFizzBuzz(container, num, test_function) {
        let p = document.createElement('p');
        p.innerText += num < 10 ? `00${num} : ` : num < 100 ? `0${num} : ` : `${num} : `; // add '00' if num < 10, '0' if num < 100
        if (test_function(num, 3)) writeResp(p, 'Fizz');
        if (test_function(num, 5)) writeResp(p, 'Buzz');
        container.appendChild(p);
}