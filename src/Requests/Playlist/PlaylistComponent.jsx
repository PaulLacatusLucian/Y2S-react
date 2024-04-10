import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import './PlaylistPickerOverlay.css'; 
import TransferComponent from '../../Transfer/TransferComponent'; // Importați componenta TransferOverlay

const PlaylistPickerOverlay = ({ onClose }) => {
    const [playlists, setPlaylists] = useState([]);
    const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPlaylistOverlay, setShowPlaylistOverlay] = useState(true); // Starea pentru controlul afișării overlay-ului
    const [playlistName, setPlaylistName] = useState('');
    const [isPrivate, setIsPrivate] = useState(false); 
    const [createdPlaylistId, setCreatedPlaylistId] = useState(0);
    const [youtubePlaylistId, setYoutubePlaylistId] = useState(0);
    const [showTransferComponent, setShowTransferComponent] = useState(false); // Starea pentru controlul vizibilității TransferComponent

    useEffect(() => {
        if (showPlaylistOverlay) {
            fetchPlaylists();
        }
    }, [showPlaylistOverlay]);

    useEffect(() => {
        if (!showPlaylistOverlay) {
            setShowTransferComponent(true);
            console.log('Created playlist:', createdPlaylistId);
            console.log('Youtube playlist:', youtubePlaylistId);
        }
    }, [showPlaylistOverlay, createdPlaylistId, youtubePlaylistId]);

    const fetchPlaylists = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('http://127.0.0.1:8000/youtube/getPlaylists/');
            setPlaylists(response.data.playlists);
            setIsLoading(false);
        } catch (error) {
            setError('Error fetching playlists');
            setIsLoading(false);
        }
    };

    const handlePlaylistSelection = (playlistId) => {
        setSelectedPlaylistId(playlistId);
        setYoutubePlaylistId(playlistId);
    };

    const handleConfirm = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/spotify/createPlaylist/', {
                playlist_name: playlistName,
                is_public: !isPrivate,
            });
            if (response.status === 200) {
                setCreatedPlaylistId(response.data.playlist_id);
                setShowPlaylistOverlay(false);
            }
        } catch (error) {
            console.error('Error creating playlist:', error);
        }
    };

    return (
        <div>
            <div className={`overlay-container ${showPlaylistOverlay ? 'show' : ''}`}>
                <div className="playlistOverlay">
                    <div className="playlistOverlay-header">
                        <h1>Select a playlist</h1>
                    </div>
                    <div className="playlistOverlay-content">
                        {isLoading && <p>Loading playlists...</p>}
                        {error && <p>{error}</p>}
                        {playlists.map((playlist) => (
                            <div key={playlist.id} className="playlist-item">
                                <Image src={playlist.thumbnail} alt={playlist.title} roundedCircle />
                                <input
                                    type="radio"
                                    id={`playlist-${playlist.id}`}
                                    name="playlist"
                                    value={playlist.id}
                                    checked={selectedPlaylistId === playlist.id}
                                    onChange={() => handlePlaylistSelection(playlist.id)}
                                />
                                <label htmlFor={`playlist-${playlist.id}`}>{playlist.title}</label>
                            </div>
                        ))}
                    </div>
                    <div className="playlistOverlay-input">
                        <input
                            type="text"
                            placeholder="Playlist Name"
                            value={playlistName}
                            onChange={(e) => setPlaylistName(e.target.value)}
                        />
                        <label>
                            <input
                                type="checkbox"
                                checked={isPrivate}
                                onChange={(e) => setIsPrivate(e.target.checked)}
                            />
                            Private
                        </label>
                    </div>
                    <div className="playlistOverlay-footer">
                        <Button variant="primary" onClick={handleConfirm} disabled={!selectedPlaylistId}>Confirm</Button>
                    </div>
                </div>
            </div>
            {showTransferComponent && <TransferComponent
                youtubePlaylistId={youtubePlaylistId}
                spotifyPlaylistId={createdPlaylistId}
            />}
        </div>
    );
};

export default PlaylistPickerOverlay;
