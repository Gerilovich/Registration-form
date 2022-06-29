document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let formData = new FormData(form);

		let response = await fetch('#', {  // вместо #-необходимо указать файл на сервере в который будут отправлены данные
			method: 'POST',
			body: formData
			
		});
		
		if (response.ok) {
			let result = await response.json();
			alert(result.message);
			form.requestFullscreen();
		}
		else {
			alert('Ошибка загрузки данных')
		}
	}
})



