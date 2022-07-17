let isFirstVisit = getCookie('is_first_visit');

if(!isFirstVisit) {
  let name = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
  document.cookie = "is_first_visit=true; max-age=30";
  document.cookie = "cookie_client_name=" + name;
} else {
  alert("Добрый день, " + getCookie('cookie_client_name') + "! Давно не виделись. В последний раз вы были у нас в " + localStorage.getItem('visitDate'));
}

/*преобразуем время в человекочитаемый формат*/
let timeFormat = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};
localStorage.setItem('visitDate', new Date().toLocaleDateString("ru-RU", timeFormat));
/*преобразуем время в человекочитаемый формат*/

/*функция получения конкретной куки по имени*/
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
/*функция получения конкретной куки по имени*/