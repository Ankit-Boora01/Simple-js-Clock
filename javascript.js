function clockTime() {
    let time = new Date();
    let hours = time.getHours();
    hours= hours % 12 || 12;
    hours= hours.toString().padStart(2,0);
    const mint = time.getMinutes().toString().padStart(2,0);
    const sec = time.getSeconds().toString().padStart(2,0);
    let dayZone = hours >= 12 ? 'AM' : 'PM';
    document.getElementsByClassName("cHours")[0].textContent = `${hours}:`;
    document.getElementsByClassName("cMin")[0].textContent = `${mint}:`;
    document.getElementsByClassName("cSec")[0].textContent = sec;
    document.getElementsByClassName("cDayZone")[0].textContent = dayZone;
}

setInterval(clockTime,1000);
clockTime();