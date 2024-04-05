import StepsCard from './Card';
import stepOne from './assets/1.png';
import Lottie from 'lottie-react'
import stepContent1 from './assets/connection.json'
import stepTwo from './assets/2.png';
import stepsContent2 from './assets/pick.json';
import stepThree from './assets/3.png';
import stepsContent3 from './assets/ready.json';

function Steps() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        margin: '20px 0',
        marginTop: '40px',
        flexWrap: 'wrap',
        marginBottom: '150px'
    };

    return (
        <div>
            <div style={containerStyle}>
                <StepsCard
                    color='#129e3d'
                    // imgSource={stepOne}
                    imgSource={stepOne}
                    title="Link your YouTube and Spotify accounts, and authorize YoutubeToSpotify."
                    animationData={stepContent1}
                />
                <StepsCard
                    color='#101010'
                    imgSource={stepTwo}
                    title="Select which playlist from your Youtube ones you would like to transfer"
                    animationData={stepsContent2}
                />
                <StepsCard
                    color='#d40b0b'
                    imgSource={stepThree}
                    title="Done! Your playlists and music will be automatically transferred to your Spotify account."
                    animationData={stepsContent3}
                />
            </div>
        </div>
    );
}

export default Steps;
