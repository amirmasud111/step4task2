function addItem() { 
    var value = document.getElementById("text").value;
    if (!value) return;
    tasks.push({
        title: value,
        condition: false
    });
    show();
}

function deleteTask(task) {
    tasks.splice(tasks.indexOf(task), 1);
    show();
}

function itsDone(task) {
    task.condition = !task.condition;
    show();
}

var filter = 0;

function getFilteredNotes() {
    if (filter == 1) {
        return tasks.filter(function(task) {
            return !task.condition;
        });
    }
    if (filter == 2)
        return tasks.filter(function(task) {
            return task.condition;
        });

    return tasks;
}

function setFilter(value) {
    filter = value;
    show();
}