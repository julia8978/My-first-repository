const nameId = document.getElementById('name');
const guestName = prompt('Привет! Как тебя зовут?', 'Напиши свое имя');

if (guestName) {
    nameId.textContent = guestName + ", ";
}