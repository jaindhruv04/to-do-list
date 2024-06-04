var toDoList = []
document.querySelector("#addButton").addEventListener("click", pushList);

function pushList() {
    var toDo = document.querySelector("#addInput")
    var toDoItems = document.querySelector(".toDoItems")
    toDoList =[]
    if (toDo.value !== "") {
        toDoList.push(toDo.value)
        toDoList.forEach(
            (item) => {
                var parentDiv = document.querySelector(".toDoItems")
                var newDiv = document.createElement("div");
                newDiv.classList.add('toDoItem')
                var sonDiv = document.createElement("div")
                sonDiv.classList.add('toDoItemText')
                var sonButton = document.createElement("button")
                parentDiv.appendChild(newDiv);
                newDiv.appendChild(sonDiv);
                newDiv.appendChild(sonButton);
                sonButton.textContent = "remove"
                sonButton.classList.add("remove");
                sonDiv.textContent = toDo.value;
            }
        )
    }
}
