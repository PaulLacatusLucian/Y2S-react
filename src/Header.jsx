import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from './Icon.png';
import './Header.css'; // Importă fișierul CSS pentru stilizare

function Header() {

    const [navBackground, setNavBackground] = useState('transparent');

    const logoStyle = {
        maxHeight: '50px', 
        marginRight: '10px', 
    };

    const navbarStyle = {
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        position: 'fixed',
        width: '100%',
        zIndex: '1000',
        backgroundColor: navBackground,
        transition: 'background-color 0.3s ease',
    };

    const headerStyle = {
        backgroundColor: '#343a40',
        height: '500px', 
    };

    const h2Style = {
        fontSize: '50px', // Mărimea fontului pentru h2
        textAlign: 'center', // Aliniere text în centru
        textTransform: 'uppercase', // Transformă textul în majuscule
        lineHeight: '1.5', // Spațierea între linii pentru o prezentare mai bună
        margin: '0', // Elimină marginile implicite
        paddingTop: '150px',
        color: "white",
        fontFamily: 'Sans-serif', // Specifică familia de fonturi
        fontWeight: 'bold', 
    };

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const changePoint =  75;

        if (currentScrollPos < changePoint) {
            setNavBackground('transparent');
        } else {
            setNavBackground('#212529');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header style={headerStyle}>
            <Navbar style={navbarStyle} variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img style={logoStyle} src={logo} alt="Site Logo"></img>
                        YoutubeToSpotify
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#informations">Informations</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h2 style={h2Style}>Transfer your music from <br></br> YouTube to Spotify</h2>
            <button className="button">Try it out now</button>
        </header>
    );
}

export default Header;
