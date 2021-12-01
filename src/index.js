document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    let form = document.getElementById('create-task-form');
    let input = document.getElementById('new-task-description');
    let list = document.getElementById('tasks')
    let li = document.createElement('li')
    li.innerText = input.value;
    list.append(li);
    form.reset();
  })
})



