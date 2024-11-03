import '../css/cadasForm.css';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Logo from '../img/file.png';



function CadUser({ mPag }) {
    const [nUser, setnUser] = useState('');
    const [nSenha, setnSenha] = useState('');
    const [cSenha, setcSenha] = useState('');
    const [nEmail, setnEmail] = useState('');
    const [nData, setnData] = useState('');
    const [nGenero, setnGenero] = useState('Não Especificado **');

// Criar a função de criação de usuario aqui, todos os dados já estão sendo coletados e apresentados aqui
    const handleSubmit = () => {
        console.log(nUser)
        console.log(nSenha)
        console.log(cSenha)
        console.log(nEmail)
        console.log(nData)
        console.log(nGenero)
    }
////////////////////////////////////////////////

    return (
        <div className='card-main'>
            <h1 style={{ marginBottom: '5px' }}>Cadastro</h1>
            <div className='card-body'>
                <div style={{ marginRight: 3 + 'em' }}>
                    <Image src={Logo} alt="Logo" fluid style={{ width: '50vw' }} />
                </div>
                <Form onSubmit={handleSubmit} >
                    <Form.Group controlId="formBasicUser" className='formB'>
                        <div className='divCard'>
                            <div>

                                <Form.Label>Nome de usuario *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nome de usuario"
                                    value={nUser}
                                    onChange={(e) => setnUser(e.target.value)}
                                    required
                                    className='campo-lgpw'
                                />
                            </div>
                            <br />
                            <div>
                                <Form.Label>Email *</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Insira o email"
                                    value={nEmail}
                                    onChange={(e) => setnEmail(e.target.value)}
                                    className='campo-lgpw'
                                    required
                                />
                            </div>
                        </div>
                        <br />
                        <div className='divCard'>
                            <div>
                                <Form.Label>Data de nascimento *</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={nData}
                                    onChange={(e) => setnData(e.target.value)}
                                    className='campo-lgpw'
                                    required
                                />
                            </div>
                            <br />
                            <div>
                                <Form.Label>Gênero **</Form.Label>
                                <Dropdown
                                    onSelect={(e) => { setnGenero(SplitGen(e)) }}
                                >
                                    <Dropdown.Toggle variant='light' id="dropdown-basic" className='dropGenero'>
                                        {nGenero}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ width: '100%' }}>
                                        <Dropdown.Item href="#/TsOjbyBFc3BlY2lmaWNhZG8=">Não Especificado</Dropdown.Item>
                                        <Dropdown.Item href="#/SG9tZW0=" >Homem</Dropdown.Item>
                                        <Dropdown.Item href="#/TXVsaGVy" >Mulher</Dropdown.Item>
                                        <Dropdown.Item href='#/T3V0cm9z'>Outros</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <br />
                        <div className='divCard'>
                            <div>
                                <Form.Label>Senha *</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Insira a senha"
                                    value={nSenha}
                                    onChange={(e) => setnSenha(e.target.value)}
                                    className='campo-lgpw'
                                    required
                                />
                            </div>
                            <br />
                            <div>
                                <Form.Label>Confirmar senha *</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirme a senha"
                                    value={cSenha}
                                    onChange={(e) => setcSenha(e.target.value)}
                                    className='campo-lgpw'
                                    required
                                />
                            </div>
                        </div>
                    </Form.Group>
                    <div className='divBtn'>
                        <Button variant="primary" type="submit" style={{ margin: '10px', width: '12vw', background: "#00FFFF", color: '#000' }}>
                            Cadastrar
                        </Button>
                        <Button variant="info" onClick={() => { mPag(0) }} type="button" style={{ margin: '10px', width: '12vw', background: '#CACACA', color: "#000" }}>
                            Voltar
                        </Button>
                    </div>
                    <p style={{ fontSize: "12px", paddingTop: '15px' }}>
                        (*) Campos obrigatórios <br />
                        (**) As opções “homem” e “mulher“ abrangem cisgêneros e transgêneros. A opção ”outros” inclui gênero fluido, não-binário, queer,
                        intersexo e outras identidades de gênero. Utilize a opção “não especificar” caso não queira preencher esse campo ou não
                        encontre a opção que mais se identifica.
                    </p>
                </Form>
            </div>
        </div>
    );
}

function SplitGen(e) {
    let vas = e.split('/')
    let ps = vas[1] == 'TsOjbyBFc3BlY2lmaWNhZG8=' ? 'Não especificado' : vas[1] == 'SG9tZW0=' ? 'Homem' : vas[1] == 'TXVsaGVy' ? 'Mulher' : vas[1] == 'T3V0cm9z' ? 'Outros' : ''
    return ps
}

export default CadUser;
