import React, { useState, useRef, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import youtubeLogo from './assets/youtube.png';
import serverIcon from './assets/serverIcon.png';
import Lottie from 'lottie-react';
import animationData from './assets/Animation - 1712301816131.json';

function StepsCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [paragraphShown, setParagraphShown] = useState(false); // Starea care urmărește dacă paragraful a fost arătat sau nu
  const animationRef = useRef();
  const paragraphRef = useRef();

  useEffect(() => {
    // Oprirea animației când componenta este inițializată
    if (animationRef.current) {
      animationRef.current.pause();
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1 // Definim pragul la 0.5, ceea ce înseamnă că paragraful va fi considerat vizibil atunci când jumătate din el este vizibil
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setParagraphShown(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observăm paragraful folosind observerul de intersecție
    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    // Curățăm observerul la demontare
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (animationRef.current) {
      animationRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (animationRef.current) {
      animationRef.current.stop();
    }
  };

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
    flexShrink: '0',
    position: 'relative',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    marginRight: '20px',
  };

  const paragraphStyle = {
    textAlign: 'left',
    width: '400px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    lineHeight: '1.6',
    margin: '0',
    position: 'absolute',
    top: '50%',
    left: 'calc(100% + 20px)',
    transform: 'translateY(-50%)',
    opacity: (isHovered || paragraphShown) ? 1 : 0, // Folosim starea paragraphShown pentru a determina dacă paragraful trebuie să fie vizibil
    transition: 'opacity 0.3s ease',
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '50px', fontFamily: 'sans-serif' }}>How is it working?</h2>
      <div>
        <div
          style={containerStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={picuteContainer}>
            <Image src={serverIcon} roundedCircle style={imageStyle} />
            <Lottie
              style={imageStyle}
              animationData={animationData}
              lottieRef={animationRef}
            />
            <Image src={youtubeLogo} roundedCircle style={imageStyle} />
            <p ref={paragraphRef} style={paragraphStyle}>
              The first step is to retrieve data from your YouTube account using the YouTube API. To accomplish this, our platform requests access to your YouTube account, allowing us to extract information about your playlists, favorite videos, and listening preferences. Once we have gathered this data, we process it to present it to you in an accessible manner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepsCard;
