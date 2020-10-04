var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("ListTodo")) || []; //se não achar um valor seta o outro!
 
function renderTodo(){
    listElement.innerHTML = ""

    for(todo of todos){
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement("a");
        var linkText = document.createTextNode(" Excluir");
        var pos = todos.indexOf(todo);
        
        linkElement.setAttribute("href", "#");
        linkElement.setAttribute("onclick", `excluirTodo(${pos})`);
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodo();

function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";
    inputElement.focus();

    renderTodo();
    saveTodo();
}

buttonElement.onclick = addTodo;

function excluirTodo(pos){
    todos.splice(pos,1);
    renderTodo();
    saveTodo();
}

function saveTodo(){
    localStorage.setItem("ListTodo", JSON.stringify(todos));
}