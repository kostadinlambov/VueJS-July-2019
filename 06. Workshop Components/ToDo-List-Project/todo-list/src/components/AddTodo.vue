<template>
    <p>
      <label for="new-task">Add Item</label>
      <input id="new-task" type="text" />
      <button>Add</button>
    </p>
</template>

<script>
export default {
    name: 'add-todo',

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
