<template>
  <div>
    <h3>Todo</h3>
    <ul id="incomplete-tasks">
      <li>
        <label>Feed the Cat</label>
        <button class="complete">Complete</button>
        <button class="delete">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'incompleted-todos'
};
</script>

<style>
</style>
