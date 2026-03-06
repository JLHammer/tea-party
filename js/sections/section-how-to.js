import brandsGreen from "../../assets/images/Brands-Green.jpg";
import brandsBlack from "../../assets/images/Brands-Black.jpg";
import brandsWhite from "../../assets/images/Brands-White.jpg";
import brandsRooibos from "../../assets/images/Brands-Rooibos.jpg";
import brandsHerbal from "../../assets/images/Brands-Herbal.jpg";
import brandsOrganic from "../../assets/images/Brands-Organic.jpg";

import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

export function sectionHowTo() {
  const section = create("section", "bg-bg md:pb-3");
  section.id = "how-to";

  const h2_1 = create("h2", "mb-4 ml-4 text-accent");
  h2_1.textContent = "How to prepare tea";

  const grid = create(
    "div",
    "grid grid-cols-1 items-center bg-[url('assets/images/About-us-1.jpg')] bg-contain md:grid-cols-2",
  );

  const div1 = create("div", "flex flex-col items-start p-3");
  const div2 = create(
    "div",
    "flex h-full flex-col items-center px-2 pb-6 md:mx-6 md:p-0",
  );
  const div3 = create("div", "flex flex-col items-start bg-accent md:p-2");
  const div4 = create(
    "div",
    "flex h-full flex-col items-start gap-2 bg-accent p-2 pb-6",
  );

  // For div1
  const h3 = create("h3", "text-accent");
  h3.textContent = "Make a nice cup of tea";
  const h5 = create("h5", "text-accent");
  h5.textContent = "Choose your brand and learn how to prepare.";

  // For div2
  const dropdown = create(
    "select",
    "w-full bg-form-field text-accent transition duration-300 ease-in-out hover:shadow-md hover:shadow-brown md:mt-5",
  );
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

  // Tea data map
  const teaData = {
    "Choose Brand": {
      image: brandsGreen,
      title: "Green Tea",
      description:
        "Choose your brand and learn how to prepare. Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.",
      temperature: "Water Temperature: 80°C / 180°F",
      brewingTime: "Brewing Time: 2-3 min.",
    },
    "Green Tea": {
      image: brandsGreen,
      title: "Green Tea",
      description:
        "Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation, preserving the natural antioxidants.",
      temperature: "Water Temperature: 80°C / 180°F",
      brewingTime: "Brewing Time: 2-3 min.",
    },
    "Black Tea": {
      image: brandsBlack,
      title: "Black Tea",
      description:
        "Bold and full-bodied, black teas are fully oxidized after rolling. This process gives them their characteristic dark colour and rich, robust flavour.",
      temperature: "Water Temperature: 100°C / 212°F",
      brewingTime: "Brewing Time: 3-5 min.",
    },
    "White Tea": {
      image: brandsWhite,
      title: "White Tea",
      description:
        "Delicate and subtly sweet, white tea is the least processed of all teas. Made from young leaves and buds, it retains a gentle floral character.",
      temperature: "Water Temperature: 75°C / 167°F",
      brewingTime: "Brewing Time: 2-4 min.",
    },
    "Rooibos Tea": {
      image: brandsRooibos,
      title: "Rooibos Tea",
      description:
        "Naturally caffeine-free and rich in antioxidants, rooibos comes from South Africa. It has a naturally sweet, earthy flavour with a beautiful red colour.",
      temperature: "Water Temperature: 100°C / 212°F",
      brewingTime: "Brewing Time: 5-7 min.",
    },
    "Herbal Tea": {
      image: brandsHerbal,
      title: "Herbal Tea",
      description:
        "A caffeine-free blend of herbs, flowers and spices. Each herbal infusion offers its own unique flavour and wellness benefits, from calming chamomile to refreshing peppermint.",
      temperature: "Water Temperature: 100°C / 212°F",
      brewingTime: "Brewing Time: 5-7 min.",
    },
    "Organic Tea": {
      image: brandsOrganic,
      title: "Organic Tea",
      description:
        "Grown without synthetic pesticides or fertilisers, organic teas offer a pure and natural taste. A mindful choice for both your health and the environment.",
      temperature: "Water Temperature: 85°C / 185°F",
      brewingTime: "Brewing Time: 3-4 min.",
    },
  };

  // For div3
  const img = create(
    "img",
    "z-10 cursor-pointer transition-all duration-300 hover:scale-[0.975] hover:rounded-lg",
  );
  img.src = brandsGreen;

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

  // Dropdown change handler
  dropdown.addEventListener("change", () => {
    const selected = dropdown.value;
    const data = teaData[selected] ?? teaData["Green Tea"];

    img.src = data.image;
    h2_2.textContent = data.title;
    p1.textContent = data.description;
    p2.textContent = data.temperature;
    p3.textContent = data.brewingTime;
  });

  set([h3, h5], div1);
  set([dropdown], div2);
  set(img, div3);
  set([h2_2, p1, p2, p3], div4);
  set([div1, div2, div3, div4], grid);
  set([h2_1, grid], section);
  return section;
}
