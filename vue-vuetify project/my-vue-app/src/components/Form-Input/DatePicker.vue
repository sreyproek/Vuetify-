<template>
  <v-container>
    <v-row justify="center">
      <v-text-field
        :model-value="modelValue"
        label="Publication Date"
        append-icon="mdi-calendar"
        @click:append="showDatePicker = true"
        readonly
      ></v-text-field>
      <v-dialog v-model="showDatePicker" max-width="290px">
        <v-date-picker
          :model-value="modelValue"
          color="primary"
          class="date-picker"
          @input="updateDate"
          :allowed-dates="allowedDates"
          @update:model-value="$emit('update:model-value', $event)"
        ></v-date-picker>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Date,
    },
  },
  data() {
    return {
      showDatePicker: false,
      date: new Date(),
      dateFormatted: this.formatDate(new Date()),
    };
  },
  watch: {
    date(newDate) {
      this.dateFormatted = this.formatDate(newDate);
    },
  },
  methods: {
    formatDate(date) {
      if (!date);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return date.toLocaleDateString(undefined, options);
    },
    updateDate() {
      this.showDatePicker = false;
    },
    allowedDates(date) {
      const day = new Date(date).getDay();
      return day >= 1 && day <= 7;
    },
  },
};
</script>

<style scoped>
.date-picker {
  max-width: 570px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: #f0f4f8;
  padding: 10px;
}
</style>
