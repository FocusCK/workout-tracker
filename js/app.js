document.addEventListener('DOMContentLoaded', () => {
    displayWorkouts();
    displayGoal();
    displayPersonalList();
});

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
    addWorkoutToTable(workout);
}



function addWorkoutToTable(workout) {
    const workoutList = document.getElementById('workout-list');
    const row = document.createElement('tr');

    row.innerHTML = `<td>${workout.date}</td>
    <td>${workout.exercise}</td>
    <td>${workout.weight}</td>
    <td>${workout.reps}</td>
    <td>${workout.sets}</td>`;
    if (workoutList.firstChild) {
        workoutList.insertBefore(row, workoutList.firstChild);
    } else {
        workoutList.appendChild(row);
    }
}
function displayWorkouts() {
    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    const workoutList = document.getElementById('workout-list');
    workoutList.innerHTML = '';

    workouts.forEach(workout => {
        addWorkoutToTable(workout);
    });
}


document.getElementById('set-goal').addEventListener('click', setGoal);

function setGoal() {
    const goal = document.getElementById('goal').value;
    localStorage.setItem('goal', goal);
    displayGoal();
}

function displayGoal() {
    const goal = localStorage.getItem('goal') || 'None';
    document.getElementById('current-goal').innerText = goal;
}



document.getElementById('exercise-form').addEventListener('submit', addToPersonalList);

function addToPersonalList(event) {
    event.preventDefault();
    const newExercise = document.getElementById('new-exercise').value;
    let exerciseList = JSON.parse(localStorage.getItem('exercises')) || [];
    exerciseList.push(newExercise);
    localStorage.setItem('exercises', JSON.stringify(exerciseList));
    displayPersonalList();
    document.getElementById('new-exercise').value = '';
}

function displayPersonalList() {
    const exerciseList = JSON.parse(localStorage.getItem('exercises')) || [];
    const chooseExercise = document.getElementById('exercise');
    // chooseExercise.innerHTML = exerciseList.map(exercise => `<option value="${exercise}">${exercise}</option>`).join('');
    chooseExercise.innerHTML = '';
    exerciseList.forEach((exercise, index) => {
        const option = document.createElement('option');
        option.value = exercise;
        option.textContent = exercise;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.addEventListener('click', () => deleteExercise(index));
        const optionWrapper = document.createElement('div');
        optionWrapper.appendChild(option);
        optionWrapper.appendChild(deleteButton);
        chooseExercise.appendChild(optionWrapper);
    });
}

function deleteExercise(index) {
    let exerciseList = JSON.parse(localStorage.getItem('exercises')) || [];
    exerciseList.splice(index, 1);
    localStorage.setItem('exercises', JSON.stringify(exerciseList));
    displayPersonalList();
}