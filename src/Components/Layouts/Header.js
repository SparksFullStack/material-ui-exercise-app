import React from 'react';

// importing the styling components from the Core library
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';

// importing the Icons from the Icons library
// Menu is actually the name for the Menu Icon export in this library
import { Menu } from '@material-ui/icons';

export default (props) => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="headline">
                    Exercise Data
                </Typography>
            </Toolbar>
        </AppBar>
    )
}