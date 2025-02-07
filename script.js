function certGoblin(){
    const element = document.getElementById(`certificate`);
    element.classList.remove(`certificateW`, `certificateR`);
    element.classList.add(`certificateG`);
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

function printCert() {
    window.print();
}

function recipientName() {
    let recipient = document.getElementById(`rNameInput`);
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