<template>
    <v-container>
      <!-- Date Picker Component -->
      <DatePicker @date-change="updateDate" />
  
      <!-- SummaryCard Component with updated data prop -->
      <SummaryCard :data="summaryData" />
    </v-container>
  </template>
  
  <script>
  import DatePicker from './DatePicker.vue';
  import SummaryCard from './SummaryCard.vue';
  
  export default {
    components: {
      DatePicker,
      SummaryCard,
    },
    data() {
      return {
        selectedDate: null, // Store the selected date here
        summaryData: {
          publisher: ['Publisher Name'],
          isbn: '123-456-789',
          category: ['Category1', 'Category2'],
          title: 'Sample Title',
          price: '$100',
          formats: ['eBook', 'Hardcover'],
          authors: ['Author1', 'Author2'],
          tags: ['Tag1', 'Tag2'],
          dateFormatted: '', // This will be set by the DatePicker
          description: 'Sample description',
        },
      };
    },
    methods: {
      updateDate(date) {
        this.summaryData.dateFormatted = date; // Update publication date in summaryData
      },
    },
  };
  </script>
  