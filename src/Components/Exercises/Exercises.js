import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 8,
        marginRight: 8,
        height: 500,
        overflowY: 'auto'
    },
    headlines: {
        textTransform: 'capitalize'
    },
    subheading: {
        marginTop: 20
    }
}

export default ({ organizedExercises, selectedCategory, selectedExercise, handleExerciseSelected }) => {
    return (
        <Grid container>
            {/* the left pane */}
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {organizedExercises.map(([exerciseGroup, exerciseArrays]) => {
                        if (!selectedCategory){
                            return (
                                <Fragment>
                                    <Typography 
                                        variant="headline"
                                        style={styles.headlines}
                                    >
                                        {exerciseGroup}
                                    </Typography>

                                    <List component="ul">
                                        {exerciseArrays.map(exerciseObject => {
                                            return (
                                                <ListItem onClick={() =>  handleExerciseSelected(exerciseObject.id)} button>
                                                    <ListItemText primary={exerciseObject.title} />
                                                </ListItem>
                                            )
                                        })}
                                    </List>
                                </Fragment>
                            )
                    } else if (selectedCategory === exerciseGroup) {
                        return (
                            <Fragment>
                                <Typography 
                                    variant='headline'
                                    style={styles.headlines}
                                >
                                    {exerciseGroup}
                                </Typography>

                                <List component='ul'>
                                    {/* now we map over the exercise group when it matches and return them all as a list */}
                                    {exerciseArrays.map(exerciseObject => {
                                        return (
                                            <ListItem onClick={() =>  handleExerciseSelected(exerciseObject.id)} button>
                                                <ListItemText primary={exerciseObject.title} />
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Fragment>

                        )
                    }
                    })}
                </Paper>
            </Grid>

            {/* the right pane */}
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {/* here if the selected category is undefined, we'll return the intro message... */}
                    {/* ...otherwise we'll return the data related to that category */}
                        {!selectedExercise ? (
                            <Fragment>
                                <Typography variant="display2">
                                    Welcome!
                                </Typography>

                                <Typography variant="subheading" style={styles.subheading}>
                                    Please select an exercise on the left.
                                </Typography>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Typography variant="display2">
                                    {selectedExercise.title}
                                </Typography>

                                <Typography variant="subheading" style={styles.subheading}>
                                    {selectedExercise.description}
                                </Typography>
                            </Fragment>
                        )
                    }
                </Paper>
            </Grid>
        </Grid>
    )}