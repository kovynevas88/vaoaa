document.addEventListener('DOMContentLoaded', () => {
    const days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    const groups = [
        {
            day: 'понедельник',
            time: '18:30',
            name: 'Околица',
            metro: 'Первомайская',
            address: '16-я Парковая, д.13',
            contacts: 'aaokolica@mail.ru',
			how_to_get: 'м. Первомайская, далее по Измайловскому бульвару до 16-й Парковой и направо. Второе здание с правой стороны (наркодиспансер)'
        },
        {
            day: 'понедельник',
            time: '19:00',
            name: 'Время жить',
            metro: 'Перово',
            address: '2-ая Владимирская, д.58',
            contacts: '+7 (925) 846-04-49',
			how_to_get: 'м. Перово (выход 3), 10 мин. пешком по 2 Владимирской улице / или автобусы 842, 620, 7 до остановки «2-ая Владимирская улица». Вход с торца дома (со стороны дома 56), вывеска на двери «Центр досуга и спорта Новогиреево»'
        },
		{
            day: 'понедельник',
            time: '19:00',
            name: 'Родник',
            metro: 'Новокосино',
            address: 'Суздальская улица, 8Бс2',
            contacts: '+7 (925) 846-04-49',
			how_to_get: 'Помещение воскресной школы на территории Церкви Всех Святых. Проезд: Последний вагон из центра. От м. Новокосино 20 минут пешком или автобусами 773, 1225А, 613, 885, маршрутка 1138 до остановки "Суздальская улица, 10", далее пешком 350м'
        },
		{
            day: 'вторник',
            time: '19:00',
            name: 'Сентябрь',
            metro: 'Перово, Новогиреево',
            address: 'Мартеновская ул. д.30',
            contacts: '+7 (985) 962-97-73',
			how_to_get: 'Центр досуга и спорта Новогиреево ( вход со двора). От ст. "Новогиреево" и "Перово" на автобусах 254,620,767,787,30 до остановки "Кинотеатр Берёзка" Трамвай любой до остановки "Новогиреевская ул д. 37"'
        },
		{
            day: 'среда',
            time: '19:00',
            name: 'Вешняки',
            metro: 'Новогиреево, Рязанский проспект, Выхино, платформа Вешняки',
            address: 'улица Юности, 17с3',
            contacts: '+7 (985) 962-97-73',
			how_to_get: 'Церковь Успения в Вешняках (воскресная школа)'
        },
		{
            day: 'четверг',
            time: '13:00',
            name: 'Под крылышком',
            metro: 'Семеновская, Электрозаводская',
            address: 'Измайловское шоссе, д.2',
            contacts: '+7 (993) 348-96-18 или +7 (965) 280-19-07',
			how_to_get: 'Храм Воскресения Христова на Семёновском кладбище'
        },
		{
            day: 'четверг',
            time: '18:30',
            name: 'Околица',
            metro: 'Первомайская',
            address: '16-я Парковая, д.13',
            contacts: 'aaokolica@mail.ru',
			how_to_get:'м. Первомайская, далее по Измайловскому бульвару до 16-й Парковой и направо. Второе здание с правой стороны (наркодиспансер)'
        },
		{
            day: 'четверг',
            time: '19:00',
            name: 'Время жить',
            metro: 'Перово',
            address: '2-ая Владимирская, д.58',
            contacts: '+7 (925) 846-04-49',
			how_to_get: 'м. Перово (выход 3), 10 мин. пешком по 2 Владимирской улице / или автобусы 842, 620, 7 до остановки «2-ая Владимирская улица». Вход с торца дома (со стороны дома 56), вывеска на двери «Центр досуга и спорта Новогиреево»'
        },
		{
            day: 'пятница',
            time: '19:00',
            name: 'Восточный экспресс',
            metro: 'Новогиреево',
            address: 'Свободный проспект, 4Ас8',
            contacts: '7 (901) 715-84-63 или +7 (968) 760-81-64',
			how_to_get: 'м. Новогиреево, последний вагон из центра, поднимаемся в Выход N 7, поворачиваем направо, идём все время прямо 500м. (проходим школу, пруд, перекрёсток, забор больницы). Поворачиваем налево у второго шлагбаума (вывеска: вход в Спасский Храм) и идём до входа на территорию Храма, заходим на территорию Храма, идём прямо к старому белому Храму, около церковной лавки здание с дверью'
        },
		{
            day: 'пятница',
            time: '19:00',
            name: 'Родник',
            metro: 'Новокосино',
            address: 'Суздальская улица, 8Бс2',
            contacts: '+7 (925) 846-04-49',
			how_to_get: 'Помещение воскресной школы на территории Церкви Всех Святых. Проезд: Последний вагон из центра. От м. Новокосино 20 минут пешком или автобусами 773, 1225А, 613, 885, маршрутка 1138 до остановки "Суздальская улица, 10", далее пешком 350м'
        },
		{
            day: 'суббота',
            time: '12:00',
            name: 'Под крылышком',
            metro: 'Семеновская, Электрозаводская',
            address: 'Измайловское шоссе, д.2',
            contacts: '+7 (993) 348-96-18 или +7 (965) 280-19-07',
			how_to_get: 'Храм Воскресения Христова на Семёновском кладбище'
        },
		{
            day: 'суббота',
            time: '14:00',
            name: 'Околица',
            metro: 'Первомайская',
            address: '16-я Парковая, д.13',
            contacts: 'aaokolica@mail.ru',
			how_to_get: 'м. Первомайская, далее по Измайловскому бульвару до 16-й Парковой и направо. Второе здание с правой стороны (наркодиспансер)'
        },
		{
            day: 'суббота',
            time: '18:00',
            name: 'Время жить',
            metro: 'Перово',
            address: '2-ая Владимирская, д.58',
            contacts: '+7 (925) 846-04-49',
			how_to_get: 'м. Перово (выход 3), 10 мин. пешком по 2 Владимирской улице / или автобусы 842, 620, 7 до остановки «2-ая Владимирская улица». Вход с торца дома (со стороны дома 56), вывеска на двери «Центр досуга и спорта Новогиреево»'
        },
		{
            day: 'воскресенье',
            time: '16:30',
            name: 'Вешняки',
            metro: 'Новогиреево, Рязанский проспект, Выхино, платформа Вешняки',
            address: 'улица Юности, 17с3',
            contacts: '+7 (985) 962-97-73',
			how_to_get: 'Церковь Успения в Вешняках (воскресная школа)'
        },
    ];

    const tabsContainer = document.getElementById('daysTabs');
    const contentContainer = document.getElementById('scheduleContent');

	function formatContacts(contactsStr) {
        const contacts = contactsStr.split(' или ');
        return contacts.map(contact => {
            contact = contact.trim();
            if (contact.includes('@')) {
                return `<a href="mailto:${contact}" class="contact-link">${contact}</a>`;
            } else {
                const phoneNumber = contact.replace(/[^\d+]/g, '');
                return `<a href="tel:${phoneNumber}" class="contact-link">${contact}</a>`;
            }
        }).join(' или ');
    }

    // Создаем табы
    days.forEach(day => {
        const button = document.createElement('button');
        button.className = 'schedule__tab__button';
        button.textContent = day;
        button.addEventListener('click', () => showSchedule(day));
        tabsContainer.appendChild(button);
    });

    // Функция отображения расписания
    function showSchedule(selectedDay) {
        // Убираем активный класс у всех кнопок
        document.querySelectorAll('.schedule__tab__button').forEach(btn => {
            btn.classList.remove('active');
        });

        // Помечаем активную кнопку
        event.target.classList.add('active');

        // Очищаем контент
        contentContainer.innerHTML = '';

        // Фильтруем группы по выбранному дню
        const filteredGroups = groups.filter(group => group.day === selectedDay);

        // Создаем карточки групп
        filteredGroups.forEach(group => {
            const card = document.createElement('div');
            card.className = 'group-card active';
            card.innerHTML = `
                <div class="group-info">
                    <p><span>Время:</span> ${group.time}</p>
                    <p><span>Группа:</span> ${group.name}</p>
                    <p><span>Метро:</span> ${group.metro}</p>
                    <p><span>Адрес:</span> ${group.address}</p>
                    <p><span>Контакты:</span> ${formatContacts(group.contacts)}</p>
                    <p><span>Как добраться:</span> ${group.how_to_get}</p>
                </div>
            `;
            contentContainer.appendChild(card);
        });
    }

	function activateCurrentDayTab() {
		const date = new Date();
		const currentDayIndex = date.getDay(); // 0-6 (воскресенье-суббота)
		const russianDays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
		const currentDayName = russianDays[currentDayIndex];

		// Находим кнопку с текущим днем и имитируем клик
		document.querySelectorAll('.schedule__tab__button').forEach(button => {
			if (button.textContent.toLowerCase() === currentDayName) {
				button.click();
			}
		});
	}

    // Активируем первый таб по умолчанию
    activateCurrentDayTab();
});
