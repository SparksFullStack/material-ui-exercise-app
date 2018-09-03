import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

// in this file, we handle the switching of the category name to it's matching index
export default ({ muscles, selectedCategory, handleCategorySelected}) => {
    // we use a ternary here: 
    // if category is not undefined, we're going to find the index of the category (which position it is in the tabs)
    // otherwise, we're going to default to index 0
    const indexOfCurrentTab =  selectedCategory ? muscles.findIndex(muscleGroup => muscleGroup === selectedCategory) + 1 : 0;

    // Here we're passing a ternary into the handleCategorySelected function that's essentially... 
    // ...saying if the index is 0, set an empty value, otherwise set the category to the muscles array at the current index - 1...
    // ...and we will be provided the index value by the onChange handler inside of the <Tabs> component
    const selectCurrentIndex = (tabIndex) => tabIndex === 0 ? '' : muscles[tabIndex - 1];

    return (
        <Paper>
            <Tabs
                value={indexOfCurrentTab}
                // here we're calling onChange, which gets the event object and the index of the selected tab by default...
                // ...we're then calling handleCategorySelected and passing in the result of selectCurrentIndex
                onChange={(event, index) => {
                    handleCategorySelected(selectCurrentIndex(index));
                }}
                indicatorColor='primary'
                textColor='primary'
                centered
            >

                <Tab label="All" />
                {muscles.map(muscleGroup => {
                    return <Tab key={muscleGroup} label={muscleGroup} />
                })}
            </Tabs>
        </Paper>
    )
}