document.getElementById('workout-form').addEventListener('submit', addWorkout);

function addWorkout(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const exercise = document.getElementById('exercise').valuel;
    const weight = document.getElementById('weight').value;
    const reps = document.getElementById('reps');
    const sets = document.getElementById('sets');

    const workout = { date, exercise, weight, reps, sets };

    let workouts = JSON.parse(localStorage.getItem('workout'));
    workouts.push(workout);
    localStorage.setItem('cardio', JSON.stringify(workout));
}