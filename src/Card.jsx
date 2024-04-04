import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function StepsCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  const smallImgStyle = {
    width: '80px',
    height: '80px', 
    margin: 'auto' 
  }
  
  const borderColor = props.color;
  const cardStyle = {
    width: '20rem',
    borderRadius: '30px',
    borderColor: borderColor, 
    transition: 'transform 0.3s ease, border-width 0.3s ease',
    borderWidth: isHovered ? '5px' : '1px',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

    const largeImgStyle = {
        marginTop: '15px', 
        width: '100%',
        borderRadius: '50px',
    }

  return (
    <Card 
      className={isHovered ? 'zoom-in' : ''}
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card.Img 
        variant="top" 
        src={props.imgSource} 
        style={smallImgStyle}
      />
      <Card.Body>
        <Card.Title 
          className={isHovered ? 'card-title hovered' : 'card-title'} 
          style={{textAlign: 'center'}}
        >
          {props.title}
        </Card.Title>
        <Card.Img 
          src={props.imgSource2} 
          style={largeImgStyle} 
        />
        {props.content}
      </Card.Body>
    </Card>
  );
}

export default StepsCard;
