let tasksList = []
let addBtn = document.getElementById("addTaskBtn")
addBtn.addEventListener("click", function () {
    let userInput = document.getElementById("inputTask").value
    if(userInput.length==0){
        alert("Task cannot be empty.")
    }
    else{
        tasksList.push(userInput)
        displayList()
        document.getElementById("inputTask").value = ""
    }
   
})
function displayList() {
    let ul = document.getElementById("ul")
    let str = ""
    for (let i = 0; i < tasksList.length; i = i + 1) {
        str = str + `<li class="list-group-item list-group-item-primary">${tasksList[i]}<button onclick = 'deleteTask(${i})' type="button" class="btn btn-outline-danger">Delete</button></li> `
    }
    ul.innerHTML = str
}
function deleteTask(i) {
    tasksList.splice(i, 1)
    displayList()
}