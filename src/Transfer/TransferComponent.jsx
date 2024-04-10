import React, { useState, useEffect } from 'react';
import './TransferComponent.css';
import Lottie from 'lottie-react';
import dataTransferAnimation from '../assets/dataTransfer.json';
import doneAnimation from '../assets/done.json';
import axios from 'axios';

const TransferOverlay = (props) => {
    const [isTransferring, setIsTransferring] = useState(false);
    const [showDoneAnimation, setShowDoneAnimation] = useState(false);
    const [canBeClosed, setCanBeClosed] = useState(false);

    const startTransfer = async () => {
        try {
            console.log('Starting transfer...');
            console.log('Youtube playlist id:', props.youtubePlaylistId);
            console.log('Spotify playlist id:', props.spotifyPlaylistId);

            setIsTransferring(true); // Setăm isTransferring pe true pentru a afișa animația

            const response = await axios.post('http://127.0.0.1:8000/make_transfer/', {
                youtube_playlist_id: props.youtubePlaylistId,
                spotify_playlist_id: props.spotifyPlaylistId,         
            });

            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('There was an error:', error);
        } finally {
            setIsTransferring(false);
            setShowDoneAnimation(true); 
        }
    };

    const handleDoneAnimationComplete = () => {
        setShowDoneAnimation(false);
        setCanBeClosed(true);
    };
    
    useEffect(() => {
        if (canBeClosed) {
            props.onClose();
        }
    }, [canBeClosed, props]);
    

    return (
        <div className="transferOverlay">
            {isTransferring ? (
                <Lottie animationData={dataTransferAnimation} />
            ) : showDoneAnimation ? (
                <Lottie loop={false}  style={{ height: '400px', width: '400px' }} animationData={doneAnimation} onComplete={handleDoneAnimationComplete} />
            ) : (
                <button onClick={startTransfer} disabled={isTransferring}>
                    Start Transfer
                </button>
            )}
        </div>
    );
};

export default TransferOverlay;
