const toDoFrom = document.getElementById('todo-form')
const toDoInput = toDoFrom.querySelector("#ww")
const toDoList = document.querySelector("#todo-list")
const btn = document.querySelector("#go")

let toDos = []

function deleteTodo(event){
    const li = event.target.parentElement
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    li.remove()
    saveToDos()
}

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos))
}

const paintSomething = (newTodo) => {
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    const button = document.createElement("button")
    button.innerText = "✅"
    button.classList.add("dTodo")
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    span.innerText = newTodo.text
    toDoList.appendChild(li)
    console.log("It's working now :)")
}

function why(event){
    event.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value = "";
    const newTOdo = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTOdo)
    paintSomething(newTOdo)
    saveToDos()
}

btn.addEventListener("click", why)

const saved = localStorage.getItem("todos")

if(saved){
    const parsedTodo = JSON.parse(saved)
    toDos = parsedTodo
    parsedTodo.forEach(paintSomething)
}

function sexyFilter(){
    console
}

