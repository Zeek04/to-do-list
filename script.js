const submitBtn = document.getElementById('submit');
const textBox = document.getElementById('text')
const listContainer = document.getElementById('list')


submitBtn.addEventListener('click', () => {
    const li = document.createElement('li')

    li.textContent = textBox.value;


    listContainer.append(li)

})