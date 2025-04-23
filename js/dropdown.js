document.addEventListener('DOMContentLoaded', function() {
	const dropdowns = document.querySelectorAll('.dropdown');
	const isMobile = window.matchMedia('(max-width: 1024px)').matches;

	function closeAllDropdowns() {
	  dropdowns.forEach(dropdown => {
		const menu = dropdown.querySelector('.dropdown__content');
		menu.classList.remove('active');
		dropdown.setAttribute('aria-expanded', 'false');
	  });
	}

	dropdowns.forEach(dropdown => {
	  const link = dropdown.querySelector('.header__nav__link');
	  const menu = dropdown.querySelector('.dropdown__content');

	  if(isMobile) {
		link.addEventListener('click', function(e) {
		  e.preventDefault();
		  e.stopPropagation();
		  const isOpen = menu.classList.contains('active');
		  closeAllDropdowns();
		  if(!isOpen) {
			menu.classList.add('active');
			dropdown.setAttribute('aria-expanded', 'true');
		  }
		});
	  }

	  // Обработчик для закрытия при клике вне меню
	  document.addEventListener('click', function(e) {
		if(isMobile && !dropdown.contains(e.target)) {
		  closeAllDropdowns();
		}
	  });

	  // Обработка клавиатуры
	  link.addEventListener('keydown', function(e) {
		if(e.key === 'Enter' || e.key === ' ') {
		  e.preventDefault();
		  const isOpen = menu.classList.contains('active');
		  closeAllDropdowns();
		  if(!isOpen) {
			menu.classList.add('active');
			dropdown.setAttribute('aria-expanded', 'true');
		  }
		}
		if(e.key === 'Escape') {
		  closeAllDropdowns();
		}
	  });
	});

	// Закрытие при клике на пункт меню
	document.querySelectorAll('.dropdown__content__item-link').forEach(link => {
	  link.addEventListener('click', () => closeAllDropdowns());
	});
  });
