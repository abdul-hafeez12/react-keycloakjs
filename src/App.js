import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './config/authcontext';

function App() {
  const {isAuthenticated,keyclok} = useAuth();
  console.log(isAuthenticated);
  return (
    <div className="App">
      <header className="App-header">
        <Toaster />
        {
          isAuthenticated ? <div>
            <h1>Welcome to OAuth2 Client!</h1>
            <p>You are logged In!!</p>
            <h2>Username : {(keyclok === null)? "": keyclok.idTokenParsed.name}</h2>
            <button className='button-27' onClick={() => {
              keyclok.logout();
            }}>Logout</button>
          </div> : <div>
          <h1>Login Required !!</h1>
          <button className='button-27' onClick={() => {
            keyclok.login();
          }}
           >Login</button>
          </div>
        }
        
      </header>
    </div>
  );
}

export default App;
