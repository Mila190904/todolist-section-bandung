// Mengambil form element
const formElement = document.querySelector('.form-todo');

// // Menambahkan form even Listener
// formElement.addEventListener('submit', (event) => {
//     event.preventDefault();
    
//     // Mengambil input element di HTML
//     const inputElement = document.querySelector('.form-todo');
//     console.log(inputElement.value);

//     // Mengambil wrapper todo element sebagai entry point todo item
//     const wrapperTodoElemet = document.querySelector('.wrapper-todo');

//     // Membuat todo item di js
//     // const todoItem = document.createElement('li);
//     const todoItem = `<li class ="todo-item">$(inputElement.value)</li>`;

//     // menambahkan todo Item ke dalam wrapper todo
//     wrapperTodoElemet.innerHTML = todoItem;

// });


// Menambahkan form even Listener
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Mengambil input element di HTML
    const inputElement = document.querySelector('.input-todo');
    console.log(inputElement.value);

    // Mengambil wrapper todo element sebagai entry point todo item
    const wrapperTodoElemet = document.querySelector('.wrapper-todo');

    // Membuat todo item di js
    // const todoItem = document.createElement('li);
    const todoItem = document.createElement('li');
    todoItem.innerHTML = inputElement.value;

    // menambahkan todo Item ke dalam wrapper todo
    wrapperTodoElemet.append(todoItem);

    // Menghapus elemen
    inputElement.value ='';

});