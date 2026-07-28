import { en, type Dict } from "./en";
import { fi } from "./fi";

export type { Dict };
export const dictionaries = { en, fi };
export const locales = Object.keys(dictionaries) as (keyof typeof dictionaries)[];
