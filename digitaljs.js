const hourEl = document.getElementById("Hour");
const minutesEl = document.getElementById("Minutes");
const secondEl = document.getElementById("Seconds");
const ampmEl = document.getElementById("ampm");
function updateClock (){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

if (h > 12 ){
    h = h -12;
    ampm = "PM";
}
hourEl.innerText = h;
hourEl.innerText = m;
hourEl.innerText = s;
ampmEl.innerText = ampm;

}

updateClock();