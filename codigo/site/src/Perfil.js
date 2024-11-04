import './css/users.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { useState } from 'react';
import { Button, Container, Image, Row } from 'react-bootstrap';
import Gustavo from './img/gustavo.jpg';

export default function PerfilPag() {


    return (
        <main className='main'>
            <Container className='corpoPerfil'>
            {/* Cabeçalho do perfil */}
                <Row style={{ marginTop: '50px'}}>
                    <br/>
                    <div className='pCard'>
                        <Image src={Gustavo} alt="Gustavo" fluid style={{ width: '10vw', borderRadius: "20px", margin: '20px' }} />
                        <div style={{minWidth: '300px', width:'25vw'}}>
                            <h2 style={{ margin: '30px 30px 2px 30px' }}>Gustavo Silva</h2>
                            <h5 style={{ marginLeft: '40px' }}>22 anos</h5>
                            <h5 style={{ marginLeft: '40px', marginTop: '-5px' }}>Streamer</h5>
                            <p style={{margin:'15px 10px 10px 50px'}}>
                                Olá! 😁
                            </p>
                        </div>
                        <Button variant='secondary' style={{justifySelf:'end',alignSelf:'start', margin:'40px', minWidth:'110px'}}>Editar Perfil</Button>
                    </div>
                    <hr/>
                </Row>
                {/* Jogos Favoritos */}
                <Row>

                    
                    <div>

                    </div>
                    <hr/>
                </Row>
                <Row>
                    
                    <div>

                    </div>
                </Row>
            </Container>

            <div className='fDiv'>
                <Footer />
            </div>
        </main>
    )
}
