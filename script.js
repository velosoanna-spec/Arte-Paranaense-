:root{
    --cor-fundo: #f4f1ea
    --cor-texto:#222222;
    --cor-principal:#6b2d5c;
    --cor-secundaria:#9b4d83;
    --cor-hover:#c77dff;
    --cor-superficie:white;
    --cor-card:#f3d9fa
    --cor-legenda:#555555;
    --cor-clara:white;
    --cor-rodape:#222222;
}
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

