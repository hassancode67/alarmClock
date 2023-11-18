//All Html element selection
let time = document.getElementById("time")
let message = document.getElementById("message")
let set = document.getElementById("set")
let hour = document.getElementById("hour")
let minutes = document.getElementById("minutes")
let ampm = document.getElementById("ampm")
let box = document.getElementById("box")
let cancel1 = document.getElementById("cancel")
let alarmTime;
let alarm;
audio.src = "twirling-intime-lenovo-k8-note-alarm-tone-41440.mp3"

// Select and optons loop
let select = document.querySelectorAll("select")
for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i
    const option = `<option value="${i}">${i}</option>`
    select[0].firstElementChild.insertAdjacentHTML("afterend", option)
}
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i
    const option = `<option value="${i}">${i}</option>`
    select[1].firstElementChild.insertAdjacentHTML("afterend", option)
}
for (let i = 2; i > 0; i--) {
   let zone = i == 1  ? "AM" : "PM";
    const option = `<option value="${zone}">${zone}</option>`
    select[2].firstElementChild.insertAdjacentHTML("afterend", option)
}

// Clock
setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let currentAmpm = h >= 12 ? "PM" : "AM";
    
    h = h % 12 || 12; // Convert 0 to 12
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    let timeString = `${h}:${m}:${s} ${currentAmpm}`;
    time.innerHTML = timeString;
   // Alarm Audio
    if (alarmTime == `${h}:${m} ${currentAmpm}`) {
        audio.play();
    }
    
}, 1000);

// Set Alarm Button
set.addEventListener("click", (e)=>{
    let select0 = select[0].value
    let select1 = select[1].value
    let select2 = select[2].value
    e.preventDefault()
    alarm = `${select0}:${select1} ${select2}`
    message.innerHTML = 
    `<p>The alarm is set for ${alarm}</p>
    <button id="cancel" onclick="cancel()">Cancel</button>`
    set.classList.add("hide")
    box.classList.add("big")
    if(alarm.includes("hour") || alarm.includes("minutes") || alarm.includes("ampm")){
    alert("Please select time for alarm")
    cancel()
    }
    alarmTime = alarm
})

// Cancel button
const cancel = () =>{
    location.reload()
}


