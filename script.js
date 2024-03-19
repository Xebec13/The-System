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

// ------------------------CODING TREE JS BELOW--------------------
let inputBx = document.querySelector("#inputBx");
let list = document.querySelector("#list");

// Wczytywanie listy zadań z Local Storage po załadowaniu strony
document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});

inputBx.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (taskText) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${taskText}<i></i>`;
    listItem.addEventListener("click", function() {
        this.classList.toggle("done");
        updateLocalStorage();
    });
    listItem.querySelector("i").addEventListener("click", function(event) {
        event.stopPropagation();
        listItem.remove();
        updateLocalStorage();
    });
    list.appendChild(listItem);
    updateLocalStorage();
}

// Funkcja do wczytywania listy zadań z Local Storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(task => addItem(task));
    }
}

// Funkcja do zapisywania listy zadań do Local Storage
function updateLocalStorage() {
    const tasks = Array.from(list.children).map(li => li.textContent.replace('×', '').trim());
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ------------------------------------CALENDAR SECTION--------------
