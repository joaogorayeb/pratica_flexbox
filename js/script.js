let adc = document.getElementById('add');

adc.addEventListener('click', function() {
    let divsRetangulo = document.querySelectorAll('.retangulo');
    let divRtgl = document.createElement('div');
    divRtgl.classList.add('retangulo');
    divRtgl.innerText = divsRetangulo.length +1

    document.getElementById('retangulos').appendChild(divRtgl);
});
document.getElementById('sub').addEventListener('click', function (){
    let divsRetangulo = document.querySelectorAll('.retangulo');
    console.log (divsRetangulo);
    if(divsRetangulo.length > 0) {
        divsRetangulo[divsRetangulo.length -1].remove ();
    }
});
