import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/loginForm';

import Button from 'react-bootstrap/Button';

function App() {
  return (
    <main className='main'>
      <div className=''>


          <LoginForm/>

    
      </div>
    </main>
  );
}

function Dados(){
  var senha = document.getElementById("inputPassword5".value)
  console.log(senha)
}


export default App;