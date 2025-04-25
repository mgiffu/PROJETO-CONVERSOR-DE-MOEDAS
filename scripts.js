// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

//Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g //Encontra todos os caracteres do tipo alfabético
  amount.value = amount.value.replace(hasCharacterRegex, "") //Substituí todos os caractéricos alfabético por "nada"
})

// Capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => { // poderia usar tamboem o addEventListener
  event.preventDefault() // para desativa o comportamento padrão

  console.log(currency.value)
}