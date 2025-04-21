document.addEventListener('DOMContentLoaded', function() {
    // Данные новостей
    const GroupNews = [
		{
			id: 55,
			title: 'Большое спикерское собрание',
			date: '12 апреля 2025',
			excerpt: '22.04.2025 состоится собрание на группе "Сентябрь"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Сентябрь"</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Кирилл Г. (расписной);</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 27 лет;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Чехов" (г.Чехов);</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Выздоровели или выздоравливаем?";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 22 апреля 2025 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. Мартеновская, д.30. В центре досуга и спорта Новогиреево (вход со двора).</li>
				  <li class="modal__text__list-item">До места проведения собрания можно доехать от ст. метро Перово и Новогиреево на автобусах: NN 254, 620, 767, 787, т30, остановка: «Кинотеатр Березка» и на любом трамвае до остановки «Новогиреевская ул.37»</li>
			  </ul>
			  <p>Приглашаем всех желающих получить неоценимый опыт!</p>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
        {
			id: 54,
			title: 'Большое спикерское собрание',
			date: '01 апреля 2025',
			excerpt: '10.04.2025 состоится собрание на группе "Время жить"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Время жить"</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Ольга;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 17 лет и 4 месяца;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Вешняки";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Отношения с близкими людьми";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 10 апреля 2025 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. 2-ая Владимирская, д.58. В центре досуга и спорта Новогиреево (вход с торца здания).</li>
			  </ul>
			  <p>Приглашаем всех желающих получить неоценимый опыт!</p>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 53,
			title: 'Большое спикерское собрание',
			date: '01 апреля 2025',
			excerpt: '02.04.2025 состоится собрание на группе "Вешняки"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Вешняки"</b> состоится большое спикерское собрание:</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Спикер:</b> Андрей (адвокат);</li>
					<li class="modal__text__list-item"><b>Срок трезвости:</b> 3 года;</li>
					<li class="modal__text__list-item"><b>Домашняя группа:</b> "Возрождение"(г.Пушкино);</li>
					<li class="modal__text__list-item"><b>Тема:</b> "Как ВС на душу положит...";</li>
					<li class="modal__text__list-item"><b>Дата и время:</b>  02 апреля 2025 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул.Юности, д.17 строение 2. Территория Храма Успения в Вешняках, здание воскресной школы, этаж 2.</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 52,
			title: 'Большое спикерское собрание',
			date: '19 марта 2025',
			excerpt: '25.03.2025 состоится собрание на группе "Сентябрь"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Сентябрь"</b> состоится большое спикерское собрание:</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Спикер:</b> Максим;</li>
					<li class="modal__text__list-item"><b>Срок трезвости:</b> 8 лет и 7 месяцев;</li>
					<li class="modal__text__list-item"><b>Домашняя группа:</b> "Благодать";</li>
					<li class="modal__text__list-item"><b>Тема:</b> "Для Вести АА нет решёток и преград - как донесение Вести в тюрьмах помогает выздоравливать";</li>
					<li class="modal__text__list-item"><b>Дата и время:</b> 25 марта 2025 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул. Мартеновская, д.30. В центре досуга и спорта Новогиреево (вход со двора);</li>
					<li class="modal__text__list-item"><b>Как добраться:</b> до места проведения собрания можно доехать от ст. метро Перово и Новогиреево на автобусах: NN 254, 620, 767, 787, т30, остановка: «Кинотеатр Березка» и на любом трамвае до остановки «Новогиреевская ул.37».</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 51,
			title: 'Большое спикерское собрание',
			date: '10 марта 2025',
			excerpt: '13.03.2025 состоится собрание на группе "Время жить"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Время жить""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Ольга;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 10 лет и 4 месяца;</li>
				  <li class="modal__text__list-item"><b>Спикер:</b> Дмитрий;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 16 лет и 3 месяца;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Чудо Балашихи";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Семья в сообществе АА";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 13 марта 2025 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. 2-ая Владимирская, д.58. В центре досуга и спорта Новогиреево (вход с торца здания).</li>
			  </ul>
			  <p>Приглашаем всех желающих получить неоценимый опыт!</p>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 50,
			title: 'Большое спикерское собрание',
			date: '27 февраля 2025',
			excerpt: '28.02.2025 состоится собрание на группе "Родник"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Родник""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Дмитрий;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 9 лет;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Ковчег" (г.Мытищи);</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Работа структуры обслуживания = мой опыт";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 28 февраля 2025 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. Суздальская, 8Б. Воскресная школа за храмом Всех Святых.</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 49,
			title: 'Большое спикерское собрание',
			date: '25 февраля 2025',
			excerpt: '25.02.2025 состоится собрание на группе "Сентябрь"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Сентябрь"</b> состоится большое спикерское собрание:</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Спикер:</b> Василий Т.;</li>
					<li class="modal__text__list-item"><b>Срок трезвости:</b> 8 лет и 4 месяца;</li>
					<li class="modal__text__list-item"><b>Домашняя группа:</b> "В начале дня";</li>
					<li class="modal__text__list-item"><b>Тема:</b> "Замковый камень или жизненно важный духовный опыт. Путь третьего шага";</li>
					<li class="modal__text__list-item"><b>Дата и время:</b> 25 февраля 2025 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул. Мартеновская, д.30. В центре досуга и спорта Новогиреево (вход со двора);</li>
					<li class="modal__text__list-item"><b>Как добраться:</b> до места проведения собрания можно доехать от ст. метро Перово и Новогиреево на автобусах: NN 254, 620, 767, 787, т30, остановка: «Кинотеатр Березка» и на любом трамвае до остановки «Новогиреевская ул.37».</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 48,
			title: 'Временный переезд группы АА',
			date: '16 февраля 2025',
			excerpt: 'Информируем о временном переезде группы АА "Вешняки"',
			image: '/img/news/attention.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>Группа АА "Вешняки" с 19 февраля временно переезжает по адресу: ул.Молдагуловой д.12 к3 (Выставочный зал "Лотос")</p>
			  <p>Собрания по средам <b>19.02 и 26.02</b> пройдут по указанному адресу выше в 19:30</p>
			  <p><b>23.02</b> собрания не будет</p>
			  <p><b>02.03 (воскресенье)</b> собрание состоится в 19:30</p>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 47,
			title: 'Большое спикерское собрание',
			date: '11 февраля 2025',
			excerpt: '13.02.2025 состоится собрание на группе "Время жить"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Время жить""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Олег;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 9 лет и 9 месяцев;</li>
				  <li class="modal__text__list-item"><b>Тема:</b> по выбору спикера;</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 13 февраля 2025 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. 2-ая Владимирская, д.58. В центре досуга и спорта Новогиреево (вход с торца здания).</li>
			  </ul>
			  <p>Приглашаем всех желающих получить неоценимый опыт!</p>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 46,
			title: 'Юбилей группы АА',
			date: '03 февраля 2025',
			excerpt: 'Приглашение 07.02.2025 на 10-летний юбилей группы "Новый день"',
			image: '/img/news/jubilee.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>Группе АА <b>"Новый день"</b> исполняется 10 лет!</p>
			  <p>Приглашаем всех 07.02.2025 посетить праздничное собрание группы.</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Дата и время:</b> пятница 07 февраля 2025 года в 19:30;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. Молдагуловой, д.12к3. Выставочный центр "Лотос".</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 45,
			title: 'Большое спикерское собрание',
			date: '27 января 2025',
			excerpt: '31.01.2025 состоится собрание на группе "Родник"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Родник""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Татьяна;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 12 лет и 11 месяцев;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Островок" (г.Долгопрудный);</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Мой опыт применения в жизни 6 и 7 шага";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 31 января 2025 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. Суздальская, 8Б. Воскресная школа за храмом Всех Святых.</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 44,
			title: 'Большое спикерское собрание',
			date: '18 января 2025',
			excerpt: '28.01.2025 состоится собрание на группе "Сентябрь"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Сентябрь"</b> состоится большое спикерское собрание:</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Спикер:</b> Илюха;</li>
					<li class="modal__text__list-item"><b>Срок трезвости:</b> 23 года;</li>
					<li class="modal__text__list-item"><b>Домашняя группа:</b> "Свет";</li>
					<li class="modal__text__list-item"><b>Тема:</b> "Творчество выздоровления";</li>
					<li class="modal__text__list-item"><b>Дата и время:</b> 28 января 2025 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул. Мартеновская, д.30. В центре досуга и спорта Новогиреево (вход со двора);</li>
					<li class="modal__text__list-item"><b>Как добраться:</b> до места проведения собрания можно доехать от ст. метро Перово и Новогиреево на автобусах: NN 254, 620, 767, 787, т30, остановка: «Кинотеатр Березка» и на любом трамвае до остановки «Новогиреевская ул.37».</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 43,
			title: 'Большое спикерское собрание',
			date: '16 января 2025',
			excerpt: '17.01.2025 состоится собрание на группе "Новый день"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Новый день"</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Алексей;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Родник";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Построить отношения в трезвости";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 17 января 2025 года в 19:30;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. Молдагуловой, д.12к3. Выставочный центр "Лотос".</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 42,
			title: 'Большое спикерское собрание',
			date: '05 января 2025',
			excerpt: '09.01.2025 состоится собрание на группе "Время жить"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Время жить""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Катя;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 3 года;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Околица";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> по выбору спикера;</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 09 января 2025 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. 2-ая Владимирская, д.58. В центре досуга и спорта Новогиреево (вход с торца здания).</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 41,
			title: 'Работа групп АА в праздничные дни',
			date: '31 декабря 2024',
			excerpt: 'Расписание работы групп АА',
			image: '/img/news/attention.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item">Сообщаем вам, что группа "Сентябрь" <b>31 декабря 2024 года</b> собрание не проводит! <b>07 января 2025 года</b> собрание состоится в 19:00</li>
					<li class="modal__text__list-item">Группы "Новый день", "Время жить", а также все группы при храмах работают по расписанию.</li>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 40,
			title: 'Большое спикерское собрание',
			date: '21 декабря 2024',
			excerpt: '24.12.2024 состоится собрание на группе "Сентябрь"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Сентябрь"</b> состоится большое спикерское собрание:</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Спикер:</b> Савелий;</li>
					<li class="modal__text__list-item"><b>Срок трезвости:</b> 25 лет;</li>
					<li class="modal__text__list-item"><b>Домашняя группа:</b> "Мужская группа";</li>
					<li class="modal__text__list-item"><b>Тема:</b> "И применяли шаги во всех своих делах - ежедневно";</li>
					<li class="modal__text__list-item"><b>Дата и время:</b> 24 декабря 2024 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул. Мартеновская, д.30. В центре досуга и спорта Новогиреево (вход со двора);</li>
					<li class="modal__text__list-item"><b>Как добраться:</b> до места проведения собрания можно доехать от ст. метро Перово и Новогиреево на автобусах: NN 254, 620, 767, 787, т30, остановка: «Кинотеатр Березка» и на любом трамвае до остановки «Новогиреевская ул.37».</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 39,
			title: 'День рождения группы "Родник"',
			date: '07 декабря 2024',
			excerpt: 'Приглашение 20.12.2024 на День рождения',
			image: '/img/news/HB.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>Группе АА <b>"Родник"</b> исполняется 11 лет!</p>
			  <p>Приглашаем всех 20.12.2024 посетить праздничное собрание группы.</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Дата и время:</b> пятница 20 декабря 2024 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> м.Новокосино, ул. Суздальская, 8Б. Воскресная школа за храмом Всех Святых.</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 38,
			title: 'Большое спикерское собрание',
			date: '07 декабря 2024',
			excerpt: '12.12.2024 состоится собрание на группе "Время жить"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Время жить""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Александр (координатор служения по 12 шагу в 17 наркологической больнице);</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 17 лет;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Центр" и "Радуга";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Выздоровление в АА";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 12 декабря 2024 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. 2-ая Владимирская, д.58. В центре досуга и спорта Новогиреево (вход с торца здания).</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 37,
			title: 'Большое спикерское собрание',
			date: '04 декабря 2024',
			excerpt: '04.12.2024 состоится собрание на группе "Вешняки"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Вешняки"</b> состоится большое спикерское собрание:</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Спикер:</b> Андрей П. (организатор творческой части на АВ);</li>
					<li class="modal__text__list-item"><b>Срок трезвости:</b> 5,8 лет;</li>
					<li class="modal__text__list-item"><b>Домашняя группа:</b> "Центр";</li>
					<li class="modal__text__list-item"><b>Тема:</b> "Жить одним днём";</li>
					<li class="modal__text__list-item"><b>Дата и время:</b> 04 декабря 2024 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул.Юности, д.17 строение 2. Территория Храма Успения в Вешняках, здание воскресной школы, этаж 2.</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 36,
			title: 'Большое спикерское собрание',
			date: '25 ноября 2024',
			excerpt: '29.11.2024 состоится собрание на группе "Родник"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Родник""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Наталья Д. (г.Сочи);</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 13 лет;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Орион";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Какие шаги программы я применяю на каждой дневной основе";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 29 ноября 2024 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. Суздальская, 8Б. Воскресная школа за храмом Всех Святых.</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 35,
			title: 'Большое спикерское собрание',
			date: '13 ноября 2024',
			excerpt: '26.11.2024 состоится собрание на группе "Сентябрь"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Сентябрь"</b> состоится большое спикерское собрание:</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Спикер:</b> Дмитрий (Водолаз);</li>
					<li class="modal__text__list-item"><b>Срок трезвости:</b> 16 лет;</li>
					<li class="modal__text__list-item"><b>Домашняя группа:</b> "Сентябрь";</li>
					<li class="modal__text__list-item"><b>Тема:</b> "Выздоровление - осознанность";</li>
					<li class="modal__text__list-item"><b>Дата и время:</b> 26 ноября 2024 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул. Мартеновская, д.30. В центре досуга и спорта Новогиреево (вход со двора);</li>
					<li class="modal__text__list-item"><b>Как добраться:</b> до места проведения собрания можно доехать от ст. метро Перово и Новогиреево на автобусах: NN 254, 620, 767, 787, т30, остановка: «Кинотеатр Березка» и на любом трамвае до остановки «Новогиреевская ул.37».</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 34,
			title: 'Большое спикерское собрание',
			date: '06 ноября 2024',
			excerpt: '14.11.2024 состоится собрание на группе "Время жить"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Время жить""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Марина;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 16 лет;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Свет";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "11 шаг, источники силы";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 14 ноября 2024 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. 2-ая Владимирская, д.58. В центре досуга и спорта Новогиреево (вход с торца здания).</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 33,
			title: 'Большое спикерское собрание',
			date: '05 ноября 2024',
			excerpt: '06.11.2024 состоится собрание на группе "Вешняки"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Вешняки"</b> состоится большое спикерское собрание:</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Спикер:</b> Наталья;</li>
					<li class="modal__text__list-item"><b>Срок трезвости:</b> 13,6 лет;</li>
					<li class="modal__text__list-item"><b>Тема:</b> "Духовный рост на четырнадцатом году жизни новой реальности";</li>
					<li class="modal__text__list-item"><b>Дата и время:</b> 06 ноября 2024 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул.Юности, д.17 строение 2. Территория Храма Успения в Вешняках, здание воскресной школы, этаж 2.</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 32,
			title: 'График собраний группы АА в праздники',
			date: '02 ноября 2024',
			excerpt: 'Информируем о расписаниии группы АА "Время жить" в праздничные дни',
			image: '/img/news/attention.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>Группа АА <b>"Время жить"</b> в ближайшие дни проводит собрания по расписанию:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item">Суббота (02.11.2024) в 18:00;</li>
				  <li class="modal__text__list-item">Понедельник (04.11.2024) в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. 2-ая Владимирская, д.58. В центре досуга и спорта Новогиреево (вход с торца здания).</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 31,
			title: 'Переезд группы АА',
			date: '24 октября 2024',
			excerpt: 'Переезд группы АА "Восточный экспресс" в новое здание',
			image: '/img/news/attention.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>Сообщаем Вам, что группа Восточный Экспресс перенеслась в другое здание на территории Спасского Храма (комната побольше)</b></p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Дата и время:</b> каждая пятница в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> Свободный проспект, 4Ас2, при храме Спаса Нерукотворного Образа.</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 30,
			title: 'Большое спикерское собрание',
			date: '08 октября 2024',
			excerpt: '10.10.2024 состоится собрание на группе "Время жить"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Время жить""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Дмитрий Х.;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 32 года;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Центр" (председатель группы);</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "12 шагов - универсальный инструмент в жизни";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 10 октября 2024 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. 2-ая Владимирская, д.58. В центре досуга и спорта Новогиреево (вход с торца здания).</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 29,
			title: 'Большое спикерское собрание',
			date: '03 октября 2024',
			excerpt: '22.10.2024 состоится собрание на группе "Сентябрь"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Сентябрь"</b> состоится большое спикерское собрание:</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Спикер:</b> Вадим;</li>
					<li class="modal__text__list-item"><b>Срок трезвости:</b> 27 лет и 9 месяцев;</li>
					<li class="modal__text__list-item"><b>Домашняя группа:</b> "Причал" (г.Аланья, Турция);</li>
					<li class="modal__text__list-item"><b>Тема:</b> "Каким я был,что со мной произошло и каким я стал";</li>
					<li class="modal__text__list-item"><b>Дата и время:</b> 22 октября 2024 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул. Мартеновская, д.30. В центре досуга и спорта Новогиреево (вход со двора);</li>
					<li class="modal__text__list-item"><b>Как добраться:</b> до места проведения собрания можно доехать от ст. метро Перово и Новогиреево на автобусах: NN 254, 620, 767, 787, т30, остановка: «Кинотеатр Березка» и на любом трамвае до остановки «Новогиреевская ул.37».</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 28,
			title: 'Большое спикерское собрание',
			date: '02 октября 2024',
			excerpt: '02.10.2024 состоится собрание на группе "Вешняки"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Вешняки"</b> состоится большое спикерское собрание:</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Спикер:</b> Леонид;</li>
					<li class="modal__text__list-item"><b>Срок трезвости:</b> 2 года;</li>
					<li class="modal__text__list-item"><b>Домашняя группа:</b> "Вертикаль" (г.Подольск);</li>
					<li class="modal__text__list-item"><b>Тема:</b> "Моё понимание программы";</li>
					<li class="modal__text__list-item"><b>Дата и время:</b> 02 октября 2024 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул.Юности, д.17 строение 2. Территория Храма Успения в Вешняках, здание воскресной школы, этаж 2.</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 27,
			title: 'Открытие новой группы АА',
			date: '02 октября 2024',
			excerpt: '"Восточный экспресс"',
			image: '/img/news/attention.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>Рады Вам сообщить, что в районе Новогиреево открылась ещё одна группа АА - <b>"Восточный экспресс"</b></p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Дата и время:</b> каждая пятница в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> Свободный проспект, 4Ас2, Дом притч при храме Спаса Нерукотворного Образа (на территории 70 ГКБ).</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 26,
			title: 'Юбилей группы АА',
			date: '19 сентября 2024',
			excerpt: 'Приглашение 24.09.2024 на 30-летний юбилей группы "Сентябрь"',
			image: '/img/news/jubilee.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>Группе АА <b>"Сентябрь"</b> исполняется 30 лет!</p>
			  <p>Приглашаем всех 24.09.2024 посетить праздничное собрание группы.</p>
			  <p>У нас будут вкусные пироги с разной начинкой, чай разных сортов и разная вкусняшка к чаю.</p>
			  <p>Будет атмосферная, красивая и счастливая обстановка!</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Дата и время:</b> 24 сентября 2024 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. Мартеновская, д.30. В центре досуга и спорта Новогиреево (вход со двора).</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 25,
			title: 'Большое спикерское собрание',
			date: '16 августа 2024',
			excerpt: '27.08.2024 состоится собрание на группе "Сентябрь"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Сентябрь"</b> состоится большое спикерское собрание:</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Спикер:</b> Олег;</li>
					<li class="modal__text__list-item"><b>Срок трезвости:</b> 8 лет и 2 месяца;</li>
					<li class="modal__text__list-item"><b>Домашняя группа:</b> "Посошок";</li>
					<li class="modal__text__list-item"><b>Тема:</b> "Мой личный опыт в программе 12 шагов";</li>
					<li class="modal__text__list-item"><b>Дата и время:</b> 27 августа 2024 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул. Мартеновская, д.30. В центре досуга и спорта Новогиреево (вход со двора);</li>
					<li class="modal__text__list-item"><b>Как добраться:</b> до места проведения собрания можно доехать от ст. метро Перово и Новогиреево на автобусах: NN 254, 620, 767, 787, т30, остановка: «Кинотеатр Березка» и на любом трамвае до остановки «Новогиреевская ул.37».</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 24,
			title: 'Большое спикерское собрание',
			date: '05 августа 2024',
			excerpt: '08.08.2024 состоится собрание на группе "Время жить"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Время жить""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Леша Гудвинд;</li>
				  <li class="modal__text__list-item">Опыт делегата на заседание Конфереции АА России от Московского Делегатского округа (МДА) и председателя Делегатского Комитете МДО, члена Уставного Комитета;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 10 лет;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Лампа";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Мой опыт служения в Конфереции АА";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 08 августа 2024 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. 2-ая Владимирская, д.58. В центре досуга и спорта Новогиреево (вход с торца здания).</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 23,
			title: 'Большое спикерское собрание',
			date: '16 июля 2024',
			excerpt: '23.07.2024 состоится собрание на группе "Сентябрь"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Сентябрь"</b> состоится большое спикерское собрание:</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Спикер:</b> Доримедонт;</li>
					<li class="modal__text__list-item"><b>Срок трезвости:</b> 23 года и 10 мес;</li>
					<li class="modal__text__list-item"><b>Домашняя группа:</b> "Околица";</li>
					<li class="modal__text__list-item"><b>Тема:</b> "Интуиция - рабочая часть ума";</li>
					<li class="modal__text__list-item"><b>Дата и время:</b> 23 июля 2024 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул. Мартеновская, д.30. В центре досуга и спорта Новогиреево (вход со двора);</li>
					<li class="modal__text__list-item"><b>Как добраться:</b> до места проведения собрания можно доехать от ст. метро Перово и Новогиреево на автобусах: NN 254, 620, 767, 787, т30, остановка: «Кинотеатр Березка» и на любом трамвае до остановки «Новогиреевская ул.37».</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 22,
			title: 'Большое спикерское собрание',
			date: '16 июля 2024',
			excerpt: '19.07.2024 состоится собрание на группе "Новый день"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Новый день"</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Павел;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 3 года;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Трезвость";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Программа конкретных действий";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 19 июля 2024 года в 19:30;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. Молдагуловой, д.12к3. Выставочный центр "Лотос".</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 21,
			title: 'Большое спикерское собрание',
			date: '16 июля 2024',
			excerpt: '26.07.2024 состоится собрание на группе "Родник"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Родник""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Сергей М.;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> более 7 лет;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Трезвость";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 26 июля 2024 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. Суздальская, 8Б. Воскресная школа за храмом Всех Святых.</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 20,
			title: 'Большое спикерское собрание',
			date: '09 июля 2024',
			excerpt: '11.07.2024 состоится собрание на группе "Время жить"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Время жить""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Наталья;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> с 22 июля 2023 года;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Сентябрь";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Мой поиск ВС";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 11 июля 2024 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. 2-ая Владимирская, д.58. В центре досуга и спорта Новогиреево (вход с торца здания).</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 19,
			title: 'День рождения группы "Время жить"',
			date: '01 июля 2024',
			excerpt: 'Приглашение 13.07.2024 на День рождения',
			image: '/img/news/HB.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>Группа АА "Время жить" приглашает всех на свой первый юбилей разделить с нами праздничное настроение!</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Дата и время:</b> 13 июля 2024 года в 18:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. 2-ая Владимирская, д.58. В центре досуга и спорта Новогиреево (вход с торца здания).</li>
			  </ul>
			  <p>Телефон для связи <a href="tel:89258460449" class="modal__text__list-phone">+7(925)846-04-49</a></p>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 18,
			title: 'Большое спикерское собрание',
			date: '27 июня 2024',
			excerpt: '28.06.2024 состоится собрание на группе "Родник"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Родник""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Андрей;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 3 года и 5 месяцев;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Чудо Балашихи";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Инвентаризация за 3 года";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 28 июня 2024 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. Суздальская, 8Б. На территории Храма.</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 17,
			title: 'Большое спикерское собрание',
			date: '17 июня 2024',
			excerpt: '25.06.2024 состоится собрание на группе "Сентябрь"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Сентябрь"</b> состоится большое спикерское собрание:</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Спикер:</b> Валентина;</li>
					<li class="modal__text__list-item"><b>Срок трезвости:</b> 14 лет;</li>
					<li class="modal__text__list-item"><b>Домашняя группа:</b> "Встреча";</li>
					<li class="modal__text__list-item"><b>Тема:</b> "6 и 7 шаги";</li>
					<li class="modal__text__list-item"><b>Дата и время:</b> 25 июня 2024 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул. Мартеновская, д.30. В центре досуга и спорта Новогиреево (вход со двора);</li>
					<li class="modal__text__list-item"><b>Как добраться:</b> до места проведения собрания можно доехать от ст. метро Перово и Новогиреево на автобусах: NN 254, 620, 767, 787, т30, остановка: «Кинотеатр Березка» и на любом трамвае до остановки «Новогиреевская ул.37».</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 16,
			title: 'Большое спикерское собрание',
			date: '13 июня 2024',
			excerpt: '21.06.2024 состоится собрание на группе "Новый день"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Новый день"</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Антонио;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 3 года и 8 месяцев;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Трезвость";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Наполненность жизни";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 21 июня 2024 года в 19:30;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. Молдагуловой, д.12к3. Выставочный центр "Лотос".</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 15,
			title: 'Большое спикерское собрание',
			date: '11 июня 2024',
			excerpt: '13.06.2024 состоится собрание на группе "Время жить"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Время жить""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Денис;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 7 лет и 6 месяцев;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Рубикон";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Мой путь и применение шагов в жизни";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 13 июня 2024 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. 2-ая Владимирская, д.58. В центре досуга и спорта Новогиреево (вход с торца здания).</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 14,
			title: 'Большое спикерское собрание',
			date: '30 мая 2024',
			excerpt: '31.05.2024 состоится собрание на группе "Родник"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Родник""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Игорь А.;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 8 лет и 5 месяцев;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Успокойся";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Здесь и сейчас";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 31 мая 2024 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. Суздальская, 8Б, воскресная школа за храмом Всех Святых.</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 13,
			title: 'Выходные анонимных алкоголиков в ВАО',
			date: '27 мая 2024',
			excerpt: 'Отчет о прошедших выходных с АА',
			image: '/img/news/weekends.webp',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>Эти выходные были богаты на отдых и развлечения.</p>
			  <p>В субботу группа <b>"Родник"</b> организовали отличную шашлычную встречу в Салтыковском лесопарке, а в воскресенье группа <b>"Вешняки"</b> отпраздновали свой 17-летний день рождения!</p>
			  <p>Мы ещё раз доказали, что трезвым можно отдыхать где угодно - жарить мясо на природе, есть пиццу в храме, снимать целые санатории с организацией мероприятий на несколько дней.</p>
			  <p>Мы ждём новичков, чтоб рассказать и им, что есть совсем другая трезвость, им ещё не известная.</p>
			  <p>Приходите, группы в Новогиреево, Перово, Вешняках и Новокосино можно найти в расписании групп!</p>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 12,
			title: 'День рождения группы "Вешняки"',
			date: '21 мая 2024',
			excerpt: 'Приглашение 26.05.2024 на День рождения',
			image: '/img/news/HB.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>Группе АА "Вешняки" исполняется 17 лет!</p>
			  <p>Приглашаем всех 26.05.2024 посетить праздничное собрание группы.</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Дата и время:</b> 26 мая 2024 года в 16:30;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул.Юности, д.17 строение 2. Территория Храма Успения в Вешняках, здание воскресной школы, этаж 2.</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 11,
			title: 'Шашлыки',
			date: '21 мая 2024',
			excerpt: 'Приглашаем вас на шашлыки с группой "Родник"',
			image: '/img/news/kebabs.jpg',
			content: `
			<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>Группа АА <b>"Родник"</b> устраивает дружескую встречу на природе с шашлыками в Салтыковском лесопарке.</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Дата и время:</b> 25 мая 2024 года в субботу в 14:00.</li>
				</ul>
				<p>Очень важно перечислить взнос на закупку продуктов до четверга, чтоб организаторы понимали кол-во участников и объемы продуктов.</p>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 10,
			title: 'Большое спикерское собрание',
			date: '20 мая 2024',
			excerpt: '28.05.2024 состоится собрание на группе "Сентябрь"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Сентябрь"</b> состоится большое спикерское собрание:</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Спикер:</b> Валера;</li>
					<li class="modal__text__list-item"><b>Срок трезвости:</b> 21,5 лет;</li>
					<li class="modal__text__list-item"><b>Домашняя группа:</b> "Дорога жизни";</li>
					<li class="modal__text__list-item"><b>Тема:</b> "Как сказка стала былью";</li>
					<li class="modal__text__list-item"><b>Дата и время:</b> 28 мая 2024 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул. Мартеновская, д.30. В центре досуга и спорта Новогиреево (вход со двора);</li>
					<li class="modal__text__list-item"><b>Как добраться:</b> до места проведения собрания можно доехать от ст. метро Перово и Новогиреево на автобусах: NN 254, 620, 767, 787, т30, остановка: «Кинотеатр Березка» и на любом трамвае до остановки «Новогиреевская ул.37».</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 9,
			title: 'Большое спикерское собрание',
			date: '13 мая 2024',
			excerpt: '16.05.2024 состоится собрание на группе "Время жить"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Время жить""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Натали;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 3 месяца;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Новый день";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Как работа по программе спасла меня от возвращения к старой жизни";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 16 мая 2024 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. 2-ая Владимирская, д.58. В центре досуга и спорта Новогиреево (вход с торца здания).</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 8,
			title: 'Изменения в работе групп',
			date: '28 апреля 2024',
			excerpt: 'Информируем об изменениях в работе групп АА в праздничные дни',
			image: '/img/news/attention.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p><b>Отмена собраний в праздничные дни:</b></p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item">Группа <b>"Время жить"</b> не работает в понедельник 29.04, в четверг 09.05</li>
				  <li class="modal__text__list-item">Группа <b>"Сентябрь"</b> не работает во вторник 30.04</li>
				  <li class="modal__text__list-item">Группа <b>"Новый день"</b> не работает в пятницу 10.05</li>
				  <li class="modal__text__list-item">Собрания групп <b>"Вешняки"</b> и <b>"Родник"</b> будут проходить согласно расписанию</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 7,
			title: 'Большое спикерское собрание',
			date: '08 апреля 2024',
			excerpt: '11.04.2024 состоится собрание на группе "Время жить"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Время жить""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Андрей ЧБ;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 3 года и 2 месяца;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Чудо Балашихи";</li>
				  <li class="modal__text__list-item"><b>Тема:</b> "Я результат своих ошибок";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 11 апреля 2024 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. 2-ая Владимирская, д.58. В центре досуга и спорта Новогиреево (вход с торца здания).</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 6,
			title: 'Большое спикерское собрание',
			date: '25 марта 2024',
			excerpt: '29.03.2024 состоится собрание на группе "Родник"',
			image: '/img/news/meeting.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>На группе АА <b>"Родник""</b> состоится большое спикерское собрание:</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Спикер:</b> Валера;</li>
				  <li class="modal__text__list-item"><b>Срок трезвости:</b> 15 лет;</li>
				  <li class="modal__text__list-item"><b>Домашняя группа:</b> "Выбор";</li>
				  <li class="modal__text__list-item"><b>Дата и время:</b> 29 марта 2024 года в 19:00;</li>
				  <li class="modal__text__list-item"><b>Адрес:</b> ул. Суздальская, 8Б, воскресная школа за храмом Всех Святых.</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 5,
			title: 'Возобновление собраний группы АА',
			date: '22 марта 2024',
			excerpt: 'Информируем о возобновлении собраний группы АА "Новый день"',
			image: '/img/news/attention.jpg',
			content: `
			  <p class="modal__text__greeting" >Дорогие друзья!</p>
			  <p>Собрания группы <b>"Новый День"</b> возобновляются с <b>29 марта 2024</b> и будут проходить по <b>пятницам в 19:30<b>.</p>
			  <ul class="modal__text__list">
				  <li class="modal__text__list-item"><b>Адрес:</b> ул.Молдагуловой д.12к3. Выставочный центр "Лотос".</li>
			  </ul>
			  <p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 4,
			title: 'Большое спикерское собрание',
			date: '01 марта 2024',
			excerpt: '26.03.2024 состоится собрание на группе "Сентябрь"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Сентябрь"</b> состоится большое спикерское собрание:</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Спикер:</b> Борислав;</li>
					<li class="modal__text__list-item"><b>Домашняя группа:</b> "Посошок";</li>
					<li class="modal__text__list-item"><b>Тема:</b> "Взгляд врача-нарколога-алкоголика на болезнь и выздоровление";</li>
					<li class="modal__text__list-item"><b>Дата и время:</b> 26 марта 2024 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул. Мартеновская, д.30. В центре досуга и спорта Новогиреево (вход со двора);</li>
					<li class="modal__text__list-item"><b>Как добраться:</b> до места проведения собрания можно доехать от ст. метро Перово и Новогиреево на автобусах: NN 254, 620, 767, 787, т30, остановка: «Кинотеатр Березка» и на любом трамвае до остановки «Новогиреевская ул.37».</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
			id: 3,
			title: 'Рабочее собрание',
			date: '01 марта 2024',
			excerpt: 'Приглашение 01.03.2024 на рабочее собрание на группе "Родник"',
			image: '/img/news/meeting.jpg',
			content: `
				<p class="modal__text__greeting" >Дорогие друзья!</p>
				<p>На группе АА <b>"Родник"</b> после основного собрания состоится рабочее собрание.</p>
				<p>Необходимо выбрать нового председателя группы, поэтому группа просит участия всех неравнодушных участников собраний.</p>
				<ul class="modal__text__list">
					<li class="modal__text__list-item"><b>Дата и время:</b> 01 марта 2024 года в 19:00;</li>
					<li class="modal__text__list-item"><b>Адрес:</b> ул. Суздальская, 8Б, воскресная школа за храмом Всех Святых.</li>
				</ul>
				<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
		id: 2,
		title: 'Большое спикерское собрание',
		date: '27 февраля 2024',
		excerpt: '27.02.2024 состоится собрание на группе "Сентябрь"',
		image: '/img/news/meeting.jpg',
		content: `
			<p class="modal__text__greeting" >Дорогие друзья!</p>
			<p>На группе АА <b>"Сентябрь"</b> состоится большое спикерское собрание:</p>
			<ul class="modal__text__list">
				<li class="modal__text__list-item"><b>Спикер:</b> Екатерина С.;</li>
				<li class="modal__text__list-item"><b>Срок трезвости:</b> 32 года;</li>
				<li class="modal__text__list-item"><b>Домашняя группа:</b> "Крылья";</li>
				<li class="modal__text__list-item"><b>Тема:</b> "Ответы на вопросы";</li>
				<li class="modal__text__list-item"><b>Дата и время:</b> 27 февраля 2024 года в 19:00;</li>
				<li class="modal__text__list-item"><b>Адрес:</b> ул. Мартеновская, д.30. В центре досуга и спорта Новогиреево (вход со двора);</li>
				<li class="modal__text__list-item"><b>Как добраться:</b> до места проведения собрания можно доехать от ст. метро Перово и Новогиреево на автобусах: NN 254, 620, 767, 787, т30, остановка: «Кинотеатр Березка» и на любом трамвае до остановки «Новогиреевская ул.37».</li>
			</ul>
			<p class="modal__text__invitation">Добро пожаловать!</p>`
		},
		{
		  id: 1,
		  title: 'День рождения группы "Новый день"',
		  date: '11 февраля 2024',
		  excerpt: 'Приглашение 11.02.2024 на День рождения',
		  image: '/img/news/HB.jpg',
		  content: `
			<p class="modal__text__greeting" >Дорогие друзья!</p>
			<p>Группе АА "Новый день" исполняется 9 лет!</p>
			<p>Приглашаем всех 11.02.2024 посетить праздничное собрание группы.</p>
			<p>В <b>18:00</b> состоится большое спикерское собрание:</p>
			<ul class="modal__text__list">
				<li class="modal__text__list-item"><b>Спикер:</b> Вадим;</li>
				<li class="modal__text__list-item"><b>Срок трезвости:</b> 27 лет и 2 месяца;</li>
				<li class="modal__text__list-item"><b>Домашняя группа:</b> "Причал";</li>
				<li class="modal__text__list-item"><b>Тема:</b> "Каким я был, что со мной произошло и каким я стал";</li>
				<li class="modal__text__list-item"><b>Дата и время:</b> 11 февраля 2024 года в 18:00;</li>
				<li class="modal__text__list-item"><b>Адрес:</b> ул.Реутовская 6а. ТЦСО Вешняки.</li>
			</ul>
			<p class="modal__text__invitation">Добро пожаловать!</p>`
		}
	];


    // Элементы DOM
    const GroupSlider = document.getElementById('GroupSlider');
    const GroupPrevBtn = document.getElementById('GroupPrevSlide');
    const GroupNextBtn = document.getElementById('GroupNextSlide');
    const GroupNewsModal = document.getElementById('GroupNewsModal');
    const GroupCloseModal = document.getElementById('GroupCloseModal');

    // Переменные слайдера
    let currentSlideGroup = 0;
    let slideGroups = [];
    let isMobile = window.innerWidth <= 768;

    // Создаем группы слайдов
    function createSlideGroups() {
        GroupSlider.innerHTML = '';
        slideGroups = [];

        if (isMobile) {
            // Для мобильных - 1 новость в группе
            GroupNews.forEach(news => {
                if (!news.excerpt) {
                    // Создаём краткое описание из контента
                    news.excerpt = news.content.replace(/<[^>]*>/g, '').substring(0, 100) + '...';
                }
                // Заменяем пустые пути к изображениям на заглушку
                if (news.image === '/') {
                    news.image = './img/news/placeholder-news.webp';
                }

                const group = document.createElement('div');
                group.className = 'news__slide__group';
                group.innerHTML = createNewsCard(news);
                GroupSlider.appendChild(group);
                slideGroups.push(group);
            });
        } else {
            // Для десктопа - 2 новости в группе
            for (let i = 0; i < GroupNews.length; i += 2) {
                const group = document.createElement('div');
                group.className = 'news__slide__group';

                // Добавляем первую новость в группу
                group.innerHTML = createNewsCard(GroupNews[i]);

                // Добавляем вторую новость, если она существует
                if (i + 1 < GroupNews.length) {
                    group.innerHTML += createNewsCard(GroupNews[i + 1]);
                }

                GroupSlider.appendChild(group);
                slideGroups.push(group);
            }
        }

        updateSlider();
    }

    // Создаем HTML для карточки новости
    function createNewsCard(news) {
        return `
            <div class="news__slide__card">
                <img class="news__image" src="${news.image}" alt="${news.title}">
                <div class="news__date">${news.date}</div>
                <h3 class="news__title">${news.title}</h3>
                <p class="news__xcerpt">${news.excerpt}</p>
                <button class="news__btn btn" data-id="${news.id}">Читать далее</button>
            </div>
        `;
    }

    // Обновляем позицию слайдера
    function updateSlider() {
        GroupSlider.style.transform = `translateX(-${currentSlideGroup * 100}%)`;

        // Показываем/скрываем кнопки в зависимости от позиции
        GroupPrevBtn.style.display = currentSlideGroup === 0 ? 'none' : 'flex';
        GroupNextBtn.style.display = currentSlideGroup === slideGroups.length - 1 ? 'none' : 'flex';
    }

    // Переход к конкретной группе слайдов
    function goToSlideGroup(index) {
        if (index < 0) index = slideGroups.length - 1;
        if (index >= slideGroups.length) index = 0;

        currentSlideGroup = index;
        updateSlider();
    }

    // Инициализация модального окна
    function initModal() {
        document.querySelectorAll('.news__btn').forEach(button => {
            button.addEventListener('click', function() {
                const newsId = parseInt(this.dataset.id);
                const newsItem = GroupNews.find(item => item.id === newsId);

                if (newsItem) {
                    document.getElementById('GroupModalImage').src = newsItem.image;
                    document.getElementById('GroupModalDate').textContent = newsItem.date;
                    document.getElementById('GroupModalTitle').textContent = newsItem.title;
                    document.getElementById('GroupModalContent').innerHTML = `${newsItem.content}`;

                    GroupNewsModal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Закрытие модального окна
        GroupCloseModal.addEventListener('click', function() {
            GroupNewsModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        // Закрытие при клике вне модального окна
        window.addEventListener('click', function(event) {
            if (event.target === GroupNewsModal) {
                GroupNewsModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Обработчики событий
    GroupPrevBtn.addEventListener('click', () => goToSlideGroup(currentSlideGroup - 1));
    GroupNextBtn.addEventListener('click', () => goToSlideGroup(currentSlideGroup + 1));

    // Обработчик изменения размера окна
    window.addEventListener('resize', function() {
        const newIsMobile = window.innerWidth <= 768;
        if (newIsMobile !== isMobile) {
            isMobile = newIsMobile;
            createSlideGroups();
        }
    });

    // Инициализация
    createSlideGroups();
    initModal();
});
