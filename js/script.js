let adc = document.getElementById('add');

adc.addEventListener('click', function() {
    let divRtgl = document.createElement('div');
    divRtgl.classList.add('retangulo');

    document.getElementById('retangulos').appendChild(divRtgl);
});
document.getElementById('sub').addEventListener('click', function (){
    let divsRetangulo = document.querySelectorAll('.retangulo');
    if(divsRetangulo.length > 0) {
        divsRetangulo[0].remove ();
    }
});
