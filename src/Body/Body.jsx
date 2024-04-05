import React from 'react';
import Steps from './StepsContainer/Steps';
import Informations from './InformationsContainers/Informations';

const bodyContainerStyle = {
    marginTop: '100px', 
    marginBottom: '100px',
};

function Body() {
    const textBox = {
        textAlign: 'center',
        marginBottom: '100px'
        };

    return (
        <div style={bodyContainerStyle}>
            <div style={textBox}>
                <h2 style={{fontSize: '50px', fontFamily: 'sans-serif'}}>How to transfer YouTube playlist to Spotify?</h2>
            </div>
           <Steps></Steps>
           <Informations></Informations>
        </div>
    );
}

export default Body;
