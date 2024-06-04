var toDoList = []
document.querySelector("#addButton").addEventListener("click", pushList);

function pushList() {
    var toDo = document.querySelector("#addInput")
    var toDoItems = document.querySelector(".toDoItems")
    console.log(toDoList)
    if (toDo.value !== "") {
        toDoItems.innerHTML=""
        toDoList.push(toDo.value)
        toDoList.reverse()
        toDoList.forEach(
            (item) => {
                var toDoItem = document.createElement("div");
                toDoItem.classList.add('toDoItem')
                toDoItems.appendChild(toDoItem);

                var toDoItemText = document.createElement("div")
                toDoItemText.classList.add('toDoItemText')
                toDoItem.appendChild(toDoItemText);

                var removeButton = document.createElement("button")
                removeButton.classList.add("remove");
                removeButton.textContent = "remove"
                toDoItem.appendChild(removeButton);

                toDoItemText.textContent = item;
            }
        )
    }
    console.log(toDoList)
}
