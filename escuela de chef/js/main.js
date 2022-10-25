window.addEventListener('scroll',function(){
    let animacion=this.document.getElementById("animado");
    let posicionObj1=animacion.getBoundingClientRect().top;
    let tamañoDePantalla=window.innerHeight/3.5;
    console.log(posicionObj1);
    console.log(tamañoDePantalla);
    if(posicionObj1<tamañoDePantalla){
        console.log('mover');
        animacion.style.animation='mover 1s ease-out';
    }
})