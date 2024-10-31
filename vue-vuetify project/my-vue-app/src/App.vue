<template>
  <v-app>
    <div id="app">
      <v-container class="container" fluid>
        <v-row class="row-container">
          <v-col cols="6">
            <TagsCombobox
              v-model="DataPublisher"
              label="Publisher"
              :items="[
                'Schuppe, Lockman and Dooley',
                'Example1',
                'Example2',
                'Example3',
              ]"
              multiple
            />
            <TextField v-model="DataIsbn" label="Isbn" />
            <TagsCombobox
              v-model="DataCategory"
              label="Category"
              :items="['Fantasy', 'Example4', 'Example5', 'Example6']"
              multiple
            />
            <TextField v-model="DataTitle" label="Title" />
            <PriceInput v-model="DataPrice" label="Price" />
          </v-col>
          <v-col cols="6">
            <ChipSelects
              v-model="DataFormats"
              label="Formats"
              :items="[
                'Paperback',
                'Pocket',
                'Example7',
                'Example8',
                'Example9',
              ]"
              multiple
            />
            <CommentableSwitch v-model="isCommentable" label="Commentable" />
            <DatePicker v-model="date" label="Publication Date" />

            <ChipSelects
              v-model="DataAuthors"
              label="Authors"
              :items="[
                'Idella Brown',
                'Augustus Bradtke',
                'Example10',
                'Example11',
                'Example12',
              ]"
              multiple
            />
            <ChipSelects
              v-model="DataTags"
              label="Tags"
              :items="[
                'maxime',
                'quisquam',
                'magni',
                'voluptatem',
                'Example13',
                'Example14',
                'Example15',
              ]"
              multiple
            />
          </v-col>

          <DescriptionInput
            v-model="DataDescription"
            :readonly="!isCommentable"
            label="Description"
          />

          <v-col cols="12" class="text-left">
            <SaveButton label="Save" @click="saveData" />
          </v-col>
          <v-divider class="my-4"></v-divider>
        </v-row>

        <v-row class="row-container">
          <v-col cols="12">
            <h2 class="text-h5">Saved Data</h2>
            <v-row>
              <v-col
                cols="12"
                v-for="(entry, index) in savedEntries"
                :key="index"
              >
                <SummaryCard
                  :data="entry"
                  :index="index"
                  @edit-card="handleEditCard"
                  @delete-card="handleDeleteCard"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import DescriptionInput from "./components/Form-Input/DescriptionInput.vue";
import PriceInput from "./components/Form-Input/PriceInput.vue";
import TagsCombobox from "./components/Select-form/TagsCombobox.vue";
import CommentableSwitch from "./components/Select-form/CommentableSwitch.vue";
import ChipSelects from "./components/Select-form/ChipSelects.vue";
import TextField from "./components/Form-Input/TextField.vue";
import SaveButton from "./components/Select-form/SaveButton.vue";
import DatePicker from "./components/Form-Input/DatePicker.vue";
import SummaryCard from "./components/Select-form/SummaryCard.vue";

export default {
  name: "App",
  components: {
    SummaryCard,
    DescriptionInput,
    PriceInput,
    TagsCombobox,
    CommentableSwitch,
    ChipSelects,
    TextField,
    SaveButton,
    DatePicker,
  },
  data() {
    return {
      savedEntries: [],
      DataPrice: [],
      DataPublisher: ["Schuppe, Lockman and Dooley"],
      DataIsbn: "",
      DataCategory: ["Fantasy"],
      DataTitle: "Sequi quo sapiente",
      DataFormats: ["Paperback", "Pocket"],
      isCommentable: true,
      date: new Date(),
      DataAuthors: ["Idella Brown", "Augustus Bradtke"],
      DataTags: ["maxime", "quisquam", "magni", "voluptatem"],
      DataDescription: " ",
    };
  },
  computed: {
    summaryData() {
      return {
        publisher: this.DataPublisher,
        isbn: this.DataIsbn,
        category: this.DataCategory,
        title: this.DataTitle,
        price: this.DataPrice,
        formats: this.DataFormats,
        isCommentable: this.isCommentable,
        authors: this.DataAuthors,
        tags: this.DataTags,
        PublicationDate: this.date,
        description: this.DataDescription,
      };
    },
  },
  methods: {
    saveData() {
    const newEntry = { ...this.summaryData };
    const exists = this.savedEntries.some(entry => entry.isbn === newEntry.isbn);

    if (!exists) {
      this.savedEntries.push(newEntry);
      console.log('Data saved:', newEntry); 
      this.resetFields();
    } else {
      console.error('Duplicate entry, not saved:', newEntry); 
    }
  },
  // saveData() {
  //     this.savedEntries.push({ ...this.summaryData });
  //     this.resetFields();
  //   },

    handleEditCard(index) {
      console.log(`Editing card at index: ${index}`);
    },
    handleDeleteCard(index) {
      if (index >= 0 && index < this.savedEntries.length) {
        this.savedEntries.splice(index, 1);
        console.log(`Deleted card at index: ${index}`);
      } else {
        console.error(`Index out of bounds: ${index}`);
      }
    },
    resetFields() {
      this.dataPublisher = "";
      this.dataIsbn = "";
      this.dataCategory = [];
      this.dataTitle = "";
      this.dataPrice = "";
      this.dataFormats = [];
      this.isCommentable = false;
      this.date = new Date();
      this.dataAuthors = [];
      this.dataTags = [];
      this.dataDescription = "";
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.container {
  max-width: 1200px;
  margin: auto;
}
.row-container {
  display: flex;
  justify-content: space-between;
}
.text-h5 {
  margin-bottom: 20px;
}
.cts {
  widows: 600px;
}
</style>
