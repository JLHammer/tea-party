import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

export function sectionHero() {
  const section = create("section", "bg-bg p-4 md:flex-row");
  // Div 1 in section
  const div1 = create("div", "w-full");
  const h2 = create("h2", "mb-4 text-center text-primary");
  h2.textContent = "Passion and pride";
  const p1 = create("p", "mb-6");
  const p2 = create("p");
  p1.textContent =
    "Working in the world of tea are what drive our constant evolution, and what have allowed us to offer the framework of service and care that this highly appreciated product with over 2,000 years of history deserves.";
  p2.textContent =
    "Since 1990 our knowledge and experience has been geared to the quality of our products, which we treat with respect and meticulousness.";

  // Div 2 in section
  const div2 = create("div", "flex w-full flex-col items-center");
  const img = create("img");
  img.src = "./favicon.png";

  set([h2, p1, p2], div1);
  set(img, div2);

  set([div1, div2], section);

  return section;
}
