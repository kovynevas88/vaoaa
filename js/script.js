document.addEventListener('DOMContentLoaded', function() {
    // Находим все якорные ссылки
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    // Высота фиксированного хедера (подкорректируйте под ваш случай)
    const headerHeight = document.querySelector('.header').offsetHeight;

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Получаем целевой элемент
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Вычисляем позицию с учетом высоты хедера
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerHeight;

                // Плавный скролл
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Обновляем URL без перезагрузки страницы
                history.pushState(null, null, targetId);
            }
        });
    });
});


