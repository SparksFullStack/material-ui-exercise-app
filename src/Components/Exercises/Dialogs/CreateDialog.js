// * This will be our first Dialog that allows the user to add a new exercise to our store
import React, { Fragment } from 'react';
import Form from '../Form';

// importing the components that we'll need from Material
import { 
        Button, 
        Dialog, 
        DialogContent, 
        DialogContentText, 
        DialogTitle
        } from '@material-ui/core';
import { Add } from '@material-ui/icons';


class CreateDialog extends React.Component {

    // here the properties in the 'exerciseForm' object match the labels we're passing to our onChange handlers so they can be updated
    state = {
        isDialogOpen: false,
    }
    
    handleDialog = () => {
        this.setState((prevState, props) => {
            return { isDialogOpen: !prevState.isDialogOpen }
        })
    }
    
    render(){
        // here are all our destructured imports from the state as well as props...
        // ...this includes our 'classes' object injected by 'withStyles'
        // exerciseForm: { title, description, muscles 
        const { isDialogOpen } = this.state,
              { onCreate, muscles } = this.props;

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

                        <Form 
                            onCreate={onCreate}
                            muscleCategories={muscles}
                            handleDialog={this.handleDialog}
                        />

                    </DialogContent>
                </Dialog>
            </Fragment>
        )
    }
}

export default CreateDialog;
