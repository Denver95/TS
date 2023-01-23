import { renderBlock } from './lib.js'

// favoriteItemsAmount  - колличество избранных элементов
// userName - имя пользователя
// linkToAvatar - ссылка на аватар

// !1. Принимаемм 3 аргумента
export function renderUserBlock(profile) {
  const { favoriteItemsAmount, userName, linkToAvatar } = profile;
  // !2. Если элементов меньше 1 то НИЧЕГО НЕТ
  // Если больше 1 то ввыведт число
  const favoritesCaption = favoriteItemsAmount < 1 ? 'ничего нет' : favoriteItemsAmount

  // !3. Если элементов меньше 1 то в переменной hasFavoriteItems будет true и при закрашиваниие сердечке мы передаем нашу перменную, а там тоже тернарный оператор в котором поле true пустая строка. А если будет False то добавиться класс с сердечком 
  const hasFavoriteItems = favoriteItemsAmount < 1 ? true : false

  console.log('favoritesCaption', favoritesCaption)
  console.log('hasFavoriteItems', hasFavoriteItems)

  // !4 Вызов функция которая нам отрисует наш html
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${linkToAvatar} alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon ${hasFavoriteItems ? '' : 'active'}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
