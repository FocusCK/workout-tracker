document.getElementById('cardio-form').addEventListener('submit', addCardio);
function addCardio(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const exercise = document.getElementById('exercise').valuel;
    const duration = document.getElementById('duration').value;
    const cardio = { date, exercise, duration };
    let cardios = JSON.parse(localStorage.getItem('cardio'));
    cardios.push(cardio);
    localStorage.setItem('cardio', JSON.stringify(cardio));
}