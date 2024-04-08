import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './MainComponent.css';
import Image from 'react-bootstrap/Image';
import youtubeIcon from '../../assets/youtube.png';
import spotifyIcon from '../../assets/spotify.png';
import pickPlaylistIcon from '../../assets/pickPlaylist.png';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/loadingAnimation.json';
import axios from 'axios';

const MainComponent = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [youtubeAuthenticated, setYoutubeAuthenticated] = useState(false);
    const [spotifyAuthenticated, setSpotifyAuthenticated] = useState(false);
    const [animationPlayed, setAnimationPlayed] = useState(false);


    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };

    const authenticateYoutube = async () => {
        try {
            await axios.get('http://127.0.0.1:8000/youtube/authenticate/');
            setYoutubeAuthenticated(true);
            setAnimationPlayed(true); // Setează animationPlayed la true după ce s-a autentificat
        } catch (error) {
            setYoutubeAuthenticated(false);
        }
    };

    const authenticateSpotify = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/spotify/authenticate/');
            const authUrl = response.data.auth_url;
            window.location.href = authUrl; // Navighează către URL-ul de autentificare Spotify
            setSpotifyAuthenticated(true);
            setAnimationPlayed(true); // Setează animationPlayed la true după ce s-a autentificat
        } catch (error) {
            console.error('Error authenticating with Spotify:', error);
            setSpotifyAuthenticated(false);
        }
    };
    
    
    
    
    

    return (
        <div>
            <button onClick={toggleOverlay}>Open Overlay</button>
            {showOverlay && (
                <div className="overlay">
                    <div className="overlay-header">
                        <h1>Start the process by following the steps:</h1>
                    </div>
                    <div className="overlay-content">
                        <div className="content-item">
                            <Image src={youtubeIcon} alt="Image 2" roundedCircle />
                            {!youtubeAuthenticated ? (
                                <Button variant="outline-light" onClick={authenticateYoutube}>YouTube</Button>
                            ) : (
                                <Lottie
                                    animationData={loadingAnimation}
                                    loop={!animationPlayed}
                                    autoplay
                                    style={{ width: 70, height: 70 }}
                                />
                            )}
                        </div>
                        <div className="content-item">
                            <Image src={spotifyIcon} alt="Image 2" roundedCircle />
                            {!spotifyAuthenticated ? (
                                <Button variant="outline-light" onClick={authenticateSpotify}>Spotify</Button>
                            ) : (
                                <Lottie
                                    animationData={loadingAnimation}
                                    loop={!animationPlayed}
                                    autoplay
                                    style={{ width: 70, height: 70 }}
                                />
                            )}
                        </div>
                        <div className="content-item">
                            <Image src={pickPlaylistIcon} alt="Image 3" roundedCircle />
                            <Button variant="outline-light">Pick Playlist</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainComponent;
