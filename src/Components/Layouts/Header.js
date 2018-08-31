import React from 'react';

// importing the styling components from the Core library
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="headline"
                color="inherit" gutterBottom>
                    Exercise Data
                </Typography>
            </Toolbar>
        </AppBar>
    )
}