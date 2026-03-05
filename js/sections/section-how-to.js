import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

export function sectionHowTo() {
  const section = create("section", "bg-bg");

  const h2_1 = create("h2", "mb-4 ml-4 text-accent");
  h2_1.textContent = "How to prepare tea";

  const grid = create(
    "div",
    "grid grid-cols-1 items-center bg-[url('assets/images/About-us-1.jpg')] md:grid-cols-2 md:gap-2",
  );

  const div1 = create("div", "flex flex-col items-start p-3");
  const div2 = create("div", "flex flex-col items-center px-1 pb-3");
  const div3 = create("div", "flex flex-col items-start bg-accent");
  const div4 = create(
    "div",
    "flex h-full flex-col items-start gap-2 bg-accent p-2 pb-6",
  );

  // For div1
  const h4 = create("h4", "text-accent");
  h4.textContent = "Make a nice cup of tea";
  const h5 = create("h5", "text-accent");
  h5.textContent = "Choose your brand and learn how to prepare.";

  // For div2
  const dropdown = create("select", "w-full bg-form-field text-accent");
  dropdown.id = "tea-dropdown";
  dropdown.name = "tea-dropdown";
  const options = [
    "Choose Brand",
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
  const h2_2 = create("h2", "font-roboto font-normal text-brown");
  h2_2.textContent = "Green Tea";

  const p1 = create("p", "text-text2");
  p1.textContent =
    "Choose your brand and learn how to prepare. Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.";

  const p2 = create("p", "text-bg");
  p2.textContent = "Water Temperature: 80°C / 180°F";

  const p3 = create("p", "text-bg");
  p3.textContent = "Brewing Time: 2-3 min.";

  set([h4, h5], div1);
  set([dropdown], div2);
  set(img, div3);
  set([h2_2, p1, p2, p3], div4);
  set([div1, div2, div3, div4], grid);
  set([h2_1, grid], section);
  return section;
}
