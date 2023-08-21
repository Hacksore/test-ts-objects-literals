import { getRawDawgKeys, getTemplateLiteralKeys } from "./bug";

it("should have two values when using template literal enum", () => {
  // grab all the keys
  const keys = getTemplateLiteralKeys();

  // we should only be expected to get the two values
  // NOTE: here is the bug not happening in tsc https://tsplay.dev/WoM8LN
  expect(keys).toEqual(["minecraft_static", "lol_static"]);
});

it("should have two values when using raw dawg enum", () => {
  // grab all the keys
  const keys = getRawDawgKeys();

  // we should only be expected to get the two values
  // NOTE: here is the bug not happening in tsc https://tsplay.dev/WoM8LN
  expect(keys).toEqual(["minecraft_static", "lol_static"]);
});
