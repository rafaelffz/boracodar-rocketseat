const filterElement = document.querySelector('header input')
const contacts = document.querySelectorAll('.list-wrapper')

filterElement.addEventListener('input', filterContact)

function filterContact() {
    if(filterElement.value != '') {
        for(let contact of contacts) {
            const names = contact.querySelectorAll('h3')
            const filterText = filterElement.value.toLowerCase()
            const people = document.querySelectorAll('.person')
            

            let bool = false
            names.forEach(name => {
                if(!name.textContent.toLowerCase().startsWith(filterText) && !bool) {
                    // contact.style.display = 'none'
                    contact.classList.add('none')
                    for(let person of people) {
                        person.classList.add('none')
                    }
                } else {
                    // contact.style.display = 'flex'
                    contact.classList.remove('none')
                    contact.classList.add('flex')
                    bool = true
                }
            }) 
        }
    } else {
        for(let contact of contacts) {
            // contact.style.display = 'flex'
            contact.classList.remove('none')
            contact.classList.add('flex')
        }
    }
}