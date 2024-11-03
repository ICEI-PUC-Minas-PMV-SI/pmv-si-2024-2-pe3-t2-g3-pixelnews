import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/loginForm';
import CadUser from './components/CadUser';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [rSenha, setrSenha] = useState(0);

  const setPag = (e) => {
    setrSenha(e)
  }

  return (
    <main className='main'>
      <div className='pagLogin'>
        {rSenha == 0 && <LoginForm mPag={setPag} />}
        {rSenha == 1 && <CadUser mPag={setPag}/>}




      </div>
      <div className='fDiv'>
        <Footer />
      </div>
    </main>
  );
}


export default App;