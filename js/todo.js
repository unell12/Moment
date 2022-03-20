const toDoFrom = document.getElementById('todo-form')
const toDoInput = toDoFrom.querySelector("#ww")
const toDoList = document.querySelector("#todo-list")
const btn = document.querySelector("#go")

function deleteTodo(event){
    const li = event.target.parentElement
    li.remove()
}

const paintSomething = (newTodo) => {
    const li = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button")
    button.innerText = "✅"
    button.classList.add("dTodo")
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    span.innerText = newTodo
    toDoList.appendChild(li)
    console.log("It's working now :)")
}

function why(event){
    event.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value = ""
    paintSomething(newTodo)
}

btn.addEventListener("click", why)