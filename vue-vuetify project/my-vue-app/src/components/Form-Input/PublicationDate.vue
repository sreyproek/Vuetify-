<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :value="formattedDate"
        :label="label"
        readonly
        v-bind="attrs"
        v-on="on"
        append-icon="mdi-calendar"
      ></v-text-field>
    </template>

    <v-date-picker
      v-model="selectedDate"
      @input="updateDate"
      :max="maxDate"
      scrollable
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: "PublicationDate",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "Publication date",
    },
    maxDate: {
      type: String,
      default: new Date().toISOString().substr(0, 10), // Default to today's date
    },
  },
  data() {
    return {
      menu: false,
      selectedDate: this.modelValue, // Initialize selectedDate with the prop value
    };
  },
  computed: {
    formattedDate() {
      if (!this.selectedDate) return "";
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(this.selectedDate).toLocaleDateString(undefined, options);
    },
  },
  methods: {
    updateDate(date) {
      this.selectedDate = date;
      this.menu = false;
      this.$emit("update:modelValue", date); // Emit the new date value to the parent
    },
  },
  watch: {
    modelValue(newVal) {
      this.selectedDate = newVal; // Update selectedDate when modelValue changes
    },
  },
};
</script>

<style scoped>
</style>
