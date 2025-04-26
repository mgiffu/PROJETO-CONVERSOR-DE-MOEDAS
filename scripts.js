// Cotação das moedas (COTAÇÃO DO DIA 21/04/2025)
const USD = 5.68 
const EUR = 6.45
const GBP = 7.56


// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g //Encontra todos os caracteres do tipo alfabético
  amount.value = amount.value.replace(hasCharacterRegex, "") //Substituí todos os caractéricos alfabético por "nada"
})

// Capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => { // poderia usar tamboem o addEventListener
  event.preventDefault() // para desativa o comportamento padrão

  switch (currency.value){ //Para verificar qual moeda esta selecionada
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
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calcula o total
    let total = amount * price
    // Formatar o valor total
    total = formatCurrencyBRL(total).replace("R$", "")

    // Exibe o resultado total
    result.textContent = `${(total)} Reais`

    // Aplica a classe que exibe o footer para mostar o resultado, exibindo ela na tela
    footer.classList.add("show-result") // adiciona a classe "show-result" no footer, esse classe esta presente no CSS.
  } catch (error) {
    // Remove a classe do footer, removendo ela da tela
    footer.classList.remove("show-result") // remove a classe "show-result no footer"
    alert("Não foi possível converter. Tente novamente!")
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}