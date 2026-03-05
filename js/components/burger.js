import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

export function burger(ul) {
  const btn = create(
    "button",
    "md: absolute top-0 right-0 ml-auto flex h-full cursor-pointer flex-col items-center justify-center gap-1 p-1 md:hidden",
  );

  for (let i = 0; i < 3; i++) {
    const bar = create("span", "block h-1 w-7 bg-bg bg-primary");
    set(bar, btn);
  }

  btn.addEventListener("click", () => {
    ul.classList.toggle("hidden");
    ul.classList.toggle("flex");
    btn.classList.toggle("h-9");
    btn.classList.toggle("h-full");
  });

  return btn;
}
