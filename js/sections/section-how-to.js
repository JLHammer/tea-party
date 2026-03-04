import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

export function sectionHowTo() {
  const section = create("section", "bg-bg");

  const h2 = create("h2", "text-3xl text-accent mb-4");
  h2.textContent = "How to prepare tea";

  const grid = create(
    "div",
    "grid grid-cols-1 bg-[url('assets/images/About-us-1.jpg')] md:grid-cols-2 md:gap-2",
  );

  const div1 = create("div", "flex flex-col items-start ");
  const div2 = create("div", "flex flex-col items-center");
  const div3 = create("div", "flex flex-col items-start bg-accent");
  const div4 = create("div", "flex flex-col items-start bg-accent p-2 pb-6");

  // For div1
  const h3_1 = create("h3", "text-accent");
  h3_1.textContent = "Make a nice cup of tea";
  const h4_1 = create("h4", "text-accent");
  h4_1.textContent = "Choose your brand and learn how to prepare.";

  // For div2
  const dropdown = create("select", "w-full text-accent");
  dropdown.id = "tea-dropdown";
  dropdown.name = "tea-dropdown";
  const options = [
    "Green Tea",
    "Black Tea",
    "White Tea",
    "Rooibos Tea",
    "Herbal Tea",
    "Organic Tea",
  ];
  options.forEach((option) => {
    const optionElement = create("option");
    optionElement.textContent = option;
    set(optionElement, dropdown);
  });

  // For div3
  const img = create("img");
  img.src = "./assets/images/Brands-Green.jpg";

  // For div4
  const h3_2 = create("h3", "text-brown text-3xl");
  h3_2.textContent = "Green Tea";

  const h4_2 = create("h4", "text-text2");
  h4_2.textContent =
    "Choose your brand and learn how to prepare. Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.";

  const p1 = create("p", "text-bg");
  p1.textContent = "Water Temperature: 80°C / 180°F";

  const p2 = create("p", "text-bg");
  p2.textContent = "Brewing Time: 2-3 min.";

  set([h3_1, h4_1], div1);
  set([dropdown], div2);
  set(img, div3);
  set([h3_2, h4_2, p1, p2], div4);
  set([div1, div2, div3, div4], grid);
  set([h2, grid], section);
  return section;
}
