//------------------------------- Level SECTION------------------------------
let time = document.getElementById("datetime");

setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}, 1000);


let dateTime = document.getElementById("date");

setInterval(() => {
    let dt = new Date();
    dateTime.innerHTML = dt.toLocaleDateString();
}, 1000);
const skills = document.querySelectorAll('.skill span');

let sum1 = 0;


skills.forEach(skill => {
    const points = parseInt(skill.textContent.split('/')[0]);
    sum1 += points;
});


document.getElementById('totalPoints').textContent = sum1;


const category = document.querySelectorAll('.skill span');


let sum2 = 0;

skills.forEach(skill => {
    const points = parseInt(skill.textContent.split('/')[1]);
    sum2 += points;
});

// Wyświetl sumę w elemencie totalPoints
document.getElementById('categoryPoints').textContent = sum2;

const level = sum1 / 2;
document.getElementById('levelPoints').textContent = level;







// ------------------------CODING TREE JS BELOW--------------------
let inputBx = document.querySelector("#inputBx");
let list = document.querySelector("#list");


document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

inputBx.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (taskText) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${taskText}<i></i>`;
    listItem.addEventListener("click", function () {
        this.classList.toggle("done");
        updateLocalStorage();
    });
    listItem.querySelector("i").addEventListener("click", function (event) {
        event.stopPropagation();
        listItem.remove();
        updateLocalStorage();
    });
    // Wstaw nowy element na początek listy
    list.insertBefore(listItem, list.firstChild);
    updateLocalStorage();
}

// Funkcja do wczytywania listy zadań z Local Storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        // Wczytuj zadania w odwrotnej kolejności (od najnowszego do najstarszego)
        tasks.reverse().forEach(task => addItem(task));
    }
}

// Funkcja do zapisywania listy zadań do Local Storage
function updateLocalStorage() {
    const tasks = Array.from(list.children).map(li => li.textContent.replace('×', '').trim());
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//--------------------------------------Health From-----------------------



























//----------------------------------------Calendar-------------------------
