<template>
  <v-container class="container">
    <v-row class="row-container">
      <v-text-field
        label="Price"
        v-model="price"
        outlined
        type="number"
      ></v-text-field>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      price: "",
    };
  },
  methods: {
    getPrice() {
      return this.price;
    },
  },
};
</script>

<style scoped>
.container {
  width: 1200px;
}

.row-container {
  width: 560px;
}
</style>
