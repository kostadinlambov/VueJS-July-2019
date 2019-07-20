<template>
    <div>
      <label for="new-task">Add Item</label>
      <input id="new-task" type="text" v-model="todoName"/>
      <button @click="addNewTodo">Add</button>
    </div>
</template>

<script>
export default {
    name: 'add-todo',
    data() {
        return{
            todoName:''
        }
    },
    methods: {
        addNewTodo() {
            if(this.todoName.trim().length < 1){
                return;
            }

           this.$emit('add-todo', this.todoName);

           this.todoName = '';
        }
    }
}
</script>

<style scoped>
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
</style>
