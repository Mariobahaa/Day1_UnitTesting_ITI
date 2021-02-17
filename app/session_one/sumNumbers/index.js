export const sum = (a, b) => {
  if (typeof a === "string") return "no string inputs are allowed";
  if (typeof b === "string") return "no string inputs are allowed";
  return a + b;
};
