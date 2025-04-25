// Cotação das moedas (COTAÇÃO DO DIA 21/04/2025)
const USD = 5.68 
const EUR = 6.45
const GBP = 7.56


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

  switch (currency.value){
    case "USD":
      convertCurrent(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrent(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrent(amount.value, GBP, "£")
      break
  }
}

// Função para converter a moeda
function convertCurrent(amount, price, symbol) {
  console.log(amount, price, symbol)
}