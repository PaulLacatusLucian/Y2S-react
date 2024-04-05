import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/Icon.png';
import background from '../assets/background.jpg';
import './Header.css'; 

function Header() {

    const [navBackground, setNavBackground] = useState('transparent');
    const [menuOpen, setMenuOpen] = useState(false);

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
        backgroundColor: menuOpen ? '#101010' : navBackground,
        transition: 'background-color 0.3s ease',
    };

    const headerStyle = {
        backgroundColor: '#343a40',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    };

    const contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '500px', 
        padding: '50px 0 20px', 
    };

    const h2Style = {
        fontSize: '50px', 
        textAlign: 'center', 
        textTransform: 'uppercase',
        lineHeight: '1.5',
        margin: '0',
        color: "white",
        fontFamily: 'Sans-serif',
        fontWeight: 'bold', 
    };

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const changePoint =  75;

        if (currentScrollPos < changePoint) {
            setNavBackground('transparent');
        } else {
            setNavBackground('#101010');
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                    <Navbar.Toggle onClick={toggleMenu} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                        <Nav.Link active={window.scrollY > 10} href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Steps</Nav.Link>
                            <Nav.Link href="#informations">Informations</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={contentStyle}>
                <h2 style={h2Style}>Transfer your music from <br /> YouTube to Spotify</h2>
                <button className="button">Try it out now</button>
            </div>
        </header>
    );
}

export default Header;
