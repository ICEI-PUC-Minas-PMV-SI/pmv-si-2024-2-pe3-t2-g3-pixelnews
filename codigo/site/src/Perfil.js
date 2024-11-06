import './css/users.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Gustavo from './img/gustavo.jpg';

export default function PerfilPag() {

    const comments = [
        { game: 'The Witcher 3', text: 'Jogo incrível, a história é fantástica!' },
        { game: 'Cyberpunk 2077', text: 'Ótimos gráficos e ambientação.' }
    ];

    return (
        <main className='main'>
            <Container className='corpoPerfil'>
                <Col>
                    <Row style={{marginBottom:'15px', display:'flex',alignItems:'center', justifyContent:'space-between',flexWrap:'wrap'}}>
                        {/* Cabeçalho do perfil */}
                        <div className='lMargin' style={{ marginTop: '1px', width:'45%' }}>
                            <br />
                            <div className='pCard'>
                                <div style={{display:'flex',flexDirection:'div'}}>
                                    <Image src={Gustavo} alt="Gustavo" fluid style={{ width: '10vw', borderRadius: "20px", margin: '20px' }} />
                                    <div style={{ minWidth: '300px', width: '25vw' }}>
                                        <h2 style={{ margin: '30px 30px 2px 30px' }}>Gustavo Silva</h2>
                                        <h5 style={{ marginLeft: '40px' }}>22 anos</h5>
                                        <h5 style={{ marginLeft: '40px', marginTop: '-5px' }}>Streamer</h5>
                                        <p style={{ margin: '15px 10px 10px 50px' }}>
                                            Olá! 😁
                                        </p>
                                    </div>
                                </div>
                                <Button variant='secondary' style={{ justifySelf: 'end', alignSelf: 'center', minWidth: '110px' }}>Editar Perfil</Button>
                            </div>
                           
                        </div>
                        {/* Jogos Favoritos */}
                        <div className='rMargin' style={{marginTop:'43px',width:'55%'}}>
                            <div className='fJogos'>
                                <h2>Jogos Favoritos</h2>
                                <br />
                                <div className='cJogos'>
                                    card
                                </div>

                            </div>
                            <br />
                        </div>
                    </Row>
                    <Row>
                        <h2>Atividades Recentes</h2>
                        <div className='cComentario'>
                            <div className='recent-comments'>
                                <h3>Comentários</h3>
                                <ul>
                                    {comments.map((comment, index) => (
                                        <li key={index}>
                                            <p><strong>{comment.game}</strong>: {comment.text}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </Row>
                </Col>
            </Container>

            <div className='fDiv'>
                <Footer />
            </div>
        </main>
    )
}
