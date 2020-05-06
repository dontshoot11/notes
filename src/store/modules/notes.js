const notes = {
  state: {
    notes: []
  },

  mutations: {
    getNotes(state, savedNotes) {
      state.notes = savedNotes;
    },

    addNote(state, note) {
      state.notes.push(note);
      let stringedNote = JSON.stringify(state.notes);
      localStorage.setItem("savedNotes", stringedNote);
    },
    editNote(state, note) {
      state.notes = state.notes.map(function(a) {
        if (a.id === note.id) {
          a = note;
        }
        return a;
      });
      let stringedNote = JSON.stringify(state.notes);
      localStorage.setItem("savedNotes", stringedNote);
    },

    deleteNote(state, note) {
      state.notes = state.notes.filter(function(c) {
        return c !== note;
      });
      let stringedNote = JSON.stringify(state.notes);
      localStorage.setItem("savedNotes", stringedNote);
    }
  }
};

export default notes;
