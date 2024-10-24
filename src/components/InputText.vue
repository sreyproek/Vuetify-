
<template>
  <input v-model="inputValue" @input="updateValue" placeholder="Add a new task..." />
</template>

<script>
export default {
  name: 'InputText',
  props: ['value'],
  data() {
    return {
      inputValue: this.value || ''
    };
  },
  methods: {
    updateValue() {
      this.$emit('input', this.inputValue);
    }
  },
}
</script>

<style>
input {
  padding: 10px ;
  margin-bottom: 20px;
  border: 1px solid #a67cb1; 
  border-radius: 8px; 
  background-color: #f9f8fd;
  color: black; 
  width: 500px;
  height: 20px;
  font-size: medium;
}

input::placeholder {
  color: #8d8b8b;
  font-size:medium;
}
</style>
