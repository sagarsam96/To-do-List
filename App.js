//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listeners
todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", deleteCheck);



//functions
function addTodo(event){
    // prevent form from submitting 
    event.preventDefault();
    
    // todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // create LI
    const newTodo = document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //check mark button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class= "fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

    //clear input bar
    todoInput.value="";

}


function deleteCheck(e){
    const item = e.target;

    //delete todo
    if(item.classList[0]==="trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }

    //checkmark
    if(item.classList[0]==="complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}











