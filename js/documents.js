// Модальное окно для документов
document.addEventListener('DOMContentLoaded', function() {
    const documentsModal = document.getElementById('documentsModal');
    const closeBtn = document.getElementById('documentsCloseModal');
    const documentsLinks = document.querySelectorAll('.dropdown-menu__item-link[href="#documents"]');

	// Обработчики открытия модального окна
    documentsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showDocumentsModal();
        });
    });

	// Функции управления модальным окном
    function showDocumentsModal() {
        documentsModal.classList.add('active');
        document.body.classList.add('lock');
        loadDocuments();
    }

	function closeDocumentsModal() {
        documentsModal.classList.remove('active');
        document.body.classList.remove('lock');
    }

	// Закрытие модального окна
    closeBtn.addEventListener('click', closeDocumentsModal);
    documentsModal.addEventListener('click', (e) => {
        if(e.target === documentsModal) closeDocumentsModal();
    });

	// Функция для загрузки документов
	function loadDocuments() {
		const mockDocuments = {
			reports: [
				{
					name: 'Отчет c 18.08 по 30.10 2024г.docx',
					size: '13 KB',
					path: '/download/reports/report-october-december.docx'
				},
				{
					name: 'Отчет c 18.08 по 30.10 2024г.docx',
					size: '19 KB',
					path: '/download/reports/report-august-october.docx'
				},
				{
					name: 'Отчет за март-июнь 2024г.docx',
					size: '18 KB',
					path: '/download/reports/report-march-june.docx'
				},
				{
					name: 'Отчет казначея комитета по 5-ой.pdf',
					size: '104 KB',
					path: '/download/reports/assignment-report.pdf'
				}
			],
			documents: [
				{ name: 'В Управу Вешняки.jpeg', size: '2.5 MB', path: '/download/documents/vUpravuVeshnyaki.jpg' },
				{ name: 'ДепБезопасности Москвы.jpg', size: '11.4 MB', path: '/download/documents/DepBezopasnostiMoscow.bmp' },
				{ name: 'Эксперт.заключение по инф.материалам АА.pdf', size: '8 MB', path: '/download/documents/Expertzakluchenie.pdf' },
				{ name: 'ФСИН России.pdf', size: '137 KB', path: '/download/documents/FsinRussia.pdf' },
				{ name: 'Соцзначимость_заключение_ МНПЦ.pdf', size: '3.3 MB', path: '/download/documents/ZakluchenieMNPC.pdf' },
				{ name: 'Единство_Посланию.jpg', size: '176 KB', path: '/download/documents/EdinstvoPoslaniy.jpg' },
				{ name: 'ДепКультуры Москвы.pdf', size: '199 KB', path: '/download/documents/DepKultMoscow.pdf' },
				{ name: 'Брюн_Письмо главного нарколога МинЗдрава.pdf', size: '157 KB', path: '/download/documents/BrunPismoglavNarkologa.pdf' },
				{ name: 'Благодарственное письмо МНПЦ Наркологии.pdf', size: '521 KB', path: '/download/documents/BlagPismo.pdf' },
				{ name: 'Основные сведения об АА.pdf', size: '436 KB', path: '/download/documents/OsnovSvedAA.pdf' },
				{ name: 'ЦПСиД Родник_Соглашение.pdf', size: '1.1 MB', path: '/download/documents/CPSiDRodnikSogl.pdf' },
				{ name: 'ЦПСиД Диалог_Соглашение.pdf', size: '1 MB', path: '/download/documents/CPSiDDialogsogl.pdf' },
				{ name: 'УФСИН г. Москвы. Соглашение.pdf', size: '535 KB', path: '/download/documents/UFSINsoglashenie.pdf' },
				{ name: 'УИИ г. Москвы_Соглашение.pdf', size: '1.3 MB', path: '/download/documents/UIISoglashenie.pdf' },
				{ name: 'МНПЦ наркологии_Соглашение.pdf', size: '1.3 MB', path: '/download/documents/MNPCnarkoSoglashenie.pdf' },
				{ name: 'Договор МДОО 2020.pdf', size: '1.1 MB', path: '/download/documents/dogMDOO2020.pdf' },
				{ name: 'Устав_Фонд_Послание.pdf', size: '1.5 MB', path: '/download/documents/UstavFondPoslanie.pdf' },
				{ name: 'Свидетельство ФНС_Фонд_Послание.jpg', size: '82 KB', path: '/download/documents/SvidFNSfondPoslanie.jpg' },
				{ name: 'Свидетельство МинЮст_Фонд_Послание.jpg', size: '195 KB', path: '/download/documents/SvidMinustFondPoslanie.jpg' },
				{ name: 'Лист записи ЕГРЮЛ_Фонд_Послание.pdf', size: '310 KB', path: '/download/documents/EGRULfondPoslanie.pdf' },
				{ name: 'МинЮст Единство.pdf', size: '3.3 MB', path: '/download/documents/ZakluchenieMNPC.pdf' }
			]
		};

		// Очистка списков
        ['reportsList', 'documentsList'].forEach(id => {
            document.getElementById(id).innerHTML = '';
        });

		// Добавление элементов
        mockDocuments.reports.forEach(doc => addDocumentItem(doc, 'reportsList'));
        mockDocuments.documents.forEach(doc => addDocumentItem(doc, 'documentsList'));
	}

	// Функция для добавления элемента документа в список
    function addDocumentItem(doc, listId) {
        const list = document.getElementById(listId);
        const fileExtension = doc.name.split('.').pop().toLowerCase();

        const item = document.createElement('div');
        item.className = 'document-item';
        item.innerHTML = `
            <a href="${doc.path}" download="${doc.name}" class="document-link">
                <div class="document-icon">${getFileIcon(fileExtension)}</div>
                <div class="document-info">
                    <div class="document-name">${doc.name}</div>
                    <div class="document-size">${doc.size}</div>
                </div>
            </a>
        `;

        list.appendChild(item);

        // Обработчик клика на весь элемент
        item.addEventListener('click', function(e) {
            if (!e.target.closest('a')) { // Не перехватывать клики на ссылке
                const link = this.querySelector('a');
                if (link) link.click();
            }
        });

        list.appendChild(item);
    }

	// Функция для получения иконки в зависимости от типа файла
	function getFileIcon(ext) {
        const icons = {
			pdf: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M10 11v5"></path><path d="M14 11v3"></path><rect x="6" y="11" width="2" height="4"></rect></svg>',
			doc: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>',
			docx: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>',
			xls: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>',
			xlsx: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>',
			default: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9b59b6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>'
		};
        return icons[ext] || icons.default;
    }
});

	// Функция для скачивания файла (глобальная)
	window.downloadFile = async function(path, filename) {
		try {
			// Прямое скачивание без fetch
			const link = document.createElement('a');
			link.href = path;
			link.download = filename;
			link.style.display = 'none';

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

		} catch (error) {
			console.error('Ошибка скачивания:', error);
			alert('Ошибка при скачивании файла');
		}
	};
