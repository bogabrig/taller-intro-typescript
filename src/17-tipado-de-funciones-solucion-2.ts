export { }

// Cómo tipamos onFocusChange?
// Solución 2: extraer el tipo declarándolo

// Normalmente no vamos a necesitar tipar a menos que
// pasemos funciones a otras funciones o que declaremos el tipo de la función''
// Qué tipos de funciones pasamos?
// Event Listeners, Callbacks, Higher Order Functions, etc.

type FocusListener = (isFocused: boolean) => void

const addListener = (onFocusChange: FocusListener) => {
  window.addEventListener('focus', () => {
    onFocusChange(true)
  })

  window.addEventListener('blur', () => {
    onFocusChange(false)
  })
}

addListener((isFocused) => {
  console.log(isFocused)
})