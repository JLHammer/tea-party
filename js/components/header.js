import { create } from "../utils/create.js";
import { get } from "../utils/get.js";
import { set } from "../utils/set.js";

import { nav } from "./nav.js";

export function header() {
  const header = create("header");
  const heroDiv = create("div", "flex flex-col items-center relative");
  const headerImg = create("img", "w-full");
  headerImg.src = "./assets/images/Image-Hero-Front.jpg";
  const heading = create("h1", "absolute text-7xl");
  heading.textContent = "Tea Party";
  set([headerImg, heading], heroDiv);
  set([heroDiv], header);
  set([heroDiv, nav()], header);

  return header;
}
