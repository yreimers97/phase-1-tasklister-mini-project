document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    buildTasks(event.target.new-tasks.value)
    form.reset()
  })
});

function buildTasks(tasks) {
    let p = document.createElement('p')
    let description = document.createElement('button')
    description.addEventListener('click', toDelete)
    description.textContent = 'x'
    p.textContent = `${tasks}`
    p.appendChild(description)
    console.log(p)
    document.querySelector('#tasks').appendChild(p)
}

function toDelete(event) {
  event.target.parentNode.remove()
}
