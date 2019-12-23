(async function(){
//   let response = await fetch('https://jsonplaceholder.typicode.com/todos');
  let response = await fetch('http://localhost:3000/todos');
  let todos = await response.json();
  console.log(todos);

  function getTodos() {
    let list = todos.reduce((agg, todo) => {
      return `
        <div>
            <label id="label_${todo.id}" for="${todo.id}" class="my-1 check-label" ${todo.completed ? "style='text-decoration: line-through'" : ""}>
            <input type='checkbox' class="input-check" name="${todo.id}" id="${todo.id}" data-todo="${todo.id}" ${todo.completed ? "checked" : ""}>
            <span id="title_${todo.id}">${todo.title}</span>
            </label>
        </div>` + agg;
    }, '');
    document.getElementById("todos").innerHTML = list;
    checkbox();
  }

  getTodos();

document.getElementById("body").addEventListener("submit" , async (temp) => {
    temp.preventDefault();
    let newTodo = JSON.parse(`{
                      "userId": 0,
                      "id": 0,
                      "title": "",
                      "completed": false
                    }`);
    newTodo.userId = +document.forms['todo-form']['uid'].value;
    newTodo.id = todos[todos.length-1].id + 1;
    newTodo.title = document.forms['todo-form']['title'].value;
    newTodo.completed = false;

    console.log(JSON.stringify(newTodo));

    // await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    await fetch(`http://localhost:3000/todos`, {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    todos.push(newTodo);
    console.log(todos);
    getTodos();
})

function checkbox() {
    document.querySelectorAll('.input-check').forEach((element) => {
        const id = element.getAttribute('data-todo');
        element.addEventListener('change', temp => markTodo(temp, id));
    });
}

async function markTodo(temp, id)  {
        // response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            completed: temp.target.checked
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    let todo = await response.json();
    console.log(todo);
    todos[todo.id-1].completed = todo.completed;
    const decoration = todo.completed ? 'line-through' : 'none';
    document.getElementById(`label_${todo.id}`).setAttribute("style" , `text-decoration: ${decoration}`);
}

})();
