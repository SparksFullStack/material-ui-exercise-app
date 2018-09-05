import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises/Exercises';
import { muscles, exercises } from '../store';

class App extends Component {
    state = {
        exercises,
        selectedExercise: {
            title: "Welcome!",
            description: "Please select an exercise on the left for more information."
        }
    }

    getExercisesByMuscles = () => {
        // * this function sets up an object with keys that are the muscle groups and...
        // * ...values that are an empty array that will come to hold our exercises
        const initialExercises = muscles.reduce((exercises, muscleGroup) => {
            return {
                ...exercises,
                [muscleGroup]: []
            }
        }, {});

        // * this function takes our object of the initial exercises and empty arrays and...
        // * ...adds the exercises to the arrays
        return Object.entries(this.state.exercises.reduce((exercisesObject, currentExercise) => {
            const { muscles } = currentExercise;
            exercisesObject[muscles].push(currentExercise);
            return exercisesObject;
        }, initialExercises))

        // * this function returns an array of arrays. The first value of each array is the category...
        // * ...as a string. The second is an array of objects where the objects are the exercises
    }

    handleCategorySelected = (category) => {
        this.setState({
            selectedCategory: category
        })
    }

    handleExerciseSelected = (exerciseId) => {
            // this is ultilizing the alternative form of setState() that passes a callback with the previous state and the...
            // ...current props rather than just passing an object
        exercises.map((exercise) => {
            if (exerciseId === exercise.id) this.setState((prevState, currentProps) => {
                return { selectedExercise: exercise }
            });
        })
    }

    // this method will be called whenever a new exercise is added to our store
    // * Note that here we're actually updating the exercises in our state, not the ones in the store
    onExerciseCreate = (exercise) => {
        const newExercise = Object.assign({ id: exercise.title.toLowerCase() }, exercise);
        this.setState((prevState, props) => {
            return {
                exercises: [
                    ...prevState.exercises,
                    newExercise
                ]
            }
        })
    }

    onDeleteExercise = (exerciseId) => {
        // * this was my original way of removing an exercise
        // const exercises = this.state.exercises.filter(exercise => exercise.id !== exerciseId);
        // this.setState((prevState, currentProps) => {
        //     return { exercises }
        // })

        // * this is the tutorial's way of removing an exercise
        this.setState(({ exercises }) => ({ exercises: exercises.filter(exercise => exercise.id !== exerciseId) }))
    }

    onEditExercise = (exerciseId) => {
        // * this method sets the currently selected exercise as well as opening the edit dialog modal
        this.setState(({ exercises }) => {
            return {
                selectedExercise: exercises.find(exercise => exercise.id === exerciseId),
                editMode: true
            }
        })
    }

    render(){
        const organizedExercises = this.getExercisesByMuscles();
        const { selectedCategory, selectedExercise } = this.state;
        
        return(
            <Fragment>
                    <Header 
                        muscles={muscles}
                        onExerciseCreate={this.onExerciseCreate}
                    />
                    <Exercises 
                        organizedExercises={organizedExercises}
                        selectedCategory={selectedCategory}   
                        selectedExercise={selectedExercise}
                        handleExerciseSelected={this.handleExerciseSelected}
                        onDeleteExercise={this.onDeleteExercise}
                        onEditExercise={this.onEditExercise}
                    />
                    <Footer 
                        muscles={muscles}
                        selectedCategory={selectedCategory}
                        handleCategorySelected={this.handleCategorySelected}
                    />
            </Fragment>
        )
    }
}

export default App;