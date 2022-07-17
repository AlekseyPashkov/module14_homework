const btn = document.getElementById('getTasksBtn');
const inputID = document.getElementById('userID');
const tasksField = document.getElementById('users-tasks');

const getTasks = () => {
  return fetch('https://jsonplaceholder.typicode.com/users/' + inputID.value + '/todos')
    .then((response) => {
      //console.log('response', response);
      return response.json();
    })
    .then((json) => { return json; })
    .catch(() => { console.log('error') });
}

btn.addEventListener('click', async () => {

  /*очищаем информацию в div для текста*/
  tasksField.innerHTML = '';
  /*очищаем информацию в div для текста*/

  const requestResult = await getTasks();
  let quantityTasks = Object.keys(requestResult);

  if(quantityTasks == "") {
    tasksField.innerHTML = 'Пользователь с id ' + inputID.value + ' не найден!';
  } else {
    quantityTasks.forEach((element) => {
      /*выводим задачу, если выполнена то перечеркиваем*/
      tasksField.innerHTML += requestResult[element].completed ? ('<li>' + "Задача: " + requestResult[element].title + '</li>') : ('<li><s>' + "Задача: " + requestResult[element].title + '</s></li>');
      /*выводим задачу, если выполнена то перечеркиваем*/
    });
  }

});