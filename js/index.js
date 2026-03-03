import { set } from "./utils/set.js";
import { get } from "./utils/get.js";

import { header } from "./components/header.js";
import { main } from "./main.js";
import { footer } from "./components/footer.js";

console.log("index.js loaded!");

const root = get("#root");
set(header(), root);
set(main(), root);
set(footer(), root);
