var toDoList = []
document.querySelector("#addButton").addEventListener("click", pushItem);

document.addEventListener("keydown", (key) => {
    const keyInput = key.key;
    if (keyInput === "Enter") {
        pushItem();
    }
}
)

function pushItem() {
    var toDo = document.querySelector("#addInput")
    if (toDo.value !== "") {
        toDoList.reverse()
        toDoList.push(toDo.value)
        toDoList.reverse()
        displayItems()
        toDo.value = ""
    }
}

function removeItem() {
    console.log(toDoList)
    toDoList.splice(this.id, 1)
    displayItems()
}

function displayItems() {
    var toDoItems = document.querySelector(".toDoItems")
    toDoItems.innerHTML = ""
    toDoList.forEach(
        (item) => {
            var index = toDoList.findIndex(element => element === item)

            var toDoItem = document.createElement("div");
            toDoItem.classList.add('toDoItem')
            toDoItems.appendChild(toDoItem);

            var toDoItemText = document.createElement("div")
            toDoItemText.classList.add('toDoItemText')
            toDoItem.appendChild(toDoItemText);

            var removeButton = document.createElement("button")
            removeButton.classList.add("remove");
            removeButton.id = index
            removeButton.innerHTML = `<i class="fa fa-trash-o" style="font-size:24px"></i>`
            removeButton.addEventListener("click", removeItem)
            toDoItem.appendChild(removeButton);

            toDoItemText.textContent = item;
        }
    )
}