/* empty css                             */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead } from '../astro_DxX6mlks.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const users = asDrizzleTable("users", { "columns": { "email": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "email", "collection": "users", "primaryKey": false, "optional": false } }, "password": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "password", "collection": "users", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const emailForm = formData.get("email");
    const passwordForm = formData.get("password");
    const findDetails = await db.select({
      email: users.email
    }).from(users);
    if (emailForm === findDetails.email && passwordForm == findDetails.password) {
      console.log("success login");
    }
  }
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><link rel="stylesheet" href="/src/output.css">${renderHead()}</head> <body class="min-h-screen grid place-content-center radial-blue"> <form class="card w-96 bg-base-100 shadow-xl" method="POST"> <div class="card-body"> <h2 class="card-title mb-5">Sign Up!</h2> <label class="input input-bordered flex items-center gap-5 mb-3 " for="email">
Email
<input type="email" id="email " name="email" class="grow" placeholder="youremail@domain.com" required> </label> <label class="input input-bordered flex items-center gap-6" for="password">
Password
<input type="password" id="password" name="password" class="grow" placeholder="Password123" required> </label> <div class="card-actions justify-end text-center mx-auto mt-6"> <button type="submit" class="btn btn-primary left-1/2 w-28 font-extrabold">Create Account</button> </div> </div> </form> </body></html>`;
}, "C:/Users/moals/Downloads/project/src/pages/register.astro", void 0);

const $$file = "C:/Users/moals/Downloads/project/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
