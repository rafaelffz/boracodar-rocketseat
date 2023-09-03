let currentStep = 0
const form = document.querySelector('form')
const formSteps = document.querySelectorAll('.form-step')

form.addEventListener('click', (e) => {
  if(!e.target.matches('[data-action]')) {
    return
  }
  
  const actions = {
    prev() {
      currentStep--
    },
    next() {
      // if(!isValidInputs()) {
      //   return
      // }
      currentStep++
    }
  }

  const action = e.target.dataset.action
  actions[action]()

  updateFormStep()
  updateProgressStep()
})

function updateFormStep() {
  formSteps.forEach((formStep) => {
    formStep.classList.remove('active')
    formSteps[currentStep].classList.add('active')
  })
}

const progressStep = document.querySelectorAll('.step-progress [data-step]')

function updateProgressStep() {
  progressStep.forEach((step, index) => {
    step.classList.remove('active')
    step.classList.remove('done')

    if(index < currentStep + 1) {
      step.classList.add('active')
    }

    if(index < currentStep) {
      step.classList.add('done')
    }
  })
}

// validation
function isValidInputs() {
  const currentFormStep = formSteps[currentStep]
  const formFields = [...currentFormStep.querySelectorAll('input'), ...currentFormStep.querySelectorAll('textarea')]
  
  return formFields.every(input => input.reportValidity())
}

// !submit form
form.addEventListener('submit', e => {
  e.preventDefault()

  const data = new FormData(form)
  alert(`Obrigado ${data.get('name')}!`)
})

formSteps.forEach(formStep => {
  function addHide() {
    formStep.classList.add('hide')
  }

  formStep.addEventListener('animationend', () => {
    addHide()
    formSteps[currentStep].classList.remove('hide')
  })
})