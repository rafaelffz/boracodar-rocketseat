const filterElement = document.querySelector('header input')
const contacts = document.querySelectorAll('.person')

filterElement.addEventListener('input', filterContact)

function filterContact() {
    if(filterElement.value != '') {
        for(let contact of contacts) {
            let name = contact.querySelector('h3')
            name = name.textContent.toLowerCase()

            let filterText = filterElement.value.toLowerCase()
            if(!name.includes(filterText)) {
                // contact.style.display = 'none'
                contact.classList.add('none')
            } else {
                // contact.style.display = 'flex'
                contact.classList.remove('none')
                contact.classList.add('flex')
            }
        }
    } else {
        for(let contact of contacts) {
            // contact.style.display = 'flex'
            contact.classList.remove('none')
            contact.classList.add('flex')
        }
    }
}