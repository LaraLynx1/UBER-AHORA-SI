const socket = io('http://localhost:5050', { path: '/real-time' });

document.getElementById('conductorInfoForm').addEventListener('submit', function (event) {
	event.preventDefault();

	const username = document.getElementById('username').value.trim();

	if (username) {
		socket.emit('register', { username, role: 'conductor' });

		setTimeout(() => {
			window.location.href = `http://127.0.0.1:3001/placa/placa.html?conductorId=${username}`;
		}, 500);
	} else {
		return;
	}
});
