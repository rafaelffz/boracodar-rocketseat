const copyButton = document.querySelector('button.copy')

copyButton.addEventListener('click', () => {
  const texts = document.querySelectorAll('.transcription .content p')
  const output = [...texts].reduce((acc, text) => acc += text.innerText, "")
  navigator.clipboard.writeText(output)

  const icon = copyButton.querySelector('i.ph')
  
  icon.classList.add('copied')

  setTimeout(() => {
    icon.setAttribute('class', 'ph ph-check-circle')
    icon.classList.remove('copied')
  }, 100);
  
  setTimeout(() => {
    icon.setAttribute('class', 'ph ph-copy-simple')
  }, 2000);
})