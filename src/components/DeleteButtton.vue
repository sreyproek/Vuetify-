<!-- 
<template>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <span :class="{ completed: task.completed }">{{ task.text }}</span>
      <TickButton
        @tick-changed="toggleTask(index)" 
        :is-ticked="task.completed"
      />
      <button @click="deleteTask(index)">Delete</button>
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

</style> -->