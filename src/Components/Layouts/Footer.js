import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

// in this file, we handle the switching of the category name to it's matching index
export default ({ muscles, selectedCategory, handleCategorySelected}) => {
    // we use a ternary here: 
    // if category is not undefined, we're going to find the index of the category (which position it is in the tabs)
    // otherwise, we're going to default to index 0
    const indexOfCurrentTab =  selectedCategory ? muscles.findIndex(muscleGroup => muscleGroup === selectedCategory) + 1 : 0;

    return (
        <Paper>
            <Tabs
                value={indexOfCurrentTab}
                // here we're calling onChange, which gets the event object and the index of the selected tab by default...
                // ...then, we're passing a ternary into the handleCategorySelected function that's essentially... 
                // ...saying if the index is 0, set an empty value, otherwise set the category to the muscles array at the current index - 1.
                onChange={(event, index) => {
                    handleCategorySelected(index === 0 ? '' : muscles[index - 1]);
                    muscles[index - 1];
                }}
                indicatorColor='primary'
                textColor='primary'
                centered
            >

                <Tab label="All" />
                {muscles.map(muscleGroup => {
                    return <Tab label={muscleGroup} />
                })}
            </Tabs>
        </Paper>
    )
}