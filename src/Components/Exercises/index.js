import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListIte } from '@material-ui/core';

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 8,
        marginRight: 8
    },
    headlines: {
        textTransform: 'capitalize'
    }
}

export default ({ organizedExercises }) => (
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {organizedExercises.map(([exerciseGroup, exerciseArrays]) => {
                    return (
                        <Fragment>
                            <Typography 
                                variant="headline"
                                style={styles.headlines}
                            >
                                {exerciseGroup}
                            </Typography>

                            <List component="nav">
                                {exerciseArrays.map(exerciseObject => {
                                    return (
                                        <ListItem>
                                            <ListItemText primary={exerciseObject.title} />
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Fragment>
                    )
                })}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography variant="display1">
                    Welcome!
                </Typography>

                <Typography variant="subheading">
                    Please select an exercise on the left.
                </Typography>
            </Paper>
        </Grid>
    </Grid>
)