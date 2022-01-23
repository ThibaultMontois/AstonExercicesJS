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
 * Check if 'num' are multiple of 'first_den', 'second_den' or both using 'test_function'.
 * 
 * @param { Number } num 
 * @param { Function } test_function 
 * @param { Number } first_den 
 * @param { Number } second_den 
 * @returns { String } respectively 'Fizz', 'Buzz', 'FizzBuzz' or an empty string.
 */
function fizzBuzz(num, test_function, first_den, second_den) {
        let resp = '';
        if (test_function(num, first_den)) resp += 'Fizz';
        if (test_function(num, second_den)) resp += 'Buzz';
        return resp;
}