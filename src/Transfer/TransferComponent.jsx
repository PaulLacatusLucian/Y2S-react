import React, { useState } from 'react';
import './TransferComponent.css';
import Lottie from 'lottie-react';
import dataTransferAnimation from '../assets/dataTransfer.json';
import axios from 'axios'; // Importă Axios pentru a face cereri HTTP

const TransferOverlay = (props) => {
    const [animationPlayed, setAnimationPlayed] = useState(false);

    const startTransfer = async () => {
        try {
            const response = await axios.post('make_transfer/', {
                youtube_playlist_id: props.youtubePlaylistId,
                spotify_playlist_id: props.spotifyPlaylistId,         
            });

            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }

            console.log(response.data); // Afișează datele primite de la server în consolă
            setAnimationPlayed(true); // Setăm animationPlayed pe true după ce transferul este completat
        } catch (error) {
            console.error('There was an error:', error);
        }
    };

    return (
        <div>
            <div className="transferOverlay">
                {!animationPlayed ? (
                    <button onClick={startTransfer}>Start Transfer</button>
                ) : (
                    <Lottie animationData={dataTransferAnimation} />
                )}
            </div>
        </div>
    );
};

export default TransferOverlay;
