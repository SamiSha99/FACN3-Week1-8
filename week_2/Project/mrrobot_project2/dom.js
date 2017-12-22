// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');
  var state = [{
      id: -3,
      description: 'شراء بيض حليب و خبز',
      'done': false
    },
    {
      id: -2,
      description: 'ذهاب الى العمل',
      'done': false
    },
    {
      id: -1,
      description: 'حضور عرس علي بابا',
      'done': false
    },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    var descSpan = document.createElement('span');
    descSpan.innerHTML = todo['description'];




    //delete button
    var deleteButtonNode = document.createElement('button');
    var deleteIcon = document.createElement('i');
    deleteIcon.className = "fa fa-trash";
    deleteButtonNode.appendChild(deleteIcon);
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    //markTodo button

    var checkboxNode = document.createElement('input');
    if (todo.done == true) {
      checkboxNode.setAttribute('checked', true);
    }
    //var newID = todo.id;
    checkboxNode.type = 'checkbox';
    checkboxNode.id = todo.id;
    checkboxNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, checkboxNode.id);
      update(newState);

    });
    // add classes for css

    //The order that the todo list generates
    todoNode.appendChild(checkboxNode);
    todoNode.appendChild(descSpan);
    todoNode.contentTee
    todoNode.appendChild(deleteButtonNode);


    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {

    addTodoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var description = document.getElementById('desc').value;
      document.getElementById('desc').value = ''; //clears the form
      var newState = todoFunctions.addTodo(state, description);
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
