import React from "react";
import './App.css';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        let state = { show: true };
        this.state = state;
    };

    remove = () => {
        this.setState({ show: false });
    };

    render() {
        let component = <div className="todo-item"> <p>{this.props.name}</p> <button id="delete" onClick={this.remove}>Delete</button> <input type="checkbox"/> </div>
        return (
            <>
                {this.state.show ? component : null}
            </>
        );
    };
};

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.todos = [
          { name: "Learn React"},
          { name: "Learn Firebase"},
          { name: "Learn GraphQL"},
        ];
        this.state = { todos: this.todos };
    }

    //update the view when the user clicks the submit button
    onsubmit = () => {
        //get the value of the input field
        const todo = document.getElementById("todo-input").value;
        var hasVal = false;
        for (let key in this.todos) { if (this.todos[key] === todo) { hasVal = true; break; }}
        //create a new todo item if it doesn't already exist
        if (todo !== "" && hasVal === false) {
            this.todos.push({ name: todo });
            //update the view
            this.setState({ todos: this.todos });
            console.table(this.todos);
        } else if (todo === "") {
            alert("Please enter a todo item");
        } else if (hasVal === true) {
            let index = this.todos.indexOf(todo);
            delete this.todos[index];
            this.setState({ todos: this.todos });
            console.table(this.todos);
        };  
    };

    render() {
      return (
          <>
            <div className="todo-list">
                {this.todos.map((todo, index) => (
                    <Todo key={index} name={todo.name}/>
                ))}
            </div>
            <input id="todo-input" type="text" placeholder="Add a new todo"/>
            <button onClick={this.onsubmit}>Submit</button>
          </>
      );
    }
}

function App() {
    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoList />
        </div>
  );
}

export default App;
