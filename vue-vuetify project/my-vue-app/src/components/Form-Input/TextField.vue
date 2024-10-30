<template>
  <v-text-field
    v-model="internalValue" 
    :label="label"
    :rules="rules"
    required
  ></v-text-field>
</template>

<script>
export default {
  name: "TextField",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      internalValue: this.modelValue,  
    };
  },
  watch: {
    modelValue(newVal) {
      this.internalValue = newVal;  
    },
    internalValue(newVal) {
      this.$emit("update:modelValue", newVal);  
    },
  },
};
</script>
