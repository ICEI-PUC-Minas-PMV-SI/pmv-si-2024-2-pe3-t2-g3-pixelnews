import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importando ícones de redes sociais
import Logo from '../img/file.png'; // Caminho da sua imagem


const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#363636', padding: '5px 0', height:'15vh'}}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={4} className="text-center">
                        <Image src={Logo} alt="Logo" fluid style={{ maxHeight: '80px' }} />
                    </Col>
                    <Col md={4} className="text-center">
                        <h5 style={{color:"#FFF",  fontSize: '20px'}}>Siga-nos</h5>
                        <div>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} className="mr-3" style={{color:"#FFF"}}/>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={30} className="mr-3" style={{color:"#FFF"}}/>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} className="mr-3" style={{color:"#FFF"}}/>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} style={{color:"#FFF"}}/>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <p style={{ marginTop: '-15px', color:"#FFF", fontSize: '10px' }}>
                            © {new Date().getFullYear()} PixelNews. Todos os direitos reservados.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
