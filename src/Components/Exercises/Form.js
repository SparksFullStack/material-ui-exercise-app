import React, { Component, Fragment } from 'react';
// here I'm importing the store's data directly because we aren't using Redux for some reason
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem, 
    withStyles,
    Button
} from "@material-ui/core";

// here we're creating our 'styles' function that returns a style object...
// ...the object's values will be injected into the component via 'withStyles'
const styles = (theme) => {
    // it seems like a best practice to name the keys of the styles after the components/elements...
    // ...that they're going to style, like how we named 'FormControl' below
    return {
        FormControl: {
            width: 500
        }
    }
}

class Form extends Component {
    state = {
        exerciseForm: {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleUpdateForm = (name) => (event) => {
        event.preventDefault();
        this.setState({ 
                exerciseForm: {
                    ...this.state.exerciseForm,
                    [name]: event.target.value
            }
         })
    }

    // this function submits the added exercise data whenever the 'Create' button is clicked...
    // ...it also zeroes out the exercise object in the state and closes the Dialog
    handleSubmit = () => {
        const { exerciseForm } = this.state;
        
        // calling the function to create the value in the store and passing the new exercise
        this.props.onCreate(exerciseForm);

        // zeroing out the exercise object and closing out the modal
        this.setState((prevState, currProps) => ({
            exerciseForm: {
                title: '',
                description: '',
                muscles: ''
            }
        }))

        this.props.handleDialog();
    }
    
    render() {
        const { exerciseForm: { title, muscles, description } } = this.state,
        { classes, muscleCategories } = this.props;
        console.log(muscles);
              
        return (
            <form>
                <TextField 
                    label='Title' 
                    // the values passed to handleUpdateForm and value must match the key in the exerciseForm object on the state
                    onChange={this.handleUpdateForm('title')}
                    value={title}
                    placeholder='Enter an exercise title...'
                    margin='normal'
                    className={classes.FormControl}
                />
                <br />
                <FormControl className={classes.FormControl}>
                    <InputLabel htmlFor='muscles'>
                        Muscles
                    </InputLabel>

                    <Select
                        // we have a very similar setup here to setting the state as we did in the <TextField>s...
                        // ...even making use of the same method. Value will be set equal to whatever the final...
                        // ...selected value from the dropdown is.
                        value={muscles}
                        onChange={this.handleUpdateForm('muscles')}
                    >

                    {/* here we need to map over our muscle categories and then create a single <MenuItem> for each one */}
                    {muscleCategories.map(category => 
                        <MenuItem key={category} value={category}>
                            {category}
                        </MenuItem>
                    )}
                    </Select>
                </FormControl>
                <br />
                <TextField 
                    label='Description'
                    onChange={this.handleUpdateForm('description')}
                    value={description}
                    placeholder='Enter a description...'
                    margin='normal'
                    multiline
                    rows='4'
                    className={classes.FormControl}
                />
                <Button
                    onClick={this.handleSubmit}
                    color="primary"
                    variant="raised"
                >
                    Create
                </Button>
            </form>
        )
    }
}

export default withStyles(styles)(Form);