import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default (props) => (
    <Paper>
        <Tabs
            value={props.currentTab}
            indicatorColor='primary'
            textColor='primary'
            centered
        >
            <Tab onClick={() => props.changeCurrentTab(0)} label="Item One" />
            <Tab onClick={() => props.changeCurrentTab(1)} label="Item Two" />
            <Tab onClick={() => props.changeCurrentTab(2)} label="Item Three" />
        </Tabs>
    </Paper>
)