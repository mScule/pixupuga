import "./assets/css/colors.css";
import "./assets/css/fonts.css";
import "./assets/css/config.css";
import "./assets/css/init.css";
import "./assets/css/elements.css";

import App from "./App.svelte";

const app = new App({
    target: document.getElementById("app"),
});

export default app;
