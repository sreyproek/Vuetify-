<template>
  <v-container>
    <v-row>
      <v-col>
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="600px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dateFormatted"
              label="Publication Date"
              persistent-hint
              append-icon="mdi-calendar" 
              @click:append="menu1 = true"
              readonly
              v-on="on"
            ></v-text-field>
          </template>

          <v-date-picker
            v-model="date"
            no-title
            :allowed-dates="allowedDates"
            min="2014-06-15"
            max="2025-03-20"
            @input="updateDate"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10), 
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
    };
  },

  watch: {
    date(newDate) {
      this.dateFormatted = this.formatDate(newDate); 
    },
  },

  methods: {
    formatDate(date) {
      if (!date) return null;
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    updateDate() {
      this.menu1 = false; 
    },
    allowedDates(date) {
      const day = new Date(date).getDay();
      // Allow all days; customize as needed
      return day >= 1 && day <= 5; // Example: Only allow Monday through Friday
    },
  },
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
