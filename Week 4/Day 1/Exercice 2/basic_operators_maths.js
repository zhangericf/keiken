// The postfix and prefix forms
{ 
    let a = 1, b = 1;

    let c = ++a; 
    let d = b++;

    // a = 2
    // b = 2
    // c = 2
    // d = 1
}

// Assignment result
{
    let a = 2;

    let x = 1 + (a *= 2);

    // a = 4
    // x = 5
}

// Type conversions
{
    "" + 1 + 0 // "10"
    "" - 1 + 0 // -1
    true + false  // 1
    6 / "3"  // 2
    "2" * "3" // 6
    4 + 5 + "px" // "9px"
    "$" + 4 + 5  // "$45"
    "4" - 2  // 2
    "4px" - 2  // NaN
    "  -9  " + 5 // " -9 5"
    "  -9  " - 5  // -14
    null + 1 // 1
    undefined + 1 // NaN
    " \t \n" - 2  // -2
    
    //if the binary + is applied to strings, it merges (concatenates) them.
    //The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.
}

// Fix the addition
{    
    let a = Number(prompt("First number?", 1));
    let b = Number(prompt("Second number?", 2));

    alert(a + b);
}
