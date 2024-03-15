let time = document.getElementById("datetime");

setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}, 1000);


let date = document.getElementById("date");

setInterval(() => {
    let dt = new Date();
    date.innerHTML = dt.toLocaleDateString();
}, 1000);