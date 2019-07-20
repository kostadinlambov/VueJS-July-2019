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
