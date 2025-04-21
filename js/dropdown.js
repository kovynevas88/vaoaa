// Добавляем в burger.js или создаем новый файл menu-accessibility.js
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.header__nav__link');
        const menu = dropdown.querySelector('.dropdown__content');

        // Обработчик для клавиатуры
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                e.preventDefault();
                toggleMenu();
            }
            if (e.key === 'Escape' || e.keyCode === 27) {
                closeMenu();
            }
        });

        // Обработчик для мыши
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMenu();
        });

        // Закрытие при потере фокуса
        dropdown.addEventListener('focusout', function(e) {
            if (!dropdown.contains(e.relatedTarget)) {
                closeMenu();
            }
        });

        function toggleMenu() {
			const isOpen = menu.classList.contains('active');
			closeAllMenus();
			if (!isOpen) {
				menu.classList.add('active');
				dropdown.setAttribute('aria-expanded', 'true');
				menu.querySelector('a').focus();
			}
		}

        function closeMenu() {
            menu.classList.remove('active');
            dropdown.setAttribute('aria-expanded', 'false');
        }
    });

    function closeAllMenus() {
        dropdowns.forEach(dropdown => {
            dropdown.querySelector('.dropdown__content').classList.remove('active');
            dropdown.setAttribute('aria-expanded', 'false');
        });
    }

    // Закрытие меню при клике вне области
    document.addEventListener('click', function(e) {
		const isClickInside = dropdown.contains(e.target) ||
							 e.target.closest('.dropdown__content');

		if (!isClickInside) {
			closeAllMenus();
		}
	});
});
