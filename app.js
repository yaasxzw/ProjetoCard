let numero = 0;
const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{

  btn.style.color = 'red'
  btn.style.borderColor = 'red'
  btn.style.backgroundColor = 'whiter'


    numero++;
    document.querySelector('.number').innerHTML = numero;
})