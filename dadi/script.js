let lancia = document.getElementById("lancia");
lancia.addEventListener("click", function () {

    const dadoGiocatore = Math.floor(Math.random() * 6) + 1;
    const dadoComputer = Math.floor(Math.random() * 6) + 1;

    let messaggio = `Hai lanciato un ${dadoGiocatore} e il computer ha lanciato un ${dadoComputer}. `;

    if (dadoGiocatore > dadoComputer) {
        messaggio += "Hai vinto!";
    }



})
