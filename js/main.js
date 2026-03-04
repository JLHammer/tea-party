import { create } from "./utils/create.js";
import { set } from "./utils/set.js";

import { sectionHero } from "./sections/section-hero.js";
import { sectionAbout } from "./sections/section-about.js";
import { sectionBrands } from "./sections/section-brands.js";
import { sectionHowTo } from "./sections/section-how-to.js";

export function main() {
  const main = create("main", "bg-bg-green text-text min-h-screen");
  set([sectionHero(), sectionAbout(), sectionBrands(), sectionHowTo()], main);
  return main;
}
