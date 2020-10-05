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

//https://app.rocketseat.com.br/node/curso-java-script-es-6/group/conceitos/lesson/const-and-let