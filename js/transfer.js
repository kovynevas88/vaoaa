/* Перенос Контактов в бургер-меню */
new TransferElements(
    {
      sourceElement: document.querySelector('.header__contacts'),
      breakpoints: {
        870: {
          targetElement: document.querySelector('.nav'),
          targetPosition: 0
        }
      }
    }
);