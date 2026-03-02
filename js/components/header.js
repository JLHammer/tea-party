import { create } from "../utils/create.js";
import { get } from "../utils/get.js";

import "./nav.js";

export function header() {
  const header = create("header");
  const headerImg = create("img");
  headerImg.src = "./assets/images/Image-Hero-Front.jpg";
  const heading = create("h1");
  heading.textContent = "Tea Party";
  header.appendChild(heading);

  header.appendChild(headerImg);
  return header;
}
