document.addEventListener('DOMContentLoaded', () => {
    displayWorkouts();
    displayGoal();
    displayPersonalList();
});

document.getElementById('workout-form').addEventListener('submit', addWorkout);
document.getElementById('show-all-button').addEventListener('click', showMoreWorkouts);

function addWorkout(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const exercise = document.getElementById('exercise').value;
    const weight = document.getElementById('weight').value;
    if(weight <= 0) {
        alert('Please enter a valid weight.'); 
        return;
    }
    const reps = document.getElementById('reps').value;
    if(reps <= 0) {
        alert('Please enter a valid number of reps.');
        return;
    }
    const sets = document.getElementById('sets').value;
    if(sets <= 0) {
        alert('Please enter a valid number of sets')
    }

    

    const workout = { date, exercise, weight, reps, sets };

    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
    // addWorkoutToTable(workout);
    displayWorkouts();
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

    const showMoreButton = document.getElementById('show-all-button');
    if(workouts.length > 3) {
        showMoreButton.style.display = 'block';
    } else {
        showMoreButton.style.display = 'none';
    }

    const latestWorkouts = workouts.slice(-3).reverse();
    latestWorkouts.forEach(workout => {
        addWorkoutToTable(workout);
    });

    // workouts.forEach(workout => {
    //     addWorkoutToTable(workout);
    // });
}

function showMoreWorkouts(){
    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    const workoutList = document.getElementById('workout-list');
    workoutList.innerHTML = '';
    workouts.reverse().forEach(workout => {
        addWorkoutToTable(workout);
    });
    document.getElementById('show-all-button').style.display = 'none';
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
    chooseExercise.innerHTML = '';
    exerciseList.forEach((exercise) => {
        const option = document.createElement('option');
        option.value = exercise;
        option.textContent = exercise;
        chooseExercise.appendChild(option);
    });

    const exerciseListContainer = document.getElementById('exercise-list-container');
    exerciseListContainer.innerHTML = '';

    exerciseList.forEach((exercise, index) => {
        const exerciseItem = document.createElement('div');
        exerciseItem.classList.add('exercise-item');
        const exerciseText = document.createElement('span');
        exerciseText.textContent = exercise;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.addEventListener('click', () => deleteExercise(index));
        exerciseItem.appendChild(exerciseText);
        exerciseItem.appendChild(deleteButton);
        exerciseListContainer.appendChild(exerciseItem);
    });
}

function deleteExercise(index) {
    let exerciseList = JSON.parse(localStorage.getItem('exercises')) || [];
    exerciseList.splice(index, 1);
    localStorage.setItem('exercises', JSON.stringify(exerciseList));
    displayPersonalList();
}