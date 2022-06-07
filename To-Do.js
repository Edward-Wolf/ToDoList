let todoItems = [];

function renderToDo (todo) {
    const list = document.querySelector('js-todo-list');

    const isChecked = todo.checked ? 'done': '';

    const node = document.createElement("li");
    node.setAttribute('class', `todo-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);
    node.innerHTML = `
        <input id="${todo.id}" type="checkbox"/>
        <label for="${todo.id}" class="tick js-tick"></label>
        <span>${todo.text}</span>
        <button class="delete-todo js-delete-todo">
        <svg><use href="#delete-icon"></use></svg>
        </button>
    `;

    list.append(node);
}

function addToDo (text) {
    const todo = {
        text,
        checked: false,
        id: Date.now().
    };

    todoItems.push(todo);
    renderToDo(todo);
}

const form = document.querySelector('js-form');
form.addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('js-todo-input');

    const text = input.value.trim();
    if (text !== '') {
        addToDo(text);
        input.value = '';
        input.focus();
    }
});
