import React, { useState, useRef, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Lottie from 'lottie-react';

function InfoContainer({ icon1, icon2, animationData, textContent }) {
  const [isHovered, setIsHovered] = useState(false);
  const [paragraphShown, setParagraphShown] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Starea care urmărește vizibilitatea paragrafului
  const animationRef = useRef();
  const paragraphRef = useRef();

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.pause();
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Definim pragul la 0.5, ceea ce înseamnă că paragraful va fi considerat vizibil atunci când jumătate din el este vizibil
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setParagraphShown(true);
        } else {
          setParagraphShown(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const paragraphTop = paragraphRef.current.getBoundingClientRect().top;
      setIsVisible(paragraphTop < window.innerHeight * 0.8); // Setăm starea de vizibilitate în funcție de poziția paragrafului pe ecran
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    opacity: (isHovered || paragraphShown || isVisible) ? 1 : 0,
    transition: 'opacity 0.3s ease',
  };

  return (
    <div>
      <div
        style={containerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={picuteContainer}>
          <Image src={icon1} roundedCircle style={imageStyle} />
          <Lottie
            style={imageStyle}
            animationData={animationData}
            lottieRef={animationRef}
          />
          <Image src={icon2} roundedCircle style={imageStyle} />
          <p ref={paragraphRef} style={paragraphStyle}> {textContent} </p>
        </div>
      </div>
    </div>
  );
}

export default InfoContainer;
