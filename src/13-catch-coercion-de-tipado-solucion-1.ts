// 'e' is of type 'unknown'.ts(18046)

// Forzar un tipo de datos desconocido (type coercion)
// Solución 1:
// Usar el tipo 'any'

// Problemas: perdemos el tipado y el autocompletado
// Después podemos tener problemas por escribir algo mal
// No es recomendable (pero existe como solución temporal)

export function tryCatchDemo(state: "fail" | "succeed") {
  try {
    if (state === "fail") {
      throw new Error("Failed!");
    }
  } catch (e: any) {
    return e.message;
  }
};