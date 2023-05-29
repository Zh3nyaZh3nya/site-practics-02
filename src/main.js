import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalComponent from "@/components/UI/globalComponent";

import "@/assets/scss/global.css";

import Slider from '@vueform/slider'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
    apiKey: 'd788c73c-29d9-479c-89da-856189171458',
    lang: 'ru_RU',
    version: '2.1'
}

const app = createApp(App);

globalComponent.forEach((component) => {
    app.component(component.name, component);
});

app.use(store).use(Slider).use(router).use(YmapPlugin, settings).mount('#app')
