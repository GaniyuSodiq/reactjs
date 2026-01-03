const tickersArr = []

const tickerInput = document.getElementById("ticker-input")

const addTickerBtn = document.getElementById("addTickerBtn")

const tickersBox = document.querySelector(".tickers-box")

const generateReportBtn = document.querySelector(".generate-report-btn")

addTickerBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if(tickerInput.value.length > 2){
        const newTickerP = document.createElement("p")
        newTickerP.textContent = tickerInput.value.toUpperCase()
        tickersArr.push(newTickerP)
        renderTickers()
        tickerInput.value = ""
    }
})


function renderTickers() {
    generateReportBtn.disabled = false
    tickersBox.textContent = ""
    tickersArr.forEach(ticker => {
        tickersBox.appendChild(ticker)
    })
}