// * This will be our first Dialog that allows the user to add a new exercise to our store
import React, { Fragment } from 'react';

// importing the components that we'll need from Material
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { AddIcon } from '@material-ui/icons';

const Create = (props) => {
    <Fragment>
        {/* this button will trigger the Dialog to open */}
        <Button
            onClick={}
        >
            Open Dialog
        </Button>

        <Dialog
            open={false}
            onClose={}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                Create a New Exercise
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    Please fill out the form below:
                </DialogContentText>
                <form>

                </form>
            </DialogContent>

            <DialogActions>
                <Button color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}

export default Create;
