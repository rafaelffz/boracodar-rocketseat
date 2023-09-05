const icon = document.querySelector('.input-wrapper i.ph')

icon.addEventListener('click', () => {
  const input = document.querySelector('.input-wrapper input')
  input.value = ""
  input.focus()
})