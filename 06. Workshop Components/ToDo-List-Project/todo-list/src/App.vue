<template>
  <div class="container">
    <button @click="changeTab('add-todo')">Add</button>
    <button @click="changeTab('incompleted-todos')">ToDo</button>
    <button @click="changeTab('completed-todos')">Complete</button>

    <!-- <add-todo></add-todo>
    <incompleted-todos></incompleted-todos>
    <completed-todos></completed-todos> -->

    <component :is="activeTab"></component>

  </div>
</template>

<script>
/* eslint-disable */
import AddTodo from './components/AddTodo'
import CompletedTodos from './components/CompletedTodos'
import IncompletedTodos from './components/IncompletedTodos'


export default {
  name: "app",
  data: function() {
    return {
      activeTab: 'add-todo'
    }

  },
  components: {
    AddTodo, 
    CompletedTodos, 
    IncompletedTodos
  },
  methods: {
    changeTab(tabName){
      this.activeTab = tabName;
    }
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

/* Add Item  */
label[for="new-task"] {
  display: block;
  margin: 0 0 20px;
}
input#new-task {
  float: left;
  width: 318px;
}
p > button:hover {
  color: #0fc57c;
}
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
