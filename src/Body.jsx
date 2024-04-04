import React from 'react';
import StepsCard from './Card';
import stepOne from './1.png';
import stepsContent1 from './stepsContent1.png';
import stepTwo from './2.png';
import stepsContent2 from './stepsContent21.png';
import stepThree from './3.png';

const containerStyle = {
    display: 'flex',
    justifyContent: 'center', 
    gap: '20px',
    margin: '20px 0', 
    marginTop: '40px', 
};

const bodyContainerStyle = {
    marginTop: '80px', 
};

function Body() {
    const textBox = {
        textAlign: 'center',
    };

    return (
        <div style={bodyContainerStyle}>
            <div style={textBox}>
                <h2>How to transfer YouTube playlist to Spotify?</h2>
            </div>
            <div style={containerStyle}>
                <StepsCard
                    imgSource={stepOne}
                    title="Link your YouTube and Spotify accounts, and authorize YoutubeToSpotify."
                    imgSource2={stepsContent1}
                />
                <StepsCard
                    imgSource={stepTwo}
                    title="Select which playlist from your Youtube ones you would like to transfer"
                    imgSource2={stepsContent2}
                />
                <StepsCard
                    imgSource={stepThree}
                    title="Link your YouTube and Spotify accounts, and authorize YoutubeToSpotify."
                    imgSource2={stepsContent1}
                />
            </div>
        </div>
    );
}

export default Body;
