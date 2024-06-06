document.getElementById('workout-form').addEventListener('submit', addWorkout);

function addWorkout(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const exercise = document.getElementById('exercise').value;
    const weight = document.getElementById('weight').value;
    const reps = document.getElementById('reps').value;
    const sets = document.getElementById('sets').value;

    const workout = { date, exercise, weight, reps, sets };

    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));

    displayWorkouts();
}

function displayWorkouts() {
    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    const workoutList = document.getElementById('workout-list');
    workoutList.innerHTML = workouts.map(workout => `
        <tr>
        <td>${workout.date}</td>
        <td>${workout.exercise}</td>
        <td>${workout.weight}</td>
        <td>${workout.reps}</td>
        <td>${workout.sets}</td>
        </tr>`).join('');
}
displayWorkouts();

