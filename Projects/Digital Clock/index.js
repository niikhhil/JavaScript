const Clock = document.getElementById('clock')

setInterval(() => {
    let date = new Date
    Clock.textContent = date.toLocaleTimeString() 
}, 1000)