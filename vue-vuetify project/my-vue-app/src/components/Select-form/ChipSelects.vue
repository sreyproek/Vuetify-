<template>
  <v-select
    v-model="value"
    :items="items"
    label="Formats"
    chips
    multiple
    style="margin-top: 4px;"
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