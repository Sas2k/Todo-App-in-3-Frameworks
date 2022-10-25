<script>
// @ts-nocheck

var todos = [{text: 'Learn Svelte', done: true}, {text: 'Learn Vue', done: true}, {text: 'Learn React', done: true}];
var removeTodo = (todo) => { todos.splice(todos.indexOf(todo), 1); todos = todos; }
var addTodo = (todo) => todos = [...todos, {text: todo, done: false}];
</script>


{#each todos as todo}
<div class="todo-item">
    <input type="checkbox" bind:checked={todo.done}>
    <span class="todo-text">{todo.text}</span>
    <button on:click={removeTodo}>X</button>
</div>
{/each}

<input type="text" placeholder="Add a todo" on:keyup={e => e.keyCode === 13 && addTodo(e.target.value)}>