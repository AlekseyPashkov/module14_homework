let randomIntResult;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    randomIntResult = randomInt(0, 100);
      if (randomIntResult%2 == 0) { /*проверяем на четность*/
        resolve("Успешное выполнение promise");
      } else {
        reject("Неуспешное выполнение promise");
      }
  }, 3000);
});


myPromise
  .then((result) => {
    console.log('Завершено успешно. Сгенерированное число — ' + randomIntResult, result);
  })
  .catch((error) => {
    console.log('Завершено с ошибкой. Сгенерированное число — ' + randomIntResult, error);
  });


function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}