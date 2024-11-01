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

          <v-col cols="12">
            <h2 class="text-h5">Saved Data</h2>
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
          </v-col>


        <!-- Edit Form -->
        <!-- ============================================================= -->
        <v-dialog v-model="isEditing" max-width="1200px">
          <v-card>
            <v-card-title class="title-edit">Edit Card Data</v-card-title>
            <v-form ref="editForm" class="form-edit">
              <v-col cols="6">
                <TagsCombobox
                  v-model="editedData.publisher"
                  label="Publisher"
                  :items="[
                    'Schuppe, Lockman and Dooley',
                    'Example1',
                    'Example2',
                    'Example3',
                  ]"
                ></TagsCombobox>

                <v-text-field v-model="editedData.isbn" label="Isbn"></v-text-field>
                
                <TagsCombobox
                  v-model="editedData.category"
                  label="Category"
                   :items="[
                    'Fantasy', 
                    'Example4', 
                    'Example5', 
                    'Example6'
                  ]"
                ></TagsCombobox>
                <v-text-field v-model="editedData.title" label="Title"></v-text-field>
                <PriceInput v-model="editedData.price" label="Price" ></PriceInput>
              </v-col>
              <v-col cols="6">
                <ChipSelects
                  v-model="editedData.formats"
                  label="Formats"
                  :items="[
                   'Paperback',
                   'Pocket',
                   'Example7',
                   'Example8',
                   'Example9',
                  ]"
                ></ChipSelects>
                <CommentableSwitch v-model="editedData.CommentableSwitch" label="Commentable" />
                <DatePicker v-model="editedData.PublicationDate" label="Publication Date"></DatePicker>
                <ChipSelects
                  v-model="editedData.authors"
                  label="Authors"
                  :items="[
                   'Idella Brown',
                   'Augustus Bradtke',
                   'Example10',
                   'Example11',
                   'Example12',
                  ]"
                ></ChipSelects>
                <ChipSelects
                  v-model="editedData.tags"
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
                ></ChipSelects>
              </v-col>
            </v-form>
            <DescriptionInput
              v-model="editedData.description"
              :readonly="!isCommentable"
              label="Description"
              class="Description-edit"
            ></DescriptionInput>
            <v-card-actions class="saveEditedData">
              <v-btn color="primary" @click="saveEditedData">Save</v-btn>
              <v-btn @click="closeEditForm">Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- ============================================================== -->
      
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
      DataTags: ["maxime", "quisquam", "magni",],
      DataDescription: " ",
      isEditing: false,
      editedIndex: null,
      editedData: {},
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
        authors: this.DataAuthors,
        tags: this.DataTags,
        PublicationDate: this.date,
        description: this.DataDescription,
      };
    },
  },
  methods: {
    // saveData() {
    //   console.log("Saving data...");
    //   this.savedEntries.push({ ...this.summaryData });
    //   this.resetFields();
    // },
    saveData() {
    if (this.isSaving) return;
    this.isSaving = true; 

    console.log("Saving data...");
    this.savedEntries.push({ ...this.summaryData });
    this.resetFields();

    setTimeout(() => {
      this.isSaving = false;
    }, 100);
  },
    handleEditCard(index) {
      this.editedIndex = index;
      this.editedData = { ...this.savedEntries[index] };
      this.isEditing = true;
    },
    handleDeleteCard(index) {
      if (index >= 0 && index < this.savedEntries.length) {
        this.savedEntries.splice(index, 1);
      }
    },
    saveEditedData() {
    if (this.editedIndex !== null) {
      this.savedEntries[this.editedIndex] = { ...this.editedData };
      this.isEditing = false; 
      this.editedIndex = null;
      this.editedData = {};  
    }
  },
    closeEditForm() {
      this.isEditing = false;
      this.editedData = {};
    },
    resetFields() {
      this.DataPublisher = ["Schuppe, Lockman and Dooley"];
      this.DataIsbn = "";
      this.DataCategory = ["Fantasy"];
      this.DataTitle = "Sequi quo sapiente";
      this.DataPrice = [];
      this.DataFormats = ["Paperback", "Pocket"];
      this.date = new Date();
      this.DataAuthors = ["Idella Brown", "Augustus Bradtke"];
      this.DataTags = ["maxime", "quisquam", "magni", "voluptatem"];
      this.DataDescription = " ";
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
  width: 600px;
}
.title-edit {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
.form-edit {
  display: flex;
  justify-content: space-between;
}
.Description-edit {
  width: 1200px;
  display: block;
  justify-content: center;
  margin-right: 20px;
}
.saveEditedData{
  margin: 10px 40px;
}
</style>
