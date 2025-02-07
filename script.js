// The following functions replace the class of the certificate so a different style can be applied
// I know its definetly not the best way to do it but it works
function certGoblin(){
    // V V This finds the certificate div by its id which is not changed
    const element = document.getElementById(`certificate`);
    // V V This removes the previous class
    element.classList.remove(`certificateW`, `certificateR`);
    // V V And this adds the new certificate class
    element.classList.add(`certificateG`);
    // The other functions are the same except that they have different certificate classes to add 
}

function certGamble(){
    const element = document.getElementById(`certificate`);
    element.classList.remove(`certificateW`, `certificateG`);
    element.classList.add(`certificateR`);
}

function certWorst() {
    const element = document.getElementById(`certificate`);
    element.classList.remove(`certificateG`, `certificateR`);
    element.classList.add(`certificateW`);
}

// This prints the certificate
function printCert() {
    window.print();
}


// These functions change the text on the certificate based on what's inputed
// currently  no failsafe for if "nothing" is entered which breaks the text formatting
function recipientName() {
    // V V This grabs the value from one of the inputs
    let recipient = document.getElementById(`rNameInput`);
    // V V And this prints the value of the input into one of the text thingies
    document.getElementById(`recipientNameTxt`).innerHTML = recipient.value;
}

function awarderName() {
    let awarder = document.getElementById(`aNameInput`);
    document.getElementById(`awarderNameTxt`).innerHTML = awarder.value;
}

function dateChange() {
    let date = document.getElementById(`dateInput`);
    document.getElementById(`dateTxt`).innerHTML = date.value;
}