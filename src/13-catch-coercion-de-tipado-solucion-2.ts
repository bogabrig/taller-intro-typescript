// 'e' is of type 'unknown'.ts(18046)

// Forzar un tipo de datos desconocido (type coercion)
// Solución 2:
// Forzar el tipado a Error

// e sigue siendo de tipo 'unknown'
// Pero dentro del catch lo forzamos a ser de tipo Error
// Y con eso recuperamos el autocompletado
// No es una solución segura, porque no verificamos
// si e es de tipo Error o no. Lo forzamos (type casting)

export function tryCatchDemo(state: "fail" | "succeed") {
  try {
    if (state === "fail") {
      throw new Error("Failed!");
    }
  } catch (e) {
    return (e as Error).message;
  }
};