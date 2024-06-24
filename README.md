# Workout Tracker

## Table of Contents
1. Introduction
2. Using The application
3. Languages Used
4. Features

## Introduction

This application aims to assist gym goers by allowing them to log exercises and track progress over time on one platform. The user can set goals, log workouts, manage exercises and view logged workouts. All is displayed on a responsive layout to suit all devices.

github repo link:
https://github.com/FocusCK

github.io hosted page:
https://github.com/FocusCK/workout-tracker

## Using The application

To use the application you must first download the repository from Github.

When you open the aplication the next step is to enter your goal to display it.

The next step is to populate the exercise list. This is done by simply typing in the exercises which you choose to track. There is a feature which allows the user to delete exercises for various reasons such as no longer practising the exercise or mispelling the exercise when populating the list.

You are now set up to start inputting exercises as you complete them by entering the date, exercise, weight in KGs, how many reps you completed and how many sets.

## Languages Used

This app is compiled using three languages. 

HTML, CSS and JavaScript.

## Features

### HTML

```html
<div class="goals">
    <h3>Current Goal: <div id="current-goal">None</div>
    </h3>
    <label for="goal">Set Goal:</label>
    <br>
    <input type="text" id="goal" placeholder="Type here to update your current goal!">
    <button id="set-goal">Set Goal</button>
</div>
```

### CSS

```css
.exercises,
.workouts {
    max-height: 13em;
    overflow-y: auto;
}```
```header, main {
    width: 100%;
    max-width: 1750px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
}
```


### JavaScript
```javascript
function addWorkout(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const exercise = document.getElementById('exercise').value;
    const weight = document.getElementById('weight').value;
    if (weight <= 0) {
        alert('Please enter a valid weight.');
        return;
    }
    const reps = document.getElementById('reps').value;
    if (reps <= 0) {
        alert('Please enter a valid number of reps.');
        return;
    }
    const sets = document.getElementById('sets').value;
    if (sets <= 0) {
        alert('Please enter a valid number of sets')
    }



    const workout = { date, exercise, weight, reps, sets };

    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
    // addWorkoutToTable(workout);
    displayWorkouts();
}
```