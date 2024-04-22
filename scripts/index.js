

// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const content = document.querySelector('.content');
const cardList = content.querySelector('.places__list');


// @todo: Функция создания карточки

function cardAdd(placesItem, cardDelite) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const buttonDelite = cardElement.querySelector('.card__delete-button')

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');

    cardImage.src = placesItem.link;
    cardImage.alt = placesItem.name;  
    cardTitle.textContent = placesItem.name;


    buttonDelite.addEventListener('click', function (evt) {
          cardDelite(cardElement);
      }); 

      return cardElement;
}

// @todo: Функция удаления карточки

    function CardRemuve(cardElement) { 
        cardElement.remove();
    }
// @todo: Вывести карточки на страницу
initialCards.forEach(function(placesItem) {
    const element = cardAdd(placesItem, CardRemuve);
    cardList.append(element);
  });