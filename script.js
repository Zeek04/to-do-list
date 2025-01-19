const submitBtn = document.getElementById('submit');
const textBox = document.getElementById('text')
const listContainer = document.getElementById('list')


submitBtn.addEventListener('click', () => {
    
    if (textBox.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li')
    li.textContent = textBox.value;
    li.classList.add('task-item');

    li.addEventListener('click', () => {
        li.remove();
    })

    listContainer.append(li)

    textBox.value = ''

})