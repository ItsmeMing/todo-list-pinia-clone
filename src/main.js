import {createApp} from "vue";
import {createPinia} from "pinia";
import App from "./App.vue";

import "./assets/reset.css";
import "./assets/base.css";

const pinia = createPinia();

/* import the fontawesome core */
import {library} from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

/* add icons to the library */
import {
    faClipboardList,
    faSpinner,
    faCircleCheck,
    faFilter,
    faCircleRight,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faClipboardList,
    faSpinner,
    faCircleCheck,
    faFilter,
    faCircleRight,
    faTrash,
);

createApp(App)
    .component("FontAwesomeIcon", FontAwesomeIcon)
    .use(pinia)
    .mount("#app");
