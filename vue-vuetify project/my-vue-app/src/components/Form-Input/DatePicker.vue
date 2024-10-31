
<template>
  <v-container>
    <v-row class="row-container" justify="center">
      <v-menu
        ref="menu1"
        v-model="menu1"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="dateFormatted"
            label="Publication Date"
            append-icon="mdi-calendar"
            @click:append="menu1 = true"
            readonly
            v-on="on"
          ></v-text-field>
        </template>

        <div v-if="menu1" class="date-picker-overlay" @click.self="menu1 = false">
          <v-date-picker
            v-model="date"
            color="primary"
            class="date-picker"
            @input="updateDate"
            :allowed-dates="allowedDates"
          ></v-date-picker>
        </div>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      dateFormatted: this.formatDate(new Date()),
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
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString(undefined, options);
    },
    updateDate() {
      this.menu1 = false;
    },
    allowedDates(date) {
      const day = new Date(date).getDay();
      return day >= 1 && day <= 7;
    },
  },
};
</script>

<style scoped>
.row-container {
  width: 570px;
}
.date-picker-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.date-picker {
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: #f0f4f8;
  padding: 16px;
}
</style>
