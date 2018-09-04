import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises/Exercises';
import { muscles, exercises } from '../store';

class App extends Component {
    state = {
        exercises
    }

    getExercisesByMuscles = () => {
        return Object.entries(this.state.exercises.reduce((exercises, currentExercise) => {
            const { muscles } = currentExercise;
            exercises[muscles] = exercises[muscles] ? [...exercises[muscles], currentExercise] : [currentExercise];

            return exercises;
        }, {}))
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
    onCreate = (exercise) => {
        const newExercise = Object.assign({ id: exercise.title.toLowerCase() }, exercise);
        exercises.push(newExercise);
        console.log(exercises);
    }

    render(){
        const organizedExercises = this.getExercisesByMuscles();
        const { selectedCategory, selectedExercise } = this.state;

        return(
            <Fragment>
                    <Header 
                        muscles={muscles}
                        onCreate={this.onCreate}
                    />
                    <Exercises 
                        organizedExercises={organizedExercises}
                        selectedCategory={selectedCategory}   
                        selectedExercise={selectedExercise}
                        handleExerciseSelected={this.handleExerciseSelected}
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