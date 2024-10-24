<template>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <TickButton
        @tick-changed="toggleTask(index)"
        :is-ticked="task.completed"
      />
      <span :class="{ completed: task.completed }">{{ task.text }}</span>
      <button
        class="btn"
        @click="task.completed ? deleteTask(index) : null"
        :disabled="!task.completed"
      >
        Delete
      </button>
    </li>
  </ul>
</template>

<script>
import TickButton from "./TickButton.vue";

export default {
  name: "TaskList",
  components: {
    TickButton,
  },
  props: {
    tasks: Array,
  },
  methods: {
    deleteTask(index) {
      this.$emit("delete-task", index);
    },
    toggleTask(index) {
      this.$emit("toggle-task", index);
    },
  },
};
</script>

<style>
ul {
  width: 100%;
}

li {
  display: flex;
  justify-content: space-between;
  background-color: rgb(83, 61, 125);
  border-radius: 10px;
  padding: 8px 15px;
  margin: 10px 0;
  color: white;
  font-size: larger;
  width: 620px;
}
/* 
.completed {
  color: #d4d4d4;
  padding: 100px 20px;
} */

.btn {
  padding: 5px 15px;
  border-radius: 8px;
  color: white;
  background-color: #4a70b8;
  border: none;
  font-weight: bold;
  height: 40px;
  width: 70px;
  padding: 10px;
}
</style>
