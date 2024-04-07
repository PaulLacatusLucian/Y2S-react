import React, { useState } from 'react';
import axios from 'axios';

const YoutubeAuthentication = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const authenticate = async () => {
    try {
      await axios.get('http://127.0.0.1:8000/youtube/authenticate/');
      setAuthenticated(true);
    } catch (error) {
      setAuthenticated(false);
    }
  };

  return (
    <div>
      <button onClick={authenticate}>Autentifică-te pe YouTube</button>
      <p>{authenticated ? 'Felicitări! Te-ai conectat.' : 'Nu te-ai conectat.'}</p>
    </div>
  );
};

export default YoutubeAuthentication;
