import React, { useState, useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Lottie from 'lottie-react';

function StepsCard(props) {
  const animationRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Oprirea animației când componenta este inițializată
    if (animationRef.current) {
      animationRef.current.pause();
    }
  }, []);

  const smallImgStyle = {
    width: '80px',
    height: '80px',
    margin: 'auto'
  };

  const borderColor = props.color;
  const cardStyle = {
    width: '20rem',
    borderRadius: '30px',
    borderColor: borderColor,
    transition: 'transform 0.3s ease, border-width 0.3s ease',
    borderWidth: isHovered ? '5px' : '1px',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  const lottieContainerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
  };

  const lottieStyle = {
    width: props.animationData.w <= 128 ? `${props.animationData.w * 1.5}px` : '200px',
    height: props.animationData.h <= 128 ? `${props.animationData.h * 1.5}px` : '200px',
  };

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

  return (
    <Card
      className={isHovered ? 'zoom-in' : ''}
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        // Redare animație la clic
        if (animationRef.current) {
          animationRef.current.play();
        }
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgSource}
        style={smallImgStyle}
      />
      <Card.Body>
        <Card.Title
          className={isHovered ? 'card-title hovered' : 'card-title'}
          style={{ textAlign: 'center' }}
        >
          {props.title}
        </Card.Title>
        <div style={lottieContainerStyle}>
          <Lottie
            lottieRef={animationRef}
            style={lottieStyle}
            animationData={props.animationData}
          />
        </div>
        {props.content}
      </Card.Body>
    </Card>
  );
}

export default StepsCard;
