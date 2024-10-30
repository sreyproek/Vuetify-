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
      availableTags: [],
    };
  },
  methods: {
    getTags() {
      return this.tags;
    },
  },
};
</script>
