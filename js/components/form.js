import { create } from "../utils/create";
import { set } from "../utils/set";

export function form() {
  const form = create("form", "grid grid-cols-2 justify-items-start gap-2");

  const name = create("input");
  name.type = "text";
  name.placeholder = "Full Name";
  name.id = "name";
  name.autocomplete = "name";

  const email = create("input");
  email.type = "email";
  email.placeholder = "E-mail";
  email.id = "email";
  email.autocomplete = "email";

  const phone = create("input");
  phone.type = "tel";
  phone.placeholder = "Phone Number";
  phone.id = "phone";
  phone.autocomplete = "tel";

  const checkBoxes = create(
    "div",
    "col-span-full grid w-fit grid-cols-4 justify-items-start gap-2",
  );

  const mailMeLabel = create("label", "col-span-1");
  mailMeLabel.textContent = "Mail me";
  mailMeLabel.htmlFor = "mailMe";

  const mailMe = create("input", "col-span-1");
  mailMe.type = "checkbox";
  mailMe.id = "mailMe";

  const callMeLabel = create("label", "col-span-1");
  callMeLabel.textContent = "Call me";
  callMeLabel.htmlFor = "callMe";

  const callMe = create("input", "col-span-1");
  callMe.type = "checkbox";
  callMe.id = "callMe";

  const submit = create("button");
  submit.type = "submit";
  submit.textContent = "SEND";

  set([mailMe, mailMeLabel, callMe, callMeLabel], checkBoxes);
  set([name, email, phone, checkBoxes, submit], form);

  return form;
}
