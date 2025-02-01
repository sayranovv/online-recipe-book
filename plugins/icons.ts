import { defineNuxtPlugin } from "#app";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiGithub } from "oh-vue-icons/icons";

addIcons(BiGithub);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VIcon", OhVueIcon);
});
