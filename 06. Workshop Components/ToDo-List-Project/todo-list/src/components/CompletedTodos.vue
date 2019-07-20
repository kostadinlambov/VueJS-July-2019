<template>
  <div>
    <h3>Completed</h3>
    <ul id="completed-tasks">
      <li v-for="todo in completedTodos" :key="todo.id">
        <label>{{todo.name}}</label>
        <button class="restore" @click="restoreTodo(todo.id)">Restore</button>
        <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'completed-todos',
    props:{
        completedTodos: {
            type: Array,
            required: true,
        }
    },
    methods: {
        restoreTodo(todoId){
            this.$emit('restore-todo', todoId);
        },
        deleteTodo(todoId){
            this.$emit("delete-todo", todoId)
        }
    }
};
</script>

<style scoped>
/* Completed Tasks */
#completed-tasks label {
  text-decoration: line-through;
  color: #888;
}

li {
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}
li > label {
  font-size: 18px;
  line-height: 40px;
  width: 237px;
  padding: 0 0 0 11px;
}
li > .delete:hover {
  color: #cf2323;
}
</style>
