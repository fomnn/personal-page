import { atom } from "jotai";

export enum Language {
  EN = "en",
  ID = "id",
}

const language = atom(Language.EN)

export default language