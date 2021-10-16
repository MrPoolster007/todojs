// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOpt = document.querySelector('.filter-todo');

// Event Listeners
//document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOpt.addEventListener('change', filterTodo);

// Functions
function addTodo(e) {
    // Prevent from submmitting
    e.preventDefault();
    //console.log('Namaste Duniya...');

    // Creating Todo div
    const todoDiv = document.createElement('div');
    // Adding todo class to our div element
    todoDiv.classList.add("todo")
    // Create li
    const newTodo = document.createElement('li')
    // Adding todoinput to our list
    newTodo.innerText = todoInput.value;
    // Adding todo-item class to our li element
    newTodo.classList.add('todo-item')
    // Appending [newTodo]li => [todo]div
    todoDiv.appendChild(newTodo);
    
    // ADD TODO TO LOCAL STORAGE
    //saveLocalTodos(todoInput.value)

    // CHECK MARK BUTTON
    // create completed button
    const completdButton = document.createElement('button')
    // Add html tag in js using .innerhtml
    completdButton.innerHTML = '<i class="fas fa-check"></i>'
    completdButton.classList.add("complete-btn")
    todoDiv.appendChild(completdButton)

    // CHECK TRASH BUTTON
    const trashButton = document.createElement('button')
    // Add html tag in js using .innerhtml
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)

    // APPEND TO LIST
    todoList.appendChild(todoDiv)
    // Clear todoInput value
    todoInput.value = ""
}

function deleteCheck(e) {
    //  Print out what we are clicking
    //console.log(e.target)

    const item = e.target;
    // Delete Todo.      [0] is first class here
    if (item.classList[0] === 'trash-btn') {

        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            // for deleting whole todo we need to give command to parent of item
            todo.remove();
        });
    }

    // CHECK MARK
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break
        }
    });
}

// function saveLocalTodos(todo) {
//     // CHECK TODO-LIST EXISTS OR NOT?
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }

//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// FOR CLEARING LOCAL STORAGE
// localStorage.clear() 

// function getTodos(){
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
    
//     todos.forEach(function(todo){
//         const todoDiv = document.createElement('div');
//         // Adding todo class to our div element
//         todoDiv.classList.add("todo")
//         // Create li
//         const newTodo = document.createElement('li')
//         // Adding todoinput to our list
//         newTodo.innerText = todo;
//         // Adding todo-item class to our li element
//         newTodo.classList.add('todo-item')
//         // Appending [newTodo]li => [todo]div
//         todoDiv.appendChild(newTodo);

//         // CHECK MARK BUTTON
//         // create completed button
//         const completdButton = document.createElement('button')
//         // Add html tag in js using .innerhtml
//         completdButton.innerHTML = '<i class="fas fa-check"></i>'
//         completdButton.classList.add("complete-btn")
//         todoDiv.appendChild(completdButton)

//         // CHECK TRASH BUTTON
//         const trashButton = document.createElement('button')
//         // Add html tag in js using .innerhtml
//         trashButton.innerHTML = '<i class="fas fa-trash"></i>'
//         trashButton.classList.add("trash-btn")
//         todoDiv.appendChild(trashButton)

//         // APPEND TO LIST
//         todoList.appendChild(todoDiv)
//     });
// }