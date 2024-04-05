import React from 'react';
import InfoContainerLeft from './InfoContainerLeft';
import InfoContainerRight from './InfoContainerRight';
import youtubeLogo from '../../assets/youtube.png';
import serverIcon from '../../assets/serverIcon.png';
import animationData from '../../assets/Animation - 1712301816131.json';
import humanIcon from '../../assets/human.png';
import songListIcon from '../../assets/songList.png';
import pickAnimation from '../../assets/pickInfo.json';
import decisionMadeIcon from '../../assets/decisionMade.png';
import loadDataIcon from '../../assets/loadData.png';
import loadingAnimation from '../../assets/loadingData.json';



function StepsCard() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '50px', fontFamily: 'sans-serif' }}>How is it working?</h2>
      <div>
        <InfoContainerLeft
          icon1={serverIcon}
          icon2={youtubeLogo}
          animationData={animationData}
          textContent={"The first step is to retrieve data from your YouTube account using the YouTube API. To accomplish this, our platform requests access to your YouTube account, allowing us to extract information about your playlists, favorite videos, and listening preferences. Once we have gathered this data, we process it to present it to you in an accessible manner."}
        />

        <InfoContainerRight
           icon1={humanIcon}
           icon2={songListIcon}
           animationData={pickAnimation}
           textContent={"The next step is yours. Choose a playlist from the list, and our platform will handle the rest. Using the YouTube API, we'll gather essential data like titles and artists from your selected playlist. Rest assured, your information is safe with us."}
           />

         <InfoContainerLeft 
           icon1={decisionMadeIcon}
           icon2={loadDataIcon}
           animationData={loadingAnimation}
           textContent={"Next, we'll create a new playlist on your Spotify account with a name of your choice. Using the Spotify API, we'll transfer all the music from your selected YouTube playlist. Songs will be added based on their titles and the names of the artists from YouTube."}
           />
      </div>
    </div>
  );
}

export default StepsCard;
