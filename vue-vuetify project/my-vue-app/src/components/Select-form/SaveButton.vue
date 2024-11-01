
<template>
  <v-btn
    :color="isLoading ? 'grey' : 'green'" 
    dark
    class="save-button"
    @click="handleClick"  
    :disabled="isLoading" 
  >
    <v-icon left v-if="isLoading">mdi-loading</v-icon> 
    <v-icon left v-else>mdi-content-save</v-icon> 
    {{ label }} 
  </v-btn>
</template>

<script>
export default {
  name: "SaveButton",
  props: {
    label: {
      type: String,
      default: "Save",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(event) {
      if (this.isLoading) return;  

      this.$emit("click", event);  
    },
  },
};
</script>

<style scoped>
.save-button {
  font-weight: bold;
  text-transform: uppercase;
  padding: 12px 24px; 
  transition: background-color 0.3s ease; 
}
.save-button:hover {
  background-color: #388e3c; 
}
</style>
