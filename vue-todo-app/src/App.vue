<script setup>
import TodoComponent from './components/TodoComponent.vue';
</script>

<template>
  <header>
    <h1 :class="title">Todo App</h1>
  </header>

  <main>
    <TodoComponent />
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  background-color: coral;
}

.title {
  color: black;
  text-align: center;
  line-height: 2.0;
}
</style>
