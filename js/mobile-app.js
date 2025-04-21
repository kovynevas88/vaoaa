document.addEventListener('DOMContentLoaded', () => {
    // Добавляем обработчики для кнопок
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Можно добавить аналитику
            console.log(`Download clicked: ${this.textContent.trim()}`);
        });
    });
});
