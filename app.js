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
    localStorage.setItem('cardio', JSON.stringify(workout));
    displayWorkouts();
}

function displayWorkouts() {
    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    const workoutList = document.getElementById('workout-list');
    workoutList.innerHTML = workouts.map(workout => `<li>${workout.date} ${workout.exercise} ${workout.weight} ${workout.reps} ${workout.sets}</li>`).join('');
}
displayWorkouts();