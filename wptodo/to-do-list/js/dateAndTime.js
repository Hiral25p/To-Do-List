function setDate(){
    let date = new Date();
    let dateStr = date.getDate() + " " + date.toLocaleString("en-US", {month: "long"}) + ", " + date.getFullYear();
    document.getElementById("nav-date").innerHTML = dateStr;
}

function setTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh<10 ? "0" + hh : hh;
    mm = mm<10 ? "0" + mm : mm;
    ss = ss<10 ? "0" + ss : ss;
    let time = hh + ":" + mm + ":" + ss;
    document.getElementById("nav-time").innerHTML = time;
    if(hh == 0 && mm == 0 && ss == 0){
        setDate();
        location.reload();
    }
    let t = setTimeout(function(){ setTime() }, 1000);
}

setDate();
setTime();