const oneDay = 1000*60*60*24;
const oneHour = 1000*60*60;
const oneMinute = 1000*60;
const oneSecond = 1000;


const daysId = document.querySelector('#days')
const hoursId = document.querySelector('#hours')
const minutesId = document.querySelector('#minutes')
const secondsId = document.querySelector('#seconds')


let futureDate = new Date();
futureDate = futureDate.setDate(futureDate.getDate()+14);

function countDown() {
    let date = new Date().getTime()

    let timeLeft = futureDate - date

    if (timeLeft > 0) {
        let days = Math.floor(timeLeft/oneDay)
        let hours = Math.floor((timeLeft % oneDay) / oneHour)
        let minutes = Math.floor((timeLeft % oneHour) / oneMinute)
        let seconds = Math.floor((timeLeft % oneMinute) / oneSecond)
        
        let arr1 = [days, hours, minutes, seconds]
        let arr2 = arr1.map(item => item<10?item=`0${item}`:item=item)


        daysId.innerHTML = `<div class = "time-container"> <h2>${arr2[0]}</h2> </div> <p class = "time-counter">DAYS</p>`
        hoursId.innerHTML = `<div class = "time-container"> <h2>${arr2[1]}</h2> </div> <p class = "time-counter">HOURS</p>`
        minutesId.innerHTML = `<div class = "time-container"> <h2>${arr2[2]}</h2> </div>  <p class = "time-counter">MINUTES</p>`
        secondsId.innerHTML = `<div class = "time-container"> <h2>${arr2[3]}</h2> </div> <p class = "time-counter">SECONDS</p>`
    } 
    else {
        return alert('its been launched!')
    }

}

setInterval(countDown, 1000)