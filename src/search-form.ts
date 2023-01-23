import { renderBlock } from './lib.js'



export function renderSearchFormBlock() {
  let valueDay = null;
  let valueMin = null;
  let valueMaxIn = null;
  let valueMaxOut = null;
  let checkInDate = null;
  let checkOutDate = null;
  getCurrentDate();
  // Функция создания даты
  function getCurrentDate() {
    const today = new Date();
    const d = today.getDate();
    const m = today.getUTCMonth();
    const y = today.getFullYear();
    const dmy = `${y}-${(m < 10 ? '0' : '') + (m + 1)}-${d} `;
    console.log('DaTE', dmy)

    // Формируем дату из занчений. Находим последний день в месяце и передаем в функцию
    let date = new Date(y, m + 2, 0);
    let day = date.getDate();
    let maxDay = `${y}-${(m < 10 ? '0' : '') + (m + 2)}-${day} `;

    assingDateVariable(dmy, maxDay)
  }

  // Присваиваем дату в Переенные
  function assingDateVariable(dmy, maxDay) {
    // Общая дата 16.01.2023
    valueDay = dmy
    // Минимальная дата Заезда и выезда 
    valueMin = dmy;
    // Максимальная дата которую можно выбрать при заезде. последний день Следующего месяц
    valueMaxIn = maxDay;
    valueMaxOut = maxDay;

  }

  const contentHtml = `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${valueDay} min=${valueMin} max=${valueMaxIn} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${valueDay} min=${valueMin} max=${valueMaxOut} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `

  renderBlock(
    'search-form-block',
    contentHtml
  )

  let dateIn = document.querySelector('#check-in-date');
  let dateOut = document.querySelector('#check-out-date');


  dateIn.addEventListener('change', (e) => {
    console.log('event', e)
    console.log('event.target', e.target)
    console.log('event.target.value', e.target.value)
    // Получаем по клилку Выбранную дату.
    let today = new Date(e.target.value)

    // let today = new Date(inputValueDateIn)
    // Корректируем дату дня заезда
    let dIn = today.getDate(today.setDate(today.getDate() + 1));
    // Корректируем дату дня Выезда
    let dOut = today.getDate(today.setDate(dIn + 2));
    let M = today.getUTCMonth();
    let Y = today.getFullYear();
    let checkInDate = `${Y}-${(M < 10 ? '0' : '') + (M + 1)}-${dIn} `;
    console.log('Дата Заезда', checkInDate)
    let checkOutDate = `${Y}-${(M < 10 ? '0' : '') + (M + 1)}-${dOut} `;
    console.log('Дата Выезда', checkOutDate)
  });
}