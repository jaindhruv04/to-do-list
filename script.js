var toDoList = []
var tickedList = []
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

function removeFromToDoItem() {
    toDoList.splice(this.id, 1)
    displayItems()
}

function removeFromTickedList() {
    tickedList.splice(this.id, 1)
    displayItems()
}

function tickItem() {
    const textContent = toDoList[this.id]
    tickedList.push(textContent)
    toDoList.splice(this.id, 1)
    displayItems()
}

function displayItems() {
    var toDoItems = document.querySelector(".toDoItems")
    toDoItems.innerHTML = ""
    toDoList.forEach(
        (item) => {

            var toDoItems = document.querySelector(".toDoItems")

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
            removeButton.addEventListener("click", removeFromToDoItem)
            toDoItem.appendChild(removeButton);

            var tickButton = document.createElement("button")
            tickButton.classList.add("tick")
            tickButton.id = index
            tickButton.innerHTML = `<i class="fa fa-check-square-o" aria-hidden="true" style= "font-size:24px"></i>`
            tickButton.addEventListener("click", tickItem)
            toDoItem.appendChild(tickButton)

            toDoItemText.textContent = item;
        }
    )

    tickedList.forEach(
        (item) => {

            var toDoItems = document.querySelector(".toDoItems")

            var index = tickedList.findIndex(element => element === item)

            var toDoItem = document.createElement("div");
            toDoItem.classList.add('toDoItem')
            toDoItems.appendChild(toDoItem);

            var toDoItemText = document.createElement("div")
            toDoItemText.classList.add('toDoItemText')
            toDoItemText.classList.add('lineThrough')
            toDoItem.appendChild(toDoItemText);

            var removeButton = document.createElement("button")
            removeButton.classList.add("remove");
            removeButton.id = index
            removeButton.innerHTML = `<i class="fa fa-trash-o" style="font-size:24px"></i>`
            removeButton.addEventListener("click", removeFromTickedList)
            toDoItem.appendChild(removeButton);

            toDoItemText.textContent = item;
        }
    )
}
