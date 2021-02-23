import React, { Component } from 'react';
import InfoForm from './components/InfoForm';
import InfoList from './components/InfoList';

class HomePage extends Component {

    render() {
        return(
            <div>
                <h1>HomePage</h1>
                <InfoForm/>
                <InfoList/>
            </div>
        )
    }

}

export default HomePage;