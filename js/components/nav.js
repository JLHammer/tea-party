import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

import { burger } from "./burger.js";

export function nav() {
  const nav = create(
    "nav",
    "flex flex-col items-center bg-secondary w-full h-fit px-3 py-1 text-center md:gap-4 ",
  );
  const ul = create("ul", "hidden flex-col items-center w-full h-fit text-2xl");
  const navList = [
    { href: "about", innerText: "About Us" },
    { href: "brands", innerText: "Brands" },
    { href: "how-to", innerText: "How To" },
    { href: "join-us", innerText: "Join Us" },
  ];

  navList.forEach(({ href, innerText }) => {
    const li = create("li");
    const navEl = create("a", "flex text-lg text-primary p-1");
    navEl.href = `#${href}`;
    navEl.innerText = innerText;
    set(navEl, li);
    set(li, ul);
  });

  set(burger(ul), nav);
  set(ul, nav);

  return nav;
}
