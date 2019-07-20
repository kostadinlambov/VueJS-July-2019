<template>
  <div>
    <h3>Todo</h3>
    <ul id="incomplete-tasks">
      <!-- <li v-for="todo in incompletedTodos" :key="todo.id">
        <label>{{todo.name}}</label>
        <button class="complete" @click="completeTodo(todo.id)">Complete</button>
        <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
      </li> -->
      <todo-item 
        v-for="todo in incompletedTodos" 
        :key="todo.id"
        :todo="todo"
      >

      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem';
export default {
    name: 'incompleted-todos',
    components: {
        TodoItem
    },
    props: {
        incompletedTodos: {
            type: Array,
            requred: true,
        }
    },
};
</script>

<style>

</style>
