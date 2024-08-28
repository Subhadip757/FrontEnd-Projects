function updateClock(){
    let newDate = new Date()

    let time = newDate.getTime()

    let day = document.getElementById('day')
    let hour = document.getElementById('hour')
    let minutes = document.getElementById('minute')
    let seconds = document.getElementById('seconds')
    let ampm = document.getElementById('ampm')

    let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

    let weekday = newDate.getDate()
    day.innerHTML = days[weekday]

    hour.innerHTML = newDate.getHours()
    minutes.innerHTML = newDate.getMinutes()
    seconds.innerHTML = newDate.getSeconds()

    if(time < 12){
        ampm.innerHTML = 'AM'
    }else{
        ampm.innerHTML = 'PM'
    }
}

setInterval(updateClock,1000)