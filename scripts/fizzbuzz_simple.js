/**
 * Creates a main and div elements.
 * Fill it with results of 'max' fizzbuzz using 'test_function', 'first_den' and 'second_den'.
 * Then appends them into body element.
 * 
 * @param { Number } max 
 * @param { Function } test_function 
 * @param { Number } first_den 
 * @param { Number } second_den 
 */
 function fizzBuzzSimple(max, test_function, first_den, second_den) {
    let main = document.createElement('main');

    let fbz_container = document.createElement('div');
    fbz_container.classList.add('fizzbuzz_container');

    for (let num = 1; num <= max; num++) {
        let p = document.createElement('p');
        p.innerText += num < 10 ? `00${num} : ` : num < 100 ? `0${num} : ` : `${num} : `;
        p.innerText += fizzBuzz(num, test_function, first_den, second_den);
        fbz_container.appendChild(p);
    }

    main.appendChild(fbz_container);
    document.getElementsByTagName('body')[0].appendChild(main);
}

/**
 * Launch fizzBuzzSimple function.
 */
 fizzBuzzSimple(100, isMultiple, 3, 5);