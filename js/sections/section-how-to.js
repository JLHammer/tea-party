import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

export function sectionHowTo() {
  const section = create("section", "bg-bg");

  const h2 = create("h2", "text-3xl text-secondary mb-4");
  h2.textContent = "How to prepare tea";

  set(h2, section);
  return section;
}
