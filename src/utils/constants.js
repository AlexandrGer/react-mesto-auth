// Кнопки
export const buttonEditProfile = document.querySelector('.profile__button-edit');
export const buttonAddNewCard = document.querySelector('.profile__button-add');
export const buttonEditAvatar = document.querySelector('.profile__button-avatar')

// Переменные из секции Профиль
export const nameProfile = document.querySelector('.profile__name');
export const jobProfile = document.querySelector('.profile__job');
export const avatarProfile = document.querySelector('.profile__avatar');

// Контейнер для вставки Карточек
export const cardList = document.querySelector('.elements__items');

//Переменные из Попапа Редактирования Пофиля
export const popupProfile = document.querySelector('.popup_type_edit');
// export const formElementProfile = popupProfile.querySelector('.popup__form');
// export const nameInput = popupProfile.querySelector('.popup__input_type_name');
// export const jobInput = popupProfile.querySelector('.popup__input_type_job');

//Переменные из Попапа Добавления Карточек
export const popupNewCard = document.querySelector('.popup_type_new-card');
// export const formElementNewCard = popupNewCard.querySelector('.popup__form');

//Переменные для попапа карточки
export const popupSerchCard = document.querySelector('.popup_type_view-img');

// Переменные Попапа Смены аватара
export const popupAvatar = document.querySelector('.popup_type_edit-avatar');
// export const formElementAvatar = popupAvatar.querySelector('.popup__form');
// export const avatarInput = popupAvatar.querySelector('.popup__input_type_avatar');

export const popupDelete = document.querySelector('.popup_type_delete-card');

export const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button-submit',
	inactiveButtonClass: 'popup__button-submit_disabled',
	inputErrorClass: 'popup__input_text_error',
	errorClass: 'popup__input-error_visible'
};