// * This will be our first Dialog that allows the user to add a new exercise to our store
import React, { Fragment } from 'react';

// importing the components that we'll need from Material
import { 
        Button, 
        Dialog, 
        DialogActions, 
        DialogContent, 
        DialogContentText, 
        DialogTitle, 
        TextField,
        FormControl,
        InputLabel,
        Select,
        MenuItem,
        withStyles
        } from '@material-ui/core';
import { Add } from '@material-ui/icons';

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

class CreateDialog extends React.Component {

    // here the properties in the 'exerciseForm' object match the labels we're passing to our onChange handlers so they can be updated
    state = {
        isDialogOpen: false,
        exerciseForm: {
            title: '',
            description: '',
            muscles: ''
        },
        fieldValue: ''
    }

    handleDialog = () => {
        this.setState((prevState, props) => {
            return { isDialogOpen: !prevState.isDialogOpen }
        })
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
        const { exercise } = this.state;
        
        // calling the function to create the value in the store and passing the new exercise
        this.props.onCreate(exercise);

        // zeroing out the exercise object
        this.setState((prevState, currProps) => ({
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        }))

        // closing the dialog modal by calling our handleDialog method
        this.handleDialog();
    }

    render(){
        // here are all our destructured imports from the state as well as props...
        // ...this includes our 'classes' object injected by 'withStyles'
        const { isDialogOpen, exerciseForm: { title, description, muscles } } = this.state,
              { muscles: muscleCategories, classes } = this.props;

        return (
            <Fragment>
                {/* this button will trigger the Dialog to open */}
                <Button
                    onClick={this.handleDialog}
                    variant='fab'
                    mini
                >
                    <Add />
                </Button>
    
                <Dialog open={isDialogOpen}>
                    <DialogTitle>
                        Create a New Exercise
                    </DialogTitle>
    
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the form below:
                        </DialogContentText>
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
                        </form>
                    </DialogContent>
    
                    <DialogActions>
                        <Button
                            onClick={this.handleSubmit}
                            color="primary"
                            variant="raised"
                        >
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

export default withStyles(styles)(CreateDialog);
