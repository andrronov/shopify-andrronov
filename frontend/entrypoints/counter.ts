import { createApp } from "vue";
import Counter from "../components/Counter.vue";

const el = document.getElementById("counter-app");

if (el) {
  createApp(Counter).mount(el);
}
