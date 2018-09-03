// * This will be our first Dialog that allows the user to add a new exercise to our store
import React, { Fragment } from 'react';

// importing the components that we'll need from Material
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';

class CreateDialog extends React.Component {
    state = {
        isDialogOpen: false,
    }

    handleDialog = () => {
        this.setState((prevState, props) => {
            return { isDialogOpen: !prevState.isDialogOpen }
        })
    }

    handleUpdateForm = (name) => (event) => {
        this.setState((prevState, props) => {
            return { [name]: event.target.value }
        })
    }

    render(){
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
    
                <Dialog open={this.state.isDialogOpen}>
                    <DialogTitle id="form-dialog-title">
                        Create a New Exercise
                    </DialogTitle>
    
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the form below:
                        </DialogContentText>
                        <form>
                            <TextField 
                                id='field'
                                label='Exercise Title'
                                value={this.state.formValue}
                                onChange={this.handleUpdateForm('field')}
                                defaultValue=''
                                placeholder='Enter the name...'
                                margin='dense'
                            />
                        </form>
                    </DialogContent>
    
                    <DialogActions>
                        <Button
                            onClick={this.handleDialog}
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

export default CreateDialog;
