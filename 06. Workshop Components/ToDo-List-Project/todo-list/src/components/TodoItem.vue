<template>
  <li>
    <input v-if="todo.edit" @keyup.enter="finishEdit()" v-model="newName" type="text"  />
    <label v-else @dblclick="editTodo(todo.id)">{{todo.name}}</label>
    <button class="complete" @click="completeTodo(todo.id)">Complete</button>
    <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
  </li>
</template>

<script>
export default {
  name: "todo-item",
  data(){
      return {
          newName: this.todo.name
      }
  },
  props: {
    todo: {
      type: Object,
      required: true,

    }
  },
  methods: {
    completeTodo(todoId) {
      this.$root.$emit("complete-todo", todoId);
    },
    deleteTodo(todoId) {
      this.$root.$emit("delete-todo", todoId);
    },
    editTodo(todoId) {
    //   this.todo.edit = true;
    this.$root.$emit("begin-edit-todo", this.todo.id);
    },
    finishEdit(todoId) {
    //   this.todo.edit = false;
      this.$root.$emit("finish-edit-todo", Object.assign({}, this.todo, {name: this.newName}));
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
