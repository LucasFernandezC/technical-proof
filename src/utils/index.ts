import { Item } from "../types";

export const createItem = (text: string): Item => ({
  id: crypto.randomUUID(),
  text,
});
