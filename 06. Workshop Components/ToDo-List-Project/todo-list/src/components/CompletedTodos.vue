<template>
  <div>
    <h3>Completed</h3>
    <ul id="completed-tasks">
      <li>
        <label>Go to Gym</label>
        <button class="restore">Restore</button>
        <button class="delete">Delete</button>
      </li>
      <li>
        <label>Go to Store</label>
        <button class="restore">Restore</button>
        <button class="delete">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'completed-todos',
};
</script>

<style>
</style>
