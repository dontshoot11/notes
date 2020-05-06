<template lang="pug">
    div.note
        .note__content
          .note__text {{textPreview}}
          ul.note__todos
            li(v-for="todo in todosPreview" v-bind:class="{'checked': todo.checked}").note__todo {{todo.name}}
        
      
        .navigation
          button.button.button--left
            router-link(:to="`/edit/${note.id}`") открыть
          button(v-on:click="openPopup").button удалить
        .popup(v-if="isPopupNeeded")
          .popup__content
            .popup__text Вы уверены?
            .popup__navigatiom
              button.button.button--left(v-on:click="grantPermission") да
              button.button(v-on:click="closePopup") нет
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      isPopupNeeded: false,
      permissionGranted: false
    };
  },
  props: { note: {} },

  components: {},
  computed: {
    textPreview: function() {
      return this.note.text.slice(0, 96) + "...";
    },
    todosPreview: function() {
      return this.note.todos.slice(0, 3);
    }
  },
  methods: {
    ...mapMutations(["deleteNote"]),
    grantPermission() {
      this.permissionGranted = true;
      this.isPopupNeeded = false;
      this.deleteNote(this.note);
    },
    closePopup() {
      this.isPopupNeeded = false;
    },
    openPopup() {
      this.isPopupNeeded = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.note {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.note__text {
  margin-bottom: 15px;
}

.note__todo {
  margin: 0 0 5px 30px;
  position: relative;
}

.note__todo::before {
  display: none;
  content: "🗸";
  position: absolute;
  bottom: -6px;
  left: -20px;

  font-size: 24px;
}

.checked::before {
  display: block;
}

.navigation {
  margin: 0;
}
</style>
