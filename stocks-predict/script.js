import { datess } from "./dates.js"
const tickersArr = []

const tickerInput = document.getElementById("ticker-input")

const addTickerBtn = document.getElementById("addTickerBtn")

const tickersBox = document.querySelector(".tickers-box")

const generateReportBtn = document.querySelector(".generate-report-btn")
generateReportBtn.addEventListener("click", fetchReport)

addTickerBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if(tickerInput.value.length > 2){
        const newTickerP = document.createElement("p")
        newTickerP.textContent = tickerInput.value.toUpperCase()
        tickersArr.push(newTickerP)
        renderTickers()
        tickerInput.value = ""
    } else{
        const label = document.getElementsByTagName("label")[0]
        label.style.color = "red"
        label.textContent = "Put atleast 3 letters of a Ticker: eg TSLA for Tesla"
    }
})


function renderTickers() {
    generateReportBtn.disabled = false
    tickersBox.textContent = ""
    tickersArr.forEach(ticker => {
        tickersBox.appendChild(ticker)
    })
}


async function fetchReport(){
    const response = await Promise.all(tickersArr.map(async (ticker) => {
        // const url = `https://api.${ticker}/${dates.threeDaysAgo}/${dates.oneDayAgo}?apikey=${hfndndjdj2344}`

        console.log(datess)
    }))
}