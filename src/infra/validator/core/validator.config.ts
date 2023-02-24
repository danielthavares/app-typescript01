import { LocaleObject, setLocale } from "yup";
import { ptBR } from "./i18n/pt_br";
import { keysAndValues } from "./i18n/keys_values";

function initLocale(locale: "en" | "ptBR" | "keys") {
  let localeOject: LocaleObject = {};

  if (locale === "ptBR") localeOject = ptBR;
  else if (locale === "keys") localeOject = keysAndValues;

  setLocale(localeOject);
}

export { initLocale };
