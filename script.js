const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach (function(botaoCurtir) {
    let curtiu = false;
    botaoCurtir. addEventlistener ("click", curtir);
    function curtir(){
        const contador = botaoCurtir.querySelector("span");
if (curtiu === false) {
    contador.textContent++;
    curtiu = true;
} else{
    contador.textContent--;
    curtiu = false;

}
    }
});

