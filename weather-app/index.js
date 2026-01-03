const now = new Date()

const nowHour = now.getHours()

const nowMinute = now.getMinutes()

const nowSecond = now.getSeconds()


// DATE
const weatherDateP = document.querySelector(".weatherDate")

weatherDateP.textContent = `Today, ${now.getFullYear()} / ${now.getMonth() + 1} / ${now.getDate()}`


// TIME
const timeP = document.querySelector(".time")


//--- doesnt work
// timeP.textContent = `${nowHour} : ${nowMinute} : ${nowSecond}`

// for (let index = 0; index < 10001; index++) {
//     setTimeout(() => {
//         timeP.textContent = `${nowHour} : ${nowMinute} : ${nowSecond}`
//     }, 100);
// }


// does work
// function updateTimer() {
//   const date = new Date();
//     console.log(date.toLocaleTimeString());
//     timeP.textContent = date.toLocaleTimeString()
// }

// const intervalId = setInterval(updateTimer, 1000); // Runs updateTimer every 1000ms (1 second)


// -- does work 
// function myClock() {
//     //timeP.textContent = `${nowHour} : ${nowMinute} : ${nowSecond}`
//     // didnt work bcs now was computed once
//     // it has to recompute to get the latest sec and all time so 
//     // we need to initiate Date in this fn to recompute when each time this fn reruns
//     const nowNew = new Date()
//     timeP.textContent = nowNew.toLocaleTimeString()
// }

// const clockReader = setInterval(myClock, 1000);


//--- doesnt work

// for (let index = 0; index < 10001; index++) {
//     setTimeout(() => {
//         const now = new Date()

//         const nowHour = now.getHours()

//         const nowMinute = now.getMinutes()

//         const nowSecond = now.getSeconds()

//         timeP.textContent = `${nowHour} : ${nowMinute} : ${nowSecond}`
//     }, 1000);
// }



//does work
setInterval(() => {
    const now = new Date()

    const nowHour = now.getHours()

    const nowMinute = now.getMinutes()

    const nowSecond = now.getSeconds()

    timeP.textContent = `${nowHour} : ${nowMinute} : ${nowSecond}`
}, 1000);


async function getWeather(){
    try{
        const response = await fetch("api")
        const data = response.json
        return data
    }catch(err){
        console.log(err)
    }
}