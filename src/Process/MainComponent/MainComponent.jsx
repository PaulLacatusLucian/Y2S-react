import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './MainComponent.css';
import Image from 'react-bootstrap/Image';
import youtubeIcon from '../../assets/youtube.png';
import spotifyIcon from '../../assets/spotify.png';
import pickPlaylistIcon from '../../assets/pickPlaylist.png';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/loadingAnimation.json';
import axios from 'axios';
import playlistPickedAnimation from '../../assets/playlistPicked.json';
import PlaylistComponent from '../../Requests/Playlist/PlaylistComponent'; // Importați PlaylistComponent

const MainComponent = ({ showOverlay, toggleOverlay }) => {
    const [youtubeAuthenticated, setYoutubeAuthenticated] = useState(false);
    const [spotifyAuthenticated, setSpotifyAuthenticated] = useState(false);
    const [playlistPicked, setPlaylistPicked] = useState(false); 
    const [animationPlayed, setAnimationPlayed] = useState(false);
    const [showPlaylistComponent, setShowPlaylistComponent] = useState(false); // Starea pentru controlul vizibilității PlaylistComponent

    useEffect(() => {
        if (playlistPicked) {
            setShowPlaylistComponent(false);
        }
    }, [playlistPicked]);

    const authenticateYoutube = async () => {
        try {
            await axios.get('http://127.0.0.1:8000/youtube/authenticate/');
            setYoutubeAuthenticated(true);
            setAnimationPlayed(true); // Setează animationPlayed la true după autentificare
        } catch (error) {
            setYoutubeAuthenticated(false);
        }
    };

    const authenticateSpotify = async () => {
        if (!youtubeAuthenticated) {
            alert('You need to authenticate with YouTube first!');
            return;
        }
        try {
            const response = await axios.get('http://127.0.0.1:8000/spotify/authenticate/');
            const authUrl = response.data.auth_url;
            window.location.href = authUrl; // Navighează către URL-ul de autentificare Spotify
            setSpotifyAuthenticated(true);
            setAnimationPlayed(true); // Setează animationPlayed la true după autentificare
        } catch (error) {
            console.error('Error authenticating with Spotify:', error);
            setSpotifyAuthenticated(false);
        }
    };

    const pickPlaylist = (confirmed) => {
        if (confirmed && youtubeAuthenticated && spotifyAuthenticated) {
            setAnimationPlayed(true);
            setShowPlaylistComponent(true); // Arată PlaylistComponent când este selectat un playlist
        } else {
            if (!youtubeAuthenticated) {
                alert('You need to authenticate with YouTube first!');
            } else if (!spotifyAuthenticated) {
                alert('You need to authenticate with Spotify first!');
            }
        }
    };

    const handlePlaylistPickerClose = () => {
        // setShowPlaylistComponent(false);
        setPlaylistPicked(true);
        toggleOverlay(); 
    };

    return (
        <div className="overlay">
            <div className="overlay-header">
                <h1>Start the process by following the steps:</h1>
            </div>
            <div className="overlay-content">
                <div className="content-item">
                    <Image src={youtubeIcon} alt="YouTube" roundedCircle />
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
                    <Image src={spotifyIcon} alt="Spotify" roundedCircle />
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
                    <Image src={pickPlaylistIcon} alt="Pick Playlist" roundedCircle />
                    {!playlistPicked ? (
                        <Button variant="outline-light" onClick={() => pickPlaylist(true)}>Pick Playlist</Button>
                    ) : animationPlayed ? (
                        <Lottie
                            animationData={playlistPickedAnimation}
                            loop={!animationPlayed}
                            autoplay
                            style={{ width: 75, height: 75}}
                        />
                    ) : null}
                </div>
            </div>
            {/* Renderizați PlaylistComponent condițional bazat pe starea showPlaylistComponent */}
            {showPlaylistComponent && <PlaylistComponent onClose={handlePlaylistPickerClose} />}
        </div>
    );
};

export default MainComponent;
