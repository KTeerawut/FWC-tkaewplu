function saveTodos() {
    const todos = [];

    $(".todo").each(function () {
        todos.push($(this).text());
    });

    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(todos)) +
        "; path=/";
}

function createTodo(text) {
    const todo = $("<div>")
        .addClass("todo")
        .text(text);

    todo.click(function () {
        if (confirm("Do you want to remove this TO DO?")) {
            $(this).remove();
            saveTodos();
        }
    });

    $("#ft_list").prepend(todo);
}

function loadTodos() {
    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        if (cookie.startsWith("todos=")) {
            const data = cookie.substring(6);
            const todos = JSON.parse(
                decodeURIComponent(data)
            );

            for (let i = todos.length - 1; i >= 0; i--) {
                createTodo(todos[i]);
            }
        }
    }
}

$("#newButton").click(function () {
    const text = prompt("Enter a new TO DO");

    if (text !== null && text.trim() !== "") {
        createTodo(text.trim());
        saveTodos();
    }
});

loadTodos();
