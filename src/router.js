/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import noteList from "./components/noteList.vue";
import newNote from "./components/noteInput.vue";
import editor from "./components/editor.vue";

const routes = [{
        path: "/",
        component: noteList
    },

    {
        path: "/edit/:note",
        component: editor
    },
    {
        path: "/edit",
        component: newNote
    }
];

export default new VueRouter({ routes, });