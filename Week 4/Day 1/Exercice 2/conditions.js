// if (a string with zero)
{
    if ("0") {
        alert( 'Hello' );
    }

    // Yes, it will be shown because "0" return true
}

// The name of JavaScript
{
    let officialName = prompt("What's the \"official\" name of JavaScript?");
    
    if(officialName == "ECMAScript") {
        alert("Right !");
    } else {
        alert("You don't know? \"ESMAScript\"!");
    }
}

// Show the sign

{
    let number = prompt("Enter a number");
    
    if (number > 0) {
        alert(1);
    } else if (number < 0) {
        alert(-1);
    } else {
        alert(0)
    }
}
    
// Rewrite 'if' into '?'

let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

result = (a + b < 4) ? 'Below' : 'Over';

// Rewrite 'if..else' into '?'

{
    let message;

    // if (login == 'Employee') {
    //     message = 'Hello';
    // } else if (login == 'Director') {
    //     message = 'Greetings';
    // } else if (login == '') {
    //     message = 'No login';
    // } else {
    //     message = '';
    // }

    message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' :
              '';
}