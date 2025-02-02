import { defineNuxtPlugin } from "#app";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiSearch } from "oh-vue-icons/icons";

addIcons(HiSearch);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VIcon", OhVueIcon);
});
