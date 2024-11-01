
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
    <div class="d-btn">
      <v-btn color="blue" @click="editCard">
        <v-icon left>mdi-pencil</v-icon> Edit
      </v-btn>
      <v-btn class="v-btn1" color="red" @click="deleteCard">
        <v-icon left>mdi-delete</v-icon> Delete
      </v-btn>
    </div>
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
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    cardFields() {
      return {
      Publisher: Array.isArray(this.data.publisher) ? this.data.publisher.join(", ") : this.data.publisher,
      Isbn: this.data.isbn,
      Category: Array.isArray(this.data.category) ? this.data.category.join(", ") : this.data.category,
      Title: this.data.title,
      Price: this.data.price,
      Formats: Array.isArray(this.data.formats) ? this.data.formats.join(", ") : this.data.formats,
      Authors: Array.isArray(this.data.authors) ? this.data.authors.join(", ") : this.data.authors,
      Tags: Array.isArray(this.data.tags) ? this.data.tags.join(", ") : this.data.tags,
      Publication_Date: this.data.PublicationDate,
      Description: this.data.description,
      };
    },
  },
  methods: {
  editCard() {
    this.$emit("edit-card",this.index);
  },
    deleteCard() {
      this.$emit("delete-card", this.index);
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
.v-btn {
  border-radius: 30px;
  padding: 10px 20px;
  margin-right: 20px;
}
.v-btn1 {
  border-radius: 30px;
  padding: 10px 20px;
  margin-right: 10px;
}
.d-btn {
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>

