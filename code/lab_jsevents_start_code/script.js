const enter = document.getElementById('enter');

enter.addEventListener('click', () => {
    const input = document.getElementById('new-todo').value;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var button = document.createElement("button");
    button.innerHTML = "Delete";
    const newtodo = document.createElement('li');
    newtodo.innerText = `${input}`;
    const list = document.querySelector("#list");
    list.appendChild(newtodo);
    list.appendChild(checkbox);
    list.appendChild(button);
       
    checkbox.addEventListener("change", () => {
        list.removeChild(newtodo);
        list.removeChild(checkbox);
        list.removeChild(button);
        
        const completedItem = document.getElementById("completedItem");
        completedItem.appendChild(newtodo);
    }); 
    button.addEventListener('click', () => {
        list.removeChild(newtodo);
        list.removeChild(checkbox);
        list.removeChild(button);
    });

});
