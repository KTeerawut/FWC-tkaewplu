const list = document.getElementById("ft_list");
const newButton = document.getElementById("newButton");

function saveTodos() {
    const todos = [];

    list.querySelectorAll(".todo").forEach(function (todo) {
        todos.push(todo.textContent);
    });

    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(todos)) +
        "; path=/";
}

function createTodo(text) {
    const todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;

    todo.addEventListener("click", function () {
        if (confirm("Do you want to remove this TO DO?")) {
            todo.remove();
            saveTodos();
        }
    });

    list.prepend(todo);
}

function loadTodos() {
    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        if (cookie.startsWith("todos=")) {
            const data = cookie.substring(6);
            const todos = JSON.parse(decodeURIComponent(data));

            for (let i = todos.length - 1; i >= 0; i--) {
                createTodo(todos[i]);
            }
        }
    }
}

newButton.addEventListener("click", function () {
    const text = prompt("Enter a new TO DO");

    if (text !== null && text.trim() !== "") {
        createTodo(text.trim());
        saveTodos();
    }
});

loadTodos();
