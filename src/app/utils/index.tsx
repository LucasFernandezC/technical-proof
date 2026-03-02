export const createItem = (text: string): Item => ({
  id: crypto.randomUUID(),
  text,
});
