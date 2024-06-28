const emailAutorizzate = ["info@paoloverdi.it", "studiolegale@paoloverdi.it", "paolo@studiolegalepaoloverdi.it", "esempio4@gmail.com", "esempio5@gmail.com"];



// Controlla se l'email è nella lista
let btn_verifica = document.getElementById("btn-verifica");
btn_verifica.addEventListener("click", function () {
    let emailInput = document.getElementById("email").value;
    let autorizzato = false;

    for (let i = 0; i < emailAutorizzate.length; i++) {

        if (emailAutorizzate[i] === emailInput) {
            autorizzato = true;
        }
    }

    // Mostra il messaggio appropriato
    if (autorizzato === true) {
        document.getElementById("message").innerHTML = "Accesso consentito. Benvenuto!";
    }

    else {
        document.getElementById("message").innerHTML = "Accesso negato. L'email non è autorizzata.";
    }

})


let btnDelete = document.getElementById("delete")
btnDelete.addEventListener("click", function () {

    document.getElementById("message").innerHTML = "";
    document.getElementById("email").value = "";
})


