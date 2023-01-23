
// @6 функция показывает разметку в браузере
// @6.1 elementId - название класса для добовления на страничку
// @6.2 html - наша переменая которая содержит разметку.
export function renderBlock(elementId: string, html: string) {
  const element = document.getElementById(elementId)
  // element.innerHtml = html
  element.innerHTML = html
}

// @2.Функция вызвается из Index и принимает 2 аргумента в виде обьектов.
// @2.1 message - принимет text и type.
// @2.2 action - принимает name и handler(функцию)
export function renderToast(message, action) {

  //@3 перменная в которую запишем данные
  let messageText = ''

  //@4 Проверям чтоб в message не был пуст.
  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }
  // @5 После записи в переменную разметки, вызовем фкнцию  в которой передадим (класс, и переменную с разметкой)
  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')

  if (button != null) {
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler(messageText)
        renderBlock(
          'toast-block',
          messageText = ''
        )
      }
      // renderToast('2') 
      // renderToast()
    }
  }
}