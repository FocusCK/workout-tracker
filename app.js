document.getElementById('form').addEventListener('submit', addWorkout);
function addWorkout(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const exercise = document.getElementById('exercise').valuel;
    const duration = document.getElementById('duration').value;
    const workout = { date, exercise, duration };
    let workouts = JSON.parse(localStorage.getItem('workouts'));
    workouts.push(workouts);
    localStorage.setItem('workouts', JSON.stringify(workouts));
}