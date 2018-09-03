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

// here we're setting the default values for 'selectedExericse' so that we don't have to have a large ternary returning a seperate set of code by default
export default ({ organizedExercises, selectedCategory, selectedExercise = { id: undefined, title: 'Welcome!', description: 'Please select an exercise from the list on the left.'}, handleExerciseSelected }) => {
    return (
        <Grid container>
            {/* the left pane */}
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {organizedExercises.map(([exerciseGroup, exerciseArrays]) => {
                        if (!selectedCategory){
                            return (
                                <Fragment key={exerciseGroup}>
                                    <Typography 
                                        variant="headline"
                                        style={styles.headlines}
                                    >
                                        {exerciseGroup}
                                    </Typography>

                                    <List component="ul">
                                        {exerciseArrays.map(exerciseObject => {
                                            return (
                                                <ListItem
                                                    key={exerciseObject.id} 
                                                    onClick={() =>  handleExerciseSelected(exerciseObject.id)} 
                                                    button
                                                >
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
                                            <ListItem 
                                                key={exerciseObject.id}
                                                onClick={() =>  handleExerciseSelected(exerciseObject.id)} 
                                                button
                                            >
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
                    <Fragment>
                        <Typography variant="display2">
                            {selectedExercise.title}
                        </Typography>

                        <Typography variant="subheading" style={styles.subheading}>
                            {selectedExercise.description}
                        </Typography>
                    </Fragment>
                </Paper>
            </Grid>
        </Grid>
    )}


