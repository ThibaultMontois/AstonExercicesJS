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
 * Write respectively 'Fizz', 'Buzz' or 'FizzBuzz' in a 'container' if they are.
 * 
 * @param { HTMLElement } container
 * @param { Number } num 
 * @param { Function } test_function 
 */
function writeFizzBuzz(container, num, test_function) {
        container.innerText += num < 10 ? `00${num} : ` : num < 100 ? `0${num} : ` : `${num} : `;
        if (test_function(num, 3)) writeResp(container, 'Fizz');
        if (test_function(num, 5)) writeResp(container, 'Buzz');
}