import { create } from "../utils/create.js";
import { get } from "../utils/get.js";
import { set } from "../utils/set.js";

export function burger(ul) {
  const btn = create(
    "button",
    "flex flex-col gap-1.5 cursor-pointer ml-auto p-1",
  );

  for (let i = 0; i < 3; i++) {
    const bar = create("span", "block w-6 h-0.5 bg-bg bg-primary rounded-full");
    set(bar, btn);
  }

  btn.addEventListener("click", () => {
    ul.classList.toggle("hidden");
    ul.classList.toggle("flex");
  });

  return btn;
}
