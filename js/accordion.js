document.querySelectorAll('.accordion-header').forEach(button => {
	button.addEventListener('click', () => {
		const item = button.parentElement;
		const content = button.nextElementSibling;
		const scrollable = content.querySelector('.scrollable-content');

		// Закрываем другие элементы
		document.querySelectorAll('.accordion-item').forEach(otherItem => {
			if (otherItem !== item) {
				otherItem.querySelector('.accordion-header').classList.remove('active');
				otherItem.querySelector('.accordion-content').style.maxHeight = null;
			}
		});

		// Переключаем текущий элемент
		button.classList.toggle('active');
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			// Используем полную высоту scrollable контента
			content.style.maxHeight = scrollable.scrollHeight + 40 + "px"; // +40 для padding
		}
	});
});
