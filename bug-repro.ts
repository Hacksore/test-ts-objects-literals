import { getTemplateLiteralKeys } from "./bug";

// grab all the keys
const keys = getTemplateLiteralKeys();

// we should only be expected to get the two values
// NOTE: here is the bug not happening in tsc https://tsplay.dev/WoM8LN
console.log(keys);
