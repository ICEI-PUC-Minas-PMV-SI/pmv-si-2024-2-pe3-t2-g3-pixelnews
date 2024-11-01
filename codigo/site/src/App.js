import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/loginForm';
import RecSenhaForm from './components/recSenha';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [rSenha, setrSenha] = useState(0);
  const [login, setLogin] = useState('');
  const [senha, setsenha] = useState('');
  return (
    <main className='main'>
      <div className='pagLogin'>
        {rSenha == 0 && <LoginForm Login={setLogin} senha={setsenha}/>}
        {rSenha == 1 && <RecSenhaForm />}




      </div>
      <div className='fDiv'>
        <Footer />
      </div>
    </main>
  );
}


export default App;