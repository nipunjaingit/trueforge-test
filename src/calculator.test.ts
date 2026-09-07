import { add } from "./calculator";

const result = add(2, 3);

if (result !== 5) {
  throw new Error(`Expected 5, got ${result}`);
}

console.log("Test passed");