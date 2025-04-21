/* Перенос Контактов в бургер-меню */
new TransferElements(
    {
      sourceElement: document.querySelector('.header__contacts'),
      breakpoints: {
        1024: {
          targetElement: document.querySelector('.header__nav'),
          targetPosition: 1
        }
      }
    },
);
