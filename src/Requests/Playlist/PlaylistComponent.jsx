import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import './PlaylistPickerOverlay.css'; // Importați fișierul CSS cu stilurile pentru overlay

const PlaylistPickerOverlay = ({ onClose }) => {
    const [playlists, setPlaylists] = useState([]);
    const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showOverlay, setShowOverlay] = useState(false); // Starea pentru controlul afișării overlay-ului
    const [playlistName, setPlaylistName] = useState(''); // Starea pentru numele playlistului
    const [isPrivate, setIsPrivate] = useState(false); // Starea pentru opțiunea de privat/public
    const [playlistDescription, setPlaylistDescription] = useState(''); // Starea pentru descrierea playlistului

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };

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

    useEffect(() => {
        if (showOverlay) {
            fetchPlaylists();
        }
    }, [showOverlay]);

    const handlePlaylistSelection = (playlistId) => {
        setSelectedPlaylistId(playlistId);
    };

    const handleConfirm = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/spotify/createPlaylist/', {
                playlist_name: playlistName,
                is_public: !isPrivate,
                description: playlistDescription
            });
            console.log('Playlist created successfully with ID:', response.data.playlist_id);
            toggleOverlay();
            if (onClose && typeof onClose === 'function') {
                onClose();
            }
        } catch (error) {
            console.error('Error creating playlist:', error);
        }
    };
    
    return (
        <div>
            {/* Butonul care deschide overlay-ul */}
            <Button variant="primary" onClick={toggleOverlay}>Open Overlay</Button>
            
            {/* Overlay-ul */}
            {showOverlay && (
                <div className={`overlay-container ${showOverlay ? 'show' : ''}`}>
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
                            {/* Butonul care apelează funcția handleConfirm la click */}
                            <Button variant="primary" onClick={handleConfirm} disabled={!selectedPlaylistId}>Confirm</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlaylistPickerOverlay;
