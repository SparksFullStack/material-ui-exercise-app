import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { muscles } from '../../store';

export default (props) => (
    <Paper>
        <Tabs
            value={props.currentTab}
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