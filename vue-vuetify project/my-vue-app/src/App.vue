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
              class="mb-4"
            />
            <TextField v-model="DataIsbn" label="Isbn" />
            <TagsCombobox
              v-model="DataCategory"
              label="Category"
              class="mb-4"
              :items="['Fantasy', 'Example4', 'Example5', 'Example6']"
              multiple
            />
            <TextField v-model="DataTitle" label="Title" class="mt-4" />
            <PriceInput v-model="DataPrice" label="Price" class="mt-4" />
          </v-col>

          <v-col cols="6">
            <ChipSelects
              v-model="DataFormats"
              label="Formats"
              class="mb-4"
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
            <PublicationDate
              v-model="publicationDate"
              label="Publication Date"
              class="mt-4"
            />
            <ChipSelects
              v-model="DataAuthors"
              label="Authors"
              class="mb-4"
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
        </v-row>

        <v-row class="row-container">
          <DescriptionInput
            v-model="DataDescription"
            :readonly="!isCommentable"
            label="Description"
          />
        </v-row>

        <v-row class="row-container">
          <v-col cols="12" class="text-left">
            <SaveButton label="Save" @click="saveData" />
          </v-col>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <v-row class="row-container">
          <v-col cols="12">
            <h2 class="text-h5">Saved Data</h2>
            <v-row>
              <v-col cols="12"
                v-for="(entry, index) in savedEntries"
                :key="index"
              >
                <SummaryCard
                  :data="entry"
                  @edit="editEntry(index)"
                  @delete="deleteEntry(index)"
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
import PublicationDate from "./components/Form-Input/PublicationDate.vue";
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
    PublicationDate,
  },
  data() {
    return {
      savedEntries: [],
      DataPublisher: "Schuppe, Lockman and Dooley",
      DataIsbn: "",
      DataCategory: "Fantasy",
      DataTitle: "Sequi quo sapiente",
      DataPrice: "",
      DataFormats: ["Paperback", "Pocket"],
      isCommentable: true,
      publicationDate: "1984-11-18",
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
        publicationDate: this.publicationDate,
        description: this.DataDescription,
      };
    },
  },
  methods: {
    saveData() {
      this.savedEntries.push({ ...this.summaryData });
      this.resetFields();
      console.log("Data saved:", this.summaryData);
    },
    resetFields() {
      this.dataPublisher = "";
      this.dataIsbn = "";
      this.dataCategory = [];
      this.dataTitle = "";
      this.dataPrice = "";
      this.dataFormats = [];
      this.isCommentable = false;
      this.publicationDate = "";
      this.dataAuthors = [];
      this.dataTags = [];
      this.dataDescription = "";
    },
    editEntry(index) {
      console.log("Edit entry at index:", index);
    },
    deleteEntry(index) {
      this.savedEntries.splice(index, 1);
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
.mt-4 {
  margin-top: 10px;
}
.mb-4 {
  margin-bottom: 10px;
}
.text-left {
  margin-bottom: 10px;
}
</style>
