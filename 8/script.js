const btn = document.getElementById('request');
const pageNum = document.getElementById('pageNum');
const limit = document.getElementById('limit');

const infoField = document.getElementById('info');

/*если в local storage хранятся данные о картинках, то выводим их при открытии\обновлении страницы*/
if(localStorage.getItem('image_0')) {
  for (var i = 0; i < localStorage.getItem('imageQuantity'); i++) {
      infoField.innerHTML += "<div class='col-md-4'><img src='" + localStorage.getItem('image_'+i) + "'/></div>";
  }
}
/*если в local storage хранятся данные о картинках, то выводим их при открытии\обновлении страницы*/

const getPics = () => {
  return fetch('https://picsum.photos/v2/list?page=' + pageNum.value + '&limit=' + limit.value)
    .then((response) => {
      //console.log('response', response);
      return response.json();
    })
    .then((json) => { return json; })
    .catch(() => { console.log('error') });
}

btn.addEventListener('click', async () => {
  infoField.innerHTML = '';

  /*проверка корректности указанных номеров страниц*/
  let firstCondition = (pageNum.value < 1 || pageNum.value > 10 || isNaN(pageNum.value)) ? true : false;
  let secondCondition = (limit.value < 1 || limit.value > 10 || isNaN(limit.value)) ? true : false;

  infoField.innerHTML = (firstCondition && secondCondition) ? 'Номер страницы и лимит вне диапазона от 1 до 10' : (firstCondition) ? 'Номер страницы вне диапазона от 1 до 10' : (secondCondition) ? 'Лимит вне диапазона от 1 до 10' : '';
  /*проверка корректности указанных номеров страниц*/
  
  if(!firstCondition && !secondCondition) {

    const requestResult = await getPics();
    let quantityPics = Object.keys(requestResult);
    let sizeOfQuantityPics = Object.keys(requestResult).length;

    /*сохраняем количество картинок*/
    localStorage.setItem('imageQuantity', sizeOfQuantityPics);
    /*сохраняем количество картинок*/

    /*выводим картинки сеткой по 3 в ряд и сохраняем их адреса в local storage*/
    quantityPics.forEach((element) => {
      infoField.innerHTML += "<div class='col-md-4'><img src='"+ requestResult[element].download_url + "' alt='Image by " + requestResult[element].author + "' title='Image by " + requestResult[element].author + "' /></div>";
      localStorage.setItem('image_'+element, requestResult[element].download_url);
    });
    /*выводим картинки сеткой по 3 в ряд и сохраняем их адреса в local storage*/
  }

});