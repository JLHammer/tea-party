import { create } from "../utils/create.js";
import { get } from "../utils/get.js";
import { set } from "../utils/set.js";

import { burger } from "./burger.js";

export function nav() {
  const nav = create(
    "nav",
    "flex justify-between gap-4 items-center bg-secondary w-full h-full px-3 py-1 min-h-12 text-center",
  );
  const ul = create("ul", "hidden justify-between w-full h-full text-2xl");
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

  set(ul, nav);
  set(burger(ul), nav);
  return nav;
}
