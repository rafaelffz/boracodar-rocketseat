const filterElement = document.querySelector('header input')
const contactWrappers = document.querySelectorAll('.list-wrapper')
const contacts = document.querySelectorAll('.person')

filterElement.addEventListener('input', filterContact)

function filterContact() {
    let filterText = filterElement.value.toLowerCase().trim()
    
    contactWrappers.forEach(contactWrapper => {
        let hasContact = false

        contacts.forEach(contact => {
            const name = contact.querySelector('h3').textContent.toLowerCase()
            
            if(name.includes(filterText)) {
                contact.style.display = 'flex'
                if(contactWrapper.contains(contact)) {
                    hasContact = true
                }
            } else {
                contact.style.display = 'none'
            }
        })
        if(hasContact) {
            contactWrapper.style.display = 'initial'
        } else {
            contactWrapper.style.display = 'none'
        }
    })
}
