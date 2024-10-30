<template>
  <v-card class="ma-3">
    <v-card-text>
      <v-list dense>
        <v-list-item
          v-for="(value, label) in cardFields"
          :key="label"
          class="d-flex align-center"
        >
          <v-list-item-title class="text-body-1">
            <strong>{{ label }}:</strong> {{ value }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
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
        Publisher: this.data.Publisher,
        Isbn: this.data.isbn,
        Category: this.data.category,
        Price: this.data.price,
        Formats: this.data.formats.join(", "),
        Authors: this.data.authors.join(", "),
        Tags: this.data.tags.join(", "),
        "Publication Date": this.data.publicationDate,
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
}
.ma-3 {
  max-width: 1200px;
}
.v-list-item-title {
  font-size: 16px;
}
</style>
