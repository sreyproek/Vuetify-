<template>
  <div id="app">
    <h2 class="title">Task List</h2>
    <div class="input-container">
      <InputText v-model="newTask" />
      <AddButton @button-clicked="addTask" />
    </div>

    <TaskList
      :tasks="tasks"
      @delete-task="deleteTask"
      @toggle-task="toggleTask"
    />

    <div class="line"></div>

    <div class="footer">
      <div class="footer-p">
        <h4>You have {{ pendingTasks }}  pending tasks</h4>
      </div>

      <button class="footer-b" @click="deleteAllCompleted" :disabled="!hasCompletedTasks"> Delete All</button>
    </div>
  </div>
</template>

<script>
import AddButton from "./components/AddButton.vue";
import InputText from "./components/InputText.vue";
import TaskList from "./components/TaskList.vue";

export default {
  name: "App",
  components: {
    InputText,
    AddButton,
    TaskList,
  },
  data() {
    return {
      newTask: "",
      tasks: [],
      pendingTasks:0,
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = "";
        this.pendingTasks++; 
      }
    },
    deleteTask(index) {
      if (!this.tasks[index].completed) {
        this.pendingTasks--;
      }
      this.tasks.splice(index, 1);
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
      if (this.tasks[index].completed) {
        this.pendingTasks--; 
      } else {
        this.pendingTasks++; 
      }
    },
    deleteAllCompleted() {
      this.tasks = this.tasks.filter((task) => !task.completed); 
    },
  },
  computed: {
    hasCompletedTasks() {
      return this.tasks.some((task) => task.completed);
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #e8ddf2;
  margin-bottom: 10px;
}

.title {
  color: rgb(241, 31, 241);
  font-size: xx-large;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-container {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 10px;
}
.line {
  color: black;
  width: 100%;
  height:1px;
  background-color: rgb(202, 199, 199);
}
.footer {
  display: flex;
  justify-content: space-between;
  gap: 400px;
}
.footer-p{
  font-family: "Arial Narrow Bold", sans-serif;
}
.footer-b{
  margin-top: 15px;
  width:90px;
  height: 35px;
  padding: 6px 5px;
  border: none;
  color: white;
  font-weight: bold;
  background-color:  rgb(127, 124, 124);
}
.footer-b:disabled {
  background-color: rgb(211, 209, 209);
  cursor: not-allowed;
}
</style>
