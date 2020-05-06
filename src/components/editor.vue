<template lang="pug">
  div.input-area
    .header
  
      h2.heading редактирование заметки

    .navigation
      button.button.button--left(v-on:click="sendNote") сохранить
        
      button.button.button--left(v-on:click="openPopup") удалить
    
    
      button.button(v-on:click="startAbort") выйти

    .inputs
      .inputs__textarea
    
        textarea(type="text", v-model="note.text" placeholder="Текст заметки" @input="saveChanges").input.input--textarea
        .inputs__buttons(v-if="showUndoRedo") 
          
          button.button.button--left(v-on:click="getBackup") отменить

          button.button(v-on:click="undoBackup") повторить

      .inputs__todos
        todoInput(@addTodo="addTodo").input.input--todo
        todoList(:todos="note.todos" @deleteTodo="deleteTodo" @editTodo="editTodo")
    .popup(v-if="isPopupNeeded")
          .popup__content
            .popup__text Вы уверены?
            .popup__navigation
              button.button.button--left(v-on:click="grantPermission") да
              button.button(v-on:click="closePopup") нет
    .popup(v-if="wantToAbort")
          .popup__content
            .popup__text Выйти без сохранения?
            .popup__navigation
              button.button.button--left(v-on:click="abortChanges") да
              button.button(v-on:click="abortAbort") нет
    

      
     
      
    
    
      
    
    
   
    
    
</template>

<script>
import todoList from "./noteTodoList";
import todoInput from "./noteTodoInput";
import { mapMutations } from "vuex";
import { mapState } from "vuex";

export default {
  data() {
    return {
      note: {
        id: 0,
        text: "",
        todos: []
      },
      backup: "",
      changesBackup: "",
      isPopupNeeded: false,
      wantToAbort: false,
      showUndoRedo: false
    };
  },
  computed: {
    ...mapState({
      notes: state => state.notes.notes
    })
  },

  mounted: function() {
    this.note.id == this.$route.params.note;
    this.findNote();
  },

  methods: {
    ...mapMutations(["addNote", "editNote", "deleteNote"]),
    addTodo(todo) {
      this.note.todos.push(todo);
    },

    findNote() {
      let desiredNote = this.notes.find(
        note => note.id == this.$route.params.note
      );
      this.note = desiredNote;
      this.backup = this.note.text;
      this.changesBackup = this.note.text;
    },

    saveChanges() {
      this.changesBackup = this.note.text;
      if (this.changesBackup !== this.backup) {
        this.showUndoRedo = true;
      }
    },

    getBackup() {
      this.note.text = this.backup;
    },

    undoBackup() {
      this.note.text = this.changesBackup;
    },

    deleteTodo(todo) {
      this.note.todos = this.note.todos.filter(function(c) {
        return c !== todo;
      });
      //this.editNote(this.note);
    },

    editTodo(todo) {
      this.note.todos = this.note.todos.map(function(a) {
        if (a.id === todo.id) {
          a = todo;
        }
        return a;
      });

      //this.editNote(this.note);
    },

    sendNote() {
      this.editNote(this.note);
      this.$router.go(-1);
    },

    openPopup() {
      this.isPopupNeeded = true;
    },
    closePopup() {
      this.isPopupNeeded = false;
    },

    grantPermission() {
      this.deleteNote(this.note);
      this.$router.go(-1);
    },

    startAbort() {
      this.wantToAbort = true;
    },

    abortChanges() {
      this.$router.go("-1");
    },
    abortAbort() {
      this.wantToAbort = false;
    }
  },

  components: {
    todoList,
    todoInput
  }
};
</script>

<style lang="scss" scoped>
.input {
  vertical-align: text-top;
  border: 1px solid black;
  resize: none;
}
.inputs__textarea {
  width: 50%;
  margin-right: 15px;
  @media (max-width: 560px) {
    width: 100%;
    margin-right: 0;
  }
}
.input--textarea {
  width: 100%;
  margin-right: 0;
}

.inputs__buttons {
  display: flex;
  margin-top: 10px;
}
</style>
