//? It is advisable to use environment variables instead of directly putting secrets in repository file but I have skipped this part as it would become complicated for many.
//? Alternatively you can download the repository instead or forking and upload it from your account and keep it private, in that way, your secrets will not be exposed to the public.

const APP_KEY = "AP1";
const APP_SECRET = "AP2";
const ACCESS_TOKEN = "AP3";
const ACCESS_SECRET = "AP4";
const GEMINI_API_KEY = "AP5Y";

const SECRETS = {
  APP_KEY,
  APP_SECRET,
  ACCESS_TOKEN,
  ACCESS_SECRET,
  GEMINI_API_KEY,
};

module.exports = SECRETS;
