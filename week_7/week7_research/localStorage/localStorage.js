function shrugCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have shruged " + localStorage.clickcount + " time(s) ¯\\_(ツ)_/¯ ";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";

    }
}
