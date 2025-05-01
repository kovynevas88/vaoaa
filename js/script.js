document.addEventListener('DOMContentLoaded', function() {
    // Общие переменные
    const header = document.querySelector('.header');
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const overlay = document.querySelector('.header__overlay');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const headerHeight = header?.offsetHeight || 0;

    // Функция закрытия меню
    function closeAllMenus() {
        nav.classList.remove('active');
        burger.classList.remove('active');
        overlay.classList.remove('active');
        document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('active'));
        document.querySelectorAll('.dropdown-parent').forEach(parent => parent.classList.remove('active'));
    }

    // Плавная прокрутка для якорных ссылок
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if (targetId.length > 1 && !this.classList.contains('dropdown-toggle')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    history.pushState(null, null, targetId);

                    if (window.innerWidth <= 1024) closeAllMenus();
                }
            }
        });
    });

    // Бургер-меню
    burger?.addEventListener('click', function(e) {
        e.stopPropagation();
        nav.classList.toggle('active');
        burger.classList.toggle('active');
        overlay.classList.toggle('active');

        // Закрываем все подменю при открытии/закрытии бургера
        if (!nav.classList.contains('active')) {
            closeAllMenus();
        }
    });

    // Выпадающие подменю
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.closest('.dropdown-parent');
            const menu = parent?.querySelector('.dropdown-menu');
            if (!menu) return;

            const isMobile = window.innerWidth <= 1024;
            const isOpen = menu.classList.contains('active');

            // Закрываем все меню перед открытием нового
            if (!isOpen) {
                document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('active'));
                document.querySelectorAll('.dropdown-parent').forEach(p => p.classList.remove('active'));
            }

            // Переключаем состояние
            menu.classList.toggle('active', !isOpen);
            parent.classList.toggle('active', !isOpen);

            // На мобильных устройствах оставляем меню открытым
            if (isMobile && !isOpen) {
                nav.classList.add('active');
                burger.classList.add('active');
                overlay.classList.add('active');
            }

            e.stopImmediatePropagation();
        });
    });

    // Закрытие меню при клике вне области
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.header__nav') &&
            !e.target.closest('.header__burger')) {
            closeAllMenus();
        }
    });

    // Адаптация к ресайзу
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) closeAllMenus();
    });
});
