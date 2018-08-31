import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

// in this file, we handle the switching of the category name to it's matching index
export default ({ muscles, selectedCategory, handleCategorySelected}) => {
    // we use a ternary here: 
    // if category is not undefined, we're going to find the index of the category (which position it is in the tabs)
    // otherwise, we're going to default to index 0
    const indexOfCurrentTab =  selectedCategory ? muscles.findIndex(muscleGroup => muscleGroup === selectedCategory) + 1 : 0;
    console.log(indexOfCurrentTab);

    return (
        <Paper>
            <Tabs
                value={indexOfCurrentTab}
                indicatorColor='primary'
                textColor='primary'
                centered
            >

                <Tab label="All" />
                {muscles.map(muscleGroup => {
                    return <Tab onClick={() => handleCategorySelected(muscleGroup)} label={muscleGroup} />
                })}
            </Tabs>
        </Paper>
    )
}