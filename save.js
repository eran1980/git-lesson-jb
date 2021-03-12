var x = [];
if (localStorage != "null") {
    task = JSON.parse(localStorage.getItem("tasks") || "[]");  // מכניס ערכים ללוקל סטורג
}




function saveButton() {
    const text = document.getElementById("data").value;  // לוקח מהHTML ל JS אלמנט
    const date = document.getElementById("target_date").value; //
    const time = document.getElementById("time").value;

    const task = { // מייצר אובייקט מהשדות 
        text,
        date,
        time

    }

    x.push(task);
    const json = JSON.stringify(x);
    localStorage.setItem("tasks", json);

    console.log(task);
    createNote(task); // קורא לפונציה ומכניס את האובייקט כמשתנה 
}

function createNote(task) {// מייצר פתק מהאובייקט  מה שיש בסוגריים מייצר פתק
    let taskNote = document.createElement("div")

    taskNote.classList.add("taskNote")
    let noteText = document.createElement("p")
    let noteDate = document.createElement("p")
    let noteTime = document.createElement("p")
    noteText.innerHTML = task.text
    noteDate.innerHTML = task.date
    noteTime.innerHTML = task.time
    taskNote.appendChild(noteText);
    taskNote.appendChild(noteDate);
    taskNote.appendChild(noteTime);
    document.getElementById("notesContainer").appendChild(taskNote)

}

window.onload = page_refresh();




function page_refresh() {
    const json = localStorage.getItem("tasks");
    let Tasks = JSON.parse(json)
    console.log(Tasks);
    for (let task of Tasks)
        console.log(task)
    if (new Date() >= task.date) {
        console.log(new Date());
        // התאריך הנוכחי על פי שעון המחשב)  //       מכניס תנאי של תאריך ושעה  אם הפתק לא בתוקף לא מייצר אותו אם הוא כן בתוקף  פשוט קורא לפונקציה שמייצרת פתק


    }

    else {
        createNote(task);
    }
}