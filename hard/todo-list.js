/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
      constructor(){
        this.storage = [];
      }
      add(todo){
        this.storage.push(todo);
      }
      remove(index){
        if(index<this.storage.length){
          this.storage.splice(index , 1);
              }
      }
      update(index , newTodo){
        if(index<this.storage.length)
        this.storage[index] = newTodo;
      }
      getAll(){
        return this.storage;
      }
      get(index){
        if(index<this.storage.length)
        return this.storage[index];
        else return null;
      }
      clear(){
        this.storage = [];
      }

}

module.exports = Todo;
