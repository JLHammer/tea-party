import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

import { burger } from "./burger.js";

export function nav() {
  const nav = create(
    "nav",
    "flex h-fit w-full flex-col items-center bg-secondary px-3 py-1 text-center md:gap-4",
  );
  const ul = create(
    "ul",
    "hidden h-fit w-full flex-col items-center text-2xl md:flex md:flex-row md:justify-end md:gap-4",
  );
  const navList = [
    { href: "about", innerText: "About Us" },
    { href: "brands", innerText: "Brands" },
    { href: "how-to", innerText: "How To" },
    { href: "join-us", innerText: "Join Us" },
  ];

  navList.forEach(({ href, innerText }) => {
    const li = create("li");
    const navEl = create("a", "flex p-1 text-lg text-primary");
    navEl.href = `#${href}`;
    navEl.innerText = innerText;
    set(navEl, li);
    set(li, ul);
  });

  set(burger(ul), nav);
  set(ul, nav);

  return nav;
}
