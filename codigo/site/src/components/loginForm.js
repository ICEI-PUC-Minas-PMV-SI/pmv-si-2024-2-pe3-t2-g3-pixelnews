import '../css/loginform.css';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Logo from '../img/file.png';


function LoginForm({mPag}) {
    const [login, setLogin] = useState('');
    const [senha, setsenha] = useState('');


// Função de realizar login, só alterar aqui
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('login:', login);
        console.log('Senha:', senha);
    };
//////////////////////////////

    return (
        <div className='card-main'>
            <h1 style={{ marginBottom: '10px' }}>Pixel News</h1>
            <div className='card-body'>
                <div style={{marginRight:3+'em'}}>
                <Image src={Logo} alt="Logo" fluid style={{width:'25vw'}} />
                        
                </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicLogin">
                    <Form.Label>Nome de usuario ou email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira o usuário ou senha"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        className='campo-lgpw'
                    />
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicsenha">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Insira a senha"
                        value={senha}
                        onChange={(e) => setsenha(e.target.value)}
                        className='campo-lgpw'
                    />
                    <Form.Check
                        label='Lembrar senha?'
                        onChange={(e) => console.log(e.target.value)}
                        style={{marginTop:'10px'}}
                    />
                    <a href=''>Esqueceu a senha?</a>
                </Form.Group>


                <div className='divBtn'>
                    <Button variant="primary" type="submit" style={{margin:'10px', width:'12vw', background:"#00FFFF", color:'#000'}} href='/perfil'>
                        Logar
                    </Button>
                    <Button variant="success" onClick={()=>{mPag(1)}} type="button" style={{margin:'10px',width:'12vw', background:'#7CFC00', color: "#000"}}>
                        Cadastrar
                    </Button>
                </div>




            </Form>

            </div>
        </div>
    );
}



export default LoginForm;
