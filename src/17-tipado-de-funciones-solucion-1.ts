export { }

// Cómo tipamos onFocusChange?
// Solución 1: tipar directamente la función

const addListener = (onFocusChange: (isFocused: boolean) => void) => {
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