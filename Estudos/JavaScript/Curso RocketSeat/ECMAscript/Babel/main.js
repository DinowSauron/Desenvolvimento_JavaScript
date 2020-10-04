class MonoBehaviour {

    Getcomponent(type){
        var compElement = document.querySelector("#" + type);
        return compElement;
    }
}

class TodoList extends MonoBehaviour{
    constructor(){
        super(); // se herdar uma classe precisa do super
        this.todos = []
    }
    addTodo(){
        this.todos.push('novo todo');
        console.log(this.todos);
    }
}

var MinhaLista = new TodoList();

console.log(MinhaLista.Getcomponent('btnTodo'));
document.querySelector('#btnTodo').onclick = function(){
    MinhaLista.addTodo();
}

