

<template>
  <button class="add" @click="handleClick">Add</button>
</template>

<script>
export default {
  name: 'AddButton',
  methods: {
    handleClick() {
      this.$emit('button-clicked');
    }
  }
}
</script>

<style scoped>
.add {
  padding: 10px 10px;
  border-radius: 10px; 
  color: white;
  background-color: #a415ba; 
  border: none;
  font-weight: bold;
  height: 40px;
  width: 60px;
}
</style>
