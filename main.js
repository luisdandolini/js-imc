/* IMC =  peso / (quilo**2) */

const form = document.querySelector('#form');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const valueIMC = document.querySelector('#imc')
const clear = document.querySelector('#clear')


form.addEventListener('submit', (e) => {
  e.preventDefault()

  let imc = weight.value / (height.value * height.value) 
  let imcTotal = imc.toFixed(2)

  if(imcTotal < 18.5) {
    return valueIMC.innerHTML = `${imcTotal} Magreza`
  } else if(imcTotal >= 18.5 && imcTotal <= 24.9) {
    return valueIMC.innerHTML = `${imcTotal} Normal`
  } else if(imcTotal >= 25 && imcTotal <= 29.9) {
    return valueIMC.innerHTML = `${imcTotal} Sobrepeso`
  } else if(imcTotal >= 30 && imcTotal <= 39.9) {
    return valueIMC.innerHTML = `${imcTotal} Obesidade`
  } else if(imcTotal > 40) {
    return valueIMC.innerHTML = `${imcTotal} Obesidade Grave`
  }

  return imcTotal
})

clear.addEventListener('click', (e) => {
  e.preventDefault()

  weight.value = ''
  height.value = ''
  valueIMC.innerHTML = ''
})
