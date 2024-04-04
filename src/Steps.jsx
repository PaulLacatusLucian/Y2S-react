import StepsCard from './Card';
import stepOne from './assets/1.png';
import stepsContent1 from './assets/stepsContent1.png';
import stepTwo from './assets/2.png';
import stepsContent2 from './assets/stepsContent2.png';
import stepThree from './assets/3.png';
import stepsContent3 from './assets/stepsContent3.png';

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
                    imgSource={stepOne}
                    title="Link your YouTube and Spotify accounts, and authorize YoutubeToSpotify."
                    imgSource2={stepsContent1}
                />
                <StepsCard
                    color='#101010'
                    imgSource={stepTwo}
                    title="Select which playlist from your Youtube ones you would like to transfer"
                    imgSource2={stepsContent2}
                />
                <StepsCard
                    color='#d40b0b'
                    imgSource={stepThree}
                    title="Done! Your playlists and music will be automatically transferred to your Spotify account."
                    imgSource2={stepsContent3}
                />
            </div>
        </div>
    );
}

export default Steps;
