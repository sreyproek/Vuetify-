<template>
  <v-container class="container">
    <v-textarea
      label="Description"
      v-model="description"
      :readonly="readonly" 
    />
  </v-container>
</template>

<script>
export default {
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
    modelValue: String,
  },
  computed: {
    description: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style scoped>
.container{
  width: 1200px;
}
</style>
