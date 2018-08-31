import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
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
        console.log(selectedCategory);
        return(
            <Fragment>
                    <Header />
                    <Exercises organizedExercises={organizedExercises}/>
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