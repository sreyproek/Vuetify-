<template>
  <v-select class="v-select"
    v-model="value"
    :items="items"
    label="Formats"
    chips
    multiple
  ></v-select>
</template>

<script>
  export default {
    data: () => ({
      items: [],
      value: [],
    }),
  }
</script>
<style scoped>
.v-select{
  background: none;
  border: none;
}
</style>