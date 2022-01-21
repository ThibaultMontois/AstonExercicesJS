/**
 * Creates a main and div elements.
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

    for (let num = 1; num <= max; num++) {
        let p = document.createElement('p');
        writeFizzBuzz(p, num, test_function);
        fbz_container.appendChild(p);
    }

    main.appendChild(fbz_container);
    document.getElementsByTagName('body')[0].appendChild(main);
}

/**
 * Launch fizzBuzz function.
 */
 fizzBuzz(100, isMultiple);