const clock = document.querySelector("h2#clock");

const forLazyness = (time) => {
    const v = parseInt(time)
    if(v <= 12){
        return v
    }else{
        return v - 12
    }
}

const getClock = () => {
    var cl = ":"
    const date = new Date()
    const hour = forLazyness(date.getHours());
    clock.innerText = hour + cl + `${date.getMinutes()}`.padStart(2,"0") + cl + `${date.getSeconds()}`.padStart(2,"0")
}

getClock()
setInterval(getClock, 1000)