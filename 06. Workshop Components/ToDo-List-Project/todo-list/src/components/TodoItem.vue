<template>
  <li>
    <label>{{todo.name}}</label>
    <button class="complete" @click="completeTodo(todo.id)">Complete</button>
    <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
  </li>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
   methods: {
        completeTodo(todoId){
            this.$root.$emit('complete-todo', todoId);
        },
        deleteTodo(todoId){
            this.$root.$emit('delete-todo', todoId);
        }
    }
};
</script>

<style scoped>
/* ToDo List */
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

button {
  margin: 0 0 0 10px;
}
</style>
