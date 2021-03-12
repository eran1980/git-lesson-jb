var x = [];
if (localStorage != "null") {
    task = JSON.parse(localStorage.getItem("tasks") || "[]");  // מכניס ערכים ללוקל סטורג
}




function saveButton() {
    const text = document.getElementById("data").value;  // לוקח מהHTML ל JS אלמנט
    const date = document.getElementById("target_date").value; //
    const time = document.getElementById("time").value;
    const created_Date = String(new Date()); // מייצר ערך ייחודי של האריך והשעה של עכשיו ומשנה לו את הסינטאקסט

    const task = { // מייצר אובייקט מהשדות 
        text,
        date,
        time,
        created_Date

    }

    x.push(task); // הופך(דוחף) את גייסון לאובייקט פרטים לגבי הפתקית 
    const json = JSON.stringify(x); // ממיר אובייקט איקס ושולח מחרוזת נתונים 
    localStorage.setItem("tasks", json);


    createNote(task); // קורא לפונציה ומכניס את האובייקט כמשתנה יצירת פתקית

}

function createNote(task) {// מייצר פתק מהאובייקט  מה שיש בסוגריים מייצר פתק
    let taskNote = document.createElement("div");// יוצר אלמנט דיב
    taskNote.classList.add("taskNote");// יצרתי קלאס ונתתי לו שם
    let noteText = document.createElement("p");// יצירת פרגרף פתקית טקסט
    let noteDate = document.createElement("p");//יצירת פרגרף פתקית זמן מטרה
    let noteTime = document.createElement("p");//יצירת פרגרף פתקית תחילת פעולה
    let t = task.text;
    noteText.innerHTML = task.text;// מדפיס בתוך הפתק את הערך שיש בטקסט
    noteDate.innerHTML = task.date;//מדפיס בתוך הפתק את הערך שיש בבתאריך
    noteTime.innerHTML = task.time;// כנל לגבי זמן פעולה
    taskNote.innerHTML = "<input class='btn-close' style='margin-top:15%' type='button' onclick='deleteTask(this)'>";//יצירת כפתור מחיקה
    taskNote.appendChild(noteText);// כותב ערך טקסט על המסך
    taskNote.appendChild(noteDate);//כנל לגבי תאריך
    taskNote.appendChild(noteTime);//כנל לגבי זמן
    document.getElementById("notesContainer").appendChild(taskNote);//דוחף את כל הערכים לתוך הקונטיינר(פתקית)
}
function deleteTask(e) {//  פונקצית מחיקה אי ערך של דיס
    // let json = localStorage.getItem("tasks")//מקבלים מידע מתוך הלוקל
    // let tasks = JSON.stringify(json);//הופכים את המידע לסטרינט

    // const newArray = [];
    // for (let i = 0; i < tasks.length; i++) {
    //     if (tasks[i].currentDate !== task.currentDate) {
    //         newArray.push(tasks[i]);
    //     }
    // }
    // const json2 = JSON.stringify(newArray);
    // localStorage.setItem("tasks", json2);



    //alert(task.indexOf(t));
    //task.splice(task.indexOf(t), 1);    
    e.parentNode.parentNode.removeChild(e.parentNode);//מסירים את הפתק באמצעות הילדים(דיס זה הילד)

}
//function readformlocal() {
 //   let tasks = localStorage.getItem("tasks");
  //  let task = JSON.parse(tasks);
  //  alert(task.length);
 //   for (let i = 0; i < task.length; i++) {
 //       createNote(task[i]);
//    }
//}







