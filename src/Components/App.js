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

    render(){
        const organizedExercises = this.getExercisesByMuscles();
        const { selectedCategory } = this.state;

        return(
            <Fragment>
                    <Header />
                    <Exercises 
                        organizedExercises={organizedExercises}
                        selectedCategory={selectedCategory}    
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