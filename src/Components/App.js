import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { AppBar } from '@material-ui/core';

class App extends Component {
    state = {
        currentTab: 0
    }

    changeCurrentTab = (tabIndex) => {
        this.setState({ currentTab: tabIndex });
    }

    render(){
        return(
            <Fragment>
                    <Header />
                    <Exercises />
                    <Footer currentTab={this.state.currentTab} changeCurrentTab={this.changeCurrentTab}/>
            </Fragment>
        )
    }
}

export default App;