import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

export function burger(ul) {
  const btn = create(
    "button",
    "flex flex-col gap-1 cursor-pointer ml-auto p-1",
  );

  for (let i = 0; i < 3; i++) {
    const bar = create("span", "block w-7 h-1 bg-bg bg-primary");
    set(bar, btn);
  }

  btn.addEventListener("click", () => {
    ul.classList.toggle("hidden");
    ul.classList.toggle("flex");
  });

  return btn;
}
