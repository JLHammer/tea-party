import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

export function sectionAbout() {
  const section = create("section", "bg-bg");

  const h2 = create("h2", "text-3xl text-secondary mb-4");
  h2.textContent = "About Us";

  const grid = create("div", "grid gap-2");
  const imgSrcs = [
    "./assets/images/About-us-1.jpg",
    "./assets/images/About-us-2.jpg",
    "./assets/images/About-us-3.jpg",
    "./assets/images/About-us-4.jpg",
  ];
  const h3s = ["The Team", "The Brand", "The Company", "The Customers"];
  const h4s = [
    "Meet our dedicated team",
    "TeaParty brands and mixtures",
    "Company information and Mission",
    "About the Sippers and Dippers",
  ];

  for (let i = 0; i < imgSrcs.length; i++) {
    const div = create("div", "relative");
    const img = create("img");
    img.src = imgSrcs[i];
    set(img, div);
    const h3 = create(
      "h3",
      "absolute top-1/20 left-1/20 text-primary text-3xl",
    );
    h3.textContent = h3s[i];
    set(h3, div);
    const h4 = create("h4", "absolute top-1/4 left-1/20 text-bg text-xl");
    h4.textContent = h4s[i];
    set(h4, div);
    set(div, grid);
  }

  set([h2, grid], section);
  return section;
}
