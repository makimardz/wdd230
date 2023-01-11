const list = document.querySelector('.list');
const input = document.querySelector('input');
const button = document.querySelector('button');

    button.addEventListener('click', () => {
    const myChap = input.value;
    input.value = '';

    const li = document.createElement('li');
    const liText = document.createElement('span');
    const liBtn = document.createElement('button');

    li.appendChild(liText);
    liText.textContent = myChap;
    li.appendChild(liBtn);
    liBtn.textContent = 'Delete';
    list.appendChild(li);

    liBtn.addEventListener('click', () => {
    list.removeChild(li);
    });

    input.focus();
});



