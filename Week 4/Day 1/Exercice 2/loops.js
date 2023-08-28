// Last loop value
{
    let i = 3;

    while (i) {
        alert( i-- );
    }

    // 1 will be the last value, because 0 = false and stop the while
}

// Which values does the while loop show?
{
    {
        let i = 0;
        while (++i < 5) alert( i );  // 1, 2, 3, 4
        // ++i prefix will increment before the comparaison
    }
    {
        let i = 0;
        while (i++ < 5) alert( i );  // 1, 2, 3, 4, 5
        // i++ postfix will increment after the comparaison so we get to print 5
    }
}

// Which values get shown by the "for" loop?
{
    {
        for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4
    }
    {
        for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4
    }
    // For both case the comparaison happen before the increment so the result will be the same
    // In for loop the increment is at the end.
}

// Output even numbers in the loop
{
    let i = 2;
    for (; i <= 10; i += 2) (i);
    // increment i by 2 to be even, I know it's not what I'm supossed to do.
}

// Replace "for" with "while"
{
    // for (let i = 0; i < 3; i++) {
    //     alert( `number ${i}!` );
    // }

    let i = 0;
    while (i < 3) {
        alert(`number ${i}!`);
        i++;
    }
}

// Repeat until the input is correct
{
    let number;

    do {
        number = prompt("Enter a number greater than 100");
    } while (number <= 100 && number);
}

// Output prime numbers
{
    let n = 10

    searchPrime:
    for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if ((i % j) == 0) continue searchPrime;
        }
        alert(i);
    }
}