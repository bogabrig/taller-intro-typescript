// 'e' is of type 'unknown'.ts(18046)

export function tryCatchDemo(state: "fail" | "succeed") {
  try {
    if (state === "fail") {
      throw new Error("Failed!");
    }
  } catch (e) {
    return e.message;
  }
};