import React from 'react';
import Image from 'react-bootstrap/Image';
import youtubeLogo from './assets/youtube.png';
import serverIcon from './assets/serverIcon.png';
import connectionIcon from './assets/conection.png';

function Informations() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '200px',
        margin: '20px 0',
        marginTop: '70px',
        flexWrap: 'wrap',
        height: '300px',
    };

    const picuteContainer = {
        border: '2px solid black',
        padding: '30px',
        borderRadius: '60px',
        display: 'flex',
        alignItems: 'center',
        flexShrink: '0', // Evită ca containerul să ocupe tot rândul
    };

    const arrowStyle = {
        width: '30px',
        height: '30px',
        animation: 'moveArrow 1s infinite',
    };

    const imageStyle = {
        width: '150px',
        height: '150px',
    };

    const paragraphStyle = {
        textAlign: 'left',
        width: '400px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        lineHeight: '1.6',
        margin: '0', // Elimină marginul pentru a lipi paragraful de containerul imaginilor
    };

    const mainContainer = {
        padding: '50px',
        textAlign: 'center',
        
    };

    return (
        <div style={mainContainer}>
            <h2 style={{ fontSize: '50px', fontFamily: 'sans-serif' }}>How is it working?</h2>
            <div>
                <div style={containerStyle}>
                    <div style={picuteContainer}>
                        <Image src={serverIcon} roundedCircle style={imageStyle} />
                        <Image src={connectionIcon} roundedCircle style={imageStyle} />
                        <Image src={youtubeLogo} roundedCircle style={imageStyle} />
                    </div>
                    <div style={{flexGrow: 1}}> {/* Adaug un div pentru a avea spatiu intre imaginile si paragraful */}
                        <p style={paragraphStyle}>The first step is to retrieve data from your YouTube account using the YouTube API. To accomplish this, our platform requests access to your YouTube account, allowing us to extract information about your playlists, favorite videos, and listening preferences. Once we have gathered this data, we process it to present it to you in an accessible manner.</p>
                    </div>
                </div>
            </div>
            {/* <hr />  */}
            <div></div>
        </div>
    );
}

export default Informations;
