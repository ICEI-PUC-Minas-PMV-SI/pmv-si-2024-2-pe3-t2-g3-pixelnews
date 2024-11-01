import '../css/loginform.css';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Logo from '../img/file.png';



function RecSenhaForm(login,senha) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode enviar os dados para o servidor ou processá-los conforme necessário
        console.log('user:', user);
        console.log('Senha:', password);
    };

    return (
        <div className='card-main'>
            <h1 style={{ marginBottom: 1 + 'em' }}>Pixel News</h1>
            <div className='card-body'>
                <div style={{marginRight:3+'em'}}>
                <Image src={Logo} alt="Logo" fluid style={{width:'25vw'}} />
                        
                </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicUser">
                    <Form.Label>Nome de usuario ou email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira o usuário ou senha"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        className='campo-lgpw'
                    />
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Insira a senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                    <Button variant="primary" type="submit" style={{margin:'10px', width:'12vw', background:"#00FFFF", color:'#000'}}>
                        Logar
                    </Button>
                    <Button variant="success" type="submit" style={{margin:'10px',width:'12vw', background:'#7CFC00', color: "#000"}}>
                        Cadastrar
                    </Button>
                </div>




            </Form>

            </div>
        </div>
    );
}



export default RecSenhaForm;
