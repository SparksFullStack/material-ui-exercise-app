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

    render(){
        const organizedExercises = this.getExercisesByMuscles();
        return(
            <Fragment>
                    <Header />
                    <Exercises organizedExercises={organizedExercises}/>
                    <Footer 
                        muscles={muscles}
                    />
            </Fragment>
        )
    }
}

export default App;