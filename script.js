const lcond = document.querySelector('#lCond');
const input =  document.querySelector('input');
const p =  document.querySelector('p');
const produtoAdd= document.querySelector('#produtoAdd');


lcond.addEventListener('mouseover', () => {
    //alert('manga') //quando clica aparece uma mensagem
    lcond.style.backgroundColor = 'red'

});

lcond.addEventListener('mouseout', () => {
    //alert('manga') //quando clica aparece uma mensagem
    lcond.style.backgroundColor = ''});

input.addEventListener('input',() => {
    console.log(input.value) //imprimindo o valor no input
    p.textContent = 'sua busca: ' + input.value //salva no p
});

produtoAdd.addEventListener('mousemove', () =>{
    //alert('sla')
    let r = parseInt (Math.random()*255);
    let g = parseInt (Math.random()*255);
    let b = parseInt (Math.random()*255);
    let cor = `rgb(${r}, ${g}, ${b})`
    console.log(cor);

});


