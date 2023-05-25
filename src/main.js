import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalComponent from "@/components/UI/globalComponent";

import "@/assets/scss/global.css";

import Slider from '@vueform/slider'

const app = createApp(App);

globalComponent.forEach((component) => {
    app.component(component.name, component);
});

app.use(store).use(Slider).use(router).mount('#app')
