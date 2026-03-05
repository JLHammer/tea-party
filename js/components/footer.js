import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

import { form } from "../components/form.js";

export function footer() {
  const section = create(
    "footer",
    "bg-secondary p-4 text-bg md:px-14 md:pt-8 md:pb-16",
  );

  const h2 = create("h2", "mb-4 origin-left text-primary");
  h2.textContent = "Contact Us";

  const flex = create(
    "div",
    "flex flex-col gap-8 md:flex-row md:justify-center md:gap-0",
  );
  const address = create(
    "address",
    "flex flex-1 flex-col items-start gap-4 not-italic",
  );
  const div1 = create("div", "flex flex-col");
  const div2 = create("div", "flex flex-col");
  const div3 = create("div", "flex flex-col");

  const h5_1 = create("h5", "cursor-pointer");
  const phone = create("a");
  const mail = create("a");

  h5_1.textContent = "Styrsögatan 4, 211 24 Malmö, Sweden";
  phone.textContent = "+46 (0) 761688994";
  phone.href = "tel:+46761688994";
  mail.textContent = "sales@terministeriet.com";
  mail.href = "mailto:sales@terministeriet.com";

  const h5_2 = create("h5");
  const about = create("a");
  const blog = create("a");

  h5_2.textContent = "Information";
  about.textContent = "About Us";
  about.href = "#";
  blog.textContent = "Our Blog";
  blog.href = "#";

  const h5_3 = create("h5");
  const policy = create("a");
  const contact = create("a");

  h5_3.textContent = "Terms & Conditions";
  policy.textContent = "Privacy Policy";
  policy.href = "#";
  contact.textContent = "Contact Us";
  contact.href = "#";
  blog.href = "#";

  set([h5_1, phone, mail], div1);
  set([h5_2, about, blog], div2);
  set([h5_3, policy, contact], div3);
  set([div1, div2, div3], address);
  set([address, form()], flex);
  set([h2, flex], section);
  return section;
}
