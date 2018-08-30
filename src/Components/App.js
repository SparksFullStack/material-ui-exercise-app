import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';

class App extends Component {
    render(){
        return(
            <Fragment>
                <Header />
                <Footer />
                <Exercises />
            </Fragment>
        )
    }
}

export default App;