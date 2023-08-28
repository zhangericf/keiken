// Rewrite with arrow functions
{
    // function ask(question, yes, no) {
    //     if (confirm(question)) yes();
    //     else no();
    // }

    let ask = (question, yes, no) => confirm(question) ? yes() : no(); 
      
    ask(
        "Do you agree?",
        () => { alert("You agreed."); },
        () => { alert("You canceled the execution."); }
    );
}