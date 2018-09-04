import React from 'react';

// importing the styling components from the Core library
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Exercises/Dialogs/CreateDialog';

export default ({ muscles }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography style={{ flex: 1 }} variant="headline" color="inherit" gutterBottom>
                    Exercise Data
                </Typography>
                <CreateDialog 
                    muscles={muscles}
                />
            </Toolbar>
        </AppBar>
    )
}