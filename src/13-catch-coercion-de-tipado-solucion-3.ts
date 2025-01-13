// 'e' is of type 'unknown'.ts(18046)

// Forzar un tipo de datos desconocido (type coercion)
// Solución 3:
// Verificar si e es de tipo Error con instanceof

// Aquí verificamos en tiempo de ejecución si e es de tipo Error
// Si es de tipo Error, entonces e.message es de tipo string
// Si no es de tipo Error, entonces e.message es de tipo unknown

// Todo depende de las convenciones usadas en el proyecto
// Y de cuánto se quiere evitar usar el tipo 'any'

export function tryCatchDemo(state: "fail" | "succeed") {
  try {
    if (state === "fail") {
      throw new Error("Failed!");
    }
  } catch (e) {
    return (e instanceof Error) ? e.message : 'Unknown error';
  }
};