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
    return {
        root: {
            fontFamily: "Wingdings"
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

    render(){
        const { isDialogOpen, exerciseForm: { title, description, muscles } } = this.state,
              { muscles: muscleCategories } = this.props;

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
                    <DialogTitle id="form-dialog-title">
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
                            />
                            <br />
                            <FormControl>
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
                                    <MenuItem value={category}>
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
                            />
                        </form>
                    </DialogContent>
    
                    <DialogActions>
                        <Button
                            onClick={() => {
                                this.handleDialog();
                            }}
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
