<template>
  <div class="container">
    <button @click="changeTab('add-todo')">Add</button>
    <button @click="changeTab('incompleted-todos')">ToDo</button>
    <button @click="changeTab('completed-todos')">Complete</button>

    <keep-alive>
      <component
        :is="activeTab"
        :incompletedTodos="incompletedTodos"
        :completedTodos="completedTodos"
        @add-todo="onAddTodo"
       
      ></component>
    </keep-alive>
  </div>
</template>

<script>
/* eslint-disable */
import AddTodo from "./components/AddTodo";
import CompletedTodos from "./components/CompletedTodos";
import IncompletedTodos from "./components/IncompletedTodos";
import { todos } from "./data/todos";

export default {
  name: "app",
  components: {
    AddTodo,
    CompletedTodos,
    IncompletedTodos
  },
  data: function() {
    return {
      activeTab: "add-todo",
      todoIncrementId: todos.length,
      todos
    };
  },

  computed: {
    incompletedTodos() {
      return this.todos.filter(x => x.completed == false);
    },
    completedTodos() {
      return this.todos.filter(x => x.completed == true);
    }
  },
  methods: {
    changeTab(tabName) {
      this.activeTab = tabName;
    },
     getTodo(id) {
      return this.todos.find(x => x.id === id);
    },
    onAddTodo(todoName) {
      this.todos.push({
        id: this.todoIncrementId++,
        name: todoName,
        completed: false,
        edit: false,
      });
    },
    onCompleteTodo(todoId) {
      let currentTodo = this.getTodo(todoId);
      currentTodo.completed = true;
    },
    onRestoreTodo(todoId) {
      let currentTodo = this.getTodo(todoId);
      currentTodo.completed = false;
    },
    onDeleteTodo(todoId) {
      let currentTodo = this.getTodo(todoId);
      this.todos = this.todos.filter(x => x.id != todoId);
    },
    onEditTodo(todoId){
      if(this.todos.some(t => t.edit)){
        return;
      }
      let currentTodo = this.getTodo(todoId);
      currentTodo.edit = true;
    },
    onFinishEditTodo(modifiedTodo){
      // let currentTodo = this.getTodo(modifiedTodo.todoId);
      // currentTodo.edit = false;

      this.todos = this.todos.map(x => {
        if(x.id === modifiedTodo.id){
          modifiedTodo.edit = false;
          return modifiedTodo;
        }

        return x;
      })
    },
    addEventListeners(){
      this.$root.$on('delete-todo', this.onDeleteTodo);
      this.$root.$on('complete-todo', this.onCompleteTodo);
      this.$root.$on('restore-todo', this.onRestoreTodo);
      this.$root.$on('begin-edit-todo', this.onEditTodo);
      this.$root.$on('finish-edit-todo', this.onFinishEditTodo);
    }
  },
  mounted(){
    this.addEventListeners();
  }
};
</script>

<style>
body {
  background: #fff;
  color: #333;
  font-family: Lato, sans-serif;
}
.container {
  display: block;
  width: 400px;
  margin: 100px auto 0;
}
ul {
  margin: 0;
  padding: 0;
}
li * {
  float: left;
}
li,
h3 {
  clear: both;
  list-style: none;
}
input,
button {
  outline: none;
}
button {
  background: none;
  border: 0px;
  color: #888;
  font-size: 15px;
  width: 60px;
  margin: 10px 0 0;
  font-family: Lato, sans-serif;
  cursor: pointer;
}
button:hover {
  color: #333;
}
h3,
label[for="new-task"] {
  color: #333;
  font-weight: 700;
  font-size: 15px;
  border-bottom: 2px solid #333;
  padding: 30px 0 10px;
  margin: 0;
  text-transform: uppercase;
}
input[type="text"] {
  margin: 0;
  font-size: 18px;
  line-height: 18px;
  height: 18px;
  padding: 10px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 6px;
  font-family: Lato, sans-serif;
  color: #888;
}
input[type="text"]:focus {
  color: #333;
}
</style>
