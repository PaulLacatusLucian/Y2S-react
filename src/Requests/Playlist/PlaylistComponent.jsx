import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PlaylistComponent.css'; // Importul fișierului CSS pentru stiluri

const PlaylistComponent = () => {
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/youtube/getPlaylists/');
        setPlaylists(response.data.playlists);
      } catch (error) {
        setError('Error fetching playlists');
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div className="playlist-container">
      {error && <p>{error}</p>}
      <div className="playlist-grid">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="playlist-item">
            <img src={playlist.thumbnail} alt={playlist.title} />
            <h3>{playlist.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistComponent;
