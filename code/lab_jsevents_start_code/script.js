const enter = document.getElementById('enter');

enter.addEventListener('click', () => {
    const input = document.getElementById('new-todo').value;
    var button = document.createElement("button");
    button.innerHTML = "Delete";
    const newtodo = document.createElement('li');
    newtodo.innerText = `${input}`;
    const list = document.querySelector("#list");
    list.appendChild(newtodo);
    list.appendChild(button);
    button.addEventListener('click', () => {
        list.removeChild(newtodo);
        list.removeChild(button);
    });
});
