const todo_list = [
  {
    name: 'make dinner', 
    due_date: '2025-08-01'
  }, 
  {
    name: 'do laundry', 
    due_date: '2025-08-02'
  }
];

render_todo_list();


function render_todo_list() {
  let todo_list_html = '';

  todo_list.forEach(function(todo_object, index) {
    const { name, due_date} = todo_object;

    const html = `
    <div>${name}</div>
    <div>${due_date}</div>
    <button 
      onclick="todo_list.splice(${index}, 1);
      render_todo_list();
      " class="delete_todo_button">
      Delete</button>`;
    
      todo_list_html+= html;
  });

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

  input_element.value = '';

  render_todo_list();
}
