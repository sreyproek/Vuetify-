<template>
  <v-combobox
    label="Tags"
    v-model="tags"
    :items="availableTags"
    style="margin-top:"
  ></v-combobox>
</template>

<script>
export default {
  data() {
    return {
      tags: [],
      availableTags: ["Schuppe, Lockman and Dooley","Fantasy","Example1", "Example2", "Example3"],
    };
  },
  methods: {
    getTags() {
      return this.tags;
    },
  },
};
</script>
