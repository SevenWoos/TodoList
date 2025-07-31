const todo_list = [
  {
  name: 'make dinner', 
  due_date: '2022-12-12'
}, 
  {
  name: 'wash dishes', 
  due_date: '2022-12-22'
  }
];

render_todo_list();

function render_todo_list() {
  let todo_list_html = '';

  for(let i = 0; i < todo_list.length; i++) {
    const todo_object = todo_list[i];

    const { name, due_date } = todo_object;

    const html = `
      <p>
      ${name} ${due_date}
      <button onclick="
        todo_list.splice(${i}, 1);
        render_todo_list();
      ">
      Delete
      </button>
      </p>
    `;
    todo_list_html += html;
  }

  console.log(todo_list_html);

  document.querySelector('.js_todo_list')
    .innerHTML = todo_list_html;
}


function add_todo() {
  const input_element = document.querySelector('.js_name_input');
  const name = input_element.value;
  const date_input_element = document.querySelector('.js_due_date_input');
  const due_date = date_input_element.value;

  todo_list.push(
    {
      name, 
      due_date
    }
  );

  console.log(todo_list);

  input_element.value = '';

  render_todo_list();
}