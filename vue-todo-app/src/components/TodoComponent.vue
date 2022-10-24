<script>
    export default {
        newTodo : '',
        data(){
            return {
                todos: [
                    {
                        title: 'Learn Vue'
                    },
                    {
                        title: 'Learn React'
                    },
                    {
                        title: 'Learn Angular'
                    }
                ]
            }
        },
        methods: {
            addTodo(){
                this.todos.push({
                    title: this.newTodo
                })
            },
            removeTodo(id){
                this.todos.splice(id, 1)
            }
        }
    };
</script>

<template>
    <div>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{ todo.title }}
                <input type="checkbox" @click="makecross" />
                <button @click="removeTodo">X</button>
            </li>
        </ul>
        <input type="text" v-model="newTodo" @keyup.enter="addTodo">
    </div>
</template>