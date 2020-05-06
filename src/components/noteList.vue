<template lang="pug">
div.list-area
  .header
  
    h1.heading заметки
  .navigation
    router-link(to="/edit").button новая заметка



  //div(v-on:click="deleteall") удолить
   
    

  ul.list
    li(v-for="note in notes").item
      note(:note="note" @)
   
 
</template>

<script>
let todoId = 0;
import note from "./note";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      todo: {
        name: "",
        id: 0,
        checked: false
      }
    };
  },
  computed: {
    ...mapState({
      notes: state => state.notes.notes
    })
  },

  components: { note },
  methods: {
    ...mapMutations(["getNotes"]),
    deleteall() {
      localStorage.clear();
    },
    addTodo() {
      todoId++;
      this.todo.id = todoId;
      this.$emit("addTodo", { ...this.todo });
      this.todo.name = "";
    },
    grabNotes() {
      let savedNotes = localStorage.getItem("savedNotes");

      if (savedNotes) {
        let parsedNotes = JSON.parse(savedNotes);

        this.getNotes(parsedNotes);
      }
    }
  },

  mounted: function() {
    this.grabNotes();
  }
};
</script>

<style lang="scss" scoped>
.list-area {
  width: 100%;
}

.list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    margin-bottom: 15px;
  }
}

.item {
  padding: 10px;
  border: 1px solid black;
}

.item__name {
  font-weight: 300;
}
</style>
