const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Agos', 'Set', 'Out', 'Nov', 'Dez']

let date = new Date()

app.querySelector('main').innerHTML = render()
app.querySelector('header span').innerHTML = date.getFullYear()

function render() {
    let output = ''
    const thisMonth = months[new Date().getMonth()]
    
    for(let month of months) {
        const active = thisMonth == month ? 'active' : ''
        output += `<div class="${active}">${month}</div>`
    }
    return output
}

let divs = document.querySelectorAll('main > div')

for(let div of divs) {
    div.addEventListener('click', function() {
        let previous = document.querySelector('.active')
        if(previous) {
            previous.classList.remove('active')
        }
        this.classList.add('active')
    })
}

function nextYear() {
    app.querySelector('header ph-caret-right')
    date.setFullYear(date.getFullYear() + 1)
    app.querySelector('header span').innerHTML = date.getFullYear()
}

function previousYear() {
    app.querySelector('header ph-caret-left')
    date.setFullYear(date.getFullYear() - 1)
    app.querySelector('header span').innerHTML = date.getFullYear()
}