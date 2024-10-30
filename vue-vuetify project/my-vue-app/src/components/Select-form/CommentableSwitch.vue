<template>
  <v-switch
    label="Commentable"
    v-model="commentable"
    color="green"
    style="margin-top: 5px"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    commentable: {
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
