import '../css/loginform.css';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function LoginForm() {
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
            
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicUser">
                    <Form.Label>Nome de usuario ou user</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter user"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        className='campo-lgpw'
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='campo-lgpw'
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>




            </Form>
        </div>
    );
}



export default LoginForm;
