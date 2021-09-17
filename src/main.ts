import { createApp } from "vue"
import App from "./App.vue"

import router from "./router"
import store from "./store"

import "@/style/basic.styl"
import styleImport from "./utils/style-import"

const app = createApp(App)
styleImport(app).use(router).use(store).mount("#app")
