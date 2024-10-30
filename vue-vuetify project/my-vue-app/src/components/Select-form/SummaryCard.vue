
<template>
  <v-card class="ma-3">
    <v-card-text>
      <v-row>
        <v-col
          v-for="(value, label) in cardFields"
          :key="label"
          cols="12"
          sm="6"
          class="d-flex align-center"
        >
          <v-list-item-title class="text-body-1">
            <strong>{{ label }}:</strong> {{ value }}
          </v-list-item-title>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SummaryCard",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    cardFields() {
      return {
        Publisher: this.data.publisher.join(", "), 
        Isbn: this.data.isbn,
        Category: this.data.category.join(", "), 
        Title: this.data.title,
        Price: this.data.price,
        Formats: this.data.formats.join(", "), 
        Authors: this.data.authors.join(", "), 
        Tags: this.data.tags.join(", "), 
        Publication: this.data.publicationDate,
        Description: this.data.description,
      };
    },
  },
};
</script>

<style scoped>
.v-card {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 5px;
}
.ma-3 {
  max-width: 1200px;
}
.v-list-item-title {
  font-size: 14px;
}
</style>
