import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then(response => setUser(response))
  }, []);

  useEffect(() => {
    fetch('/api/login')
      .then((response) => response.json())
      .then(response => setLogin(response))
  }, []);

  console.log(user);
  console.log(login);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Yours LOGINS
        </p>
          {
            login.map(item => (
              <ul key={item.id}>User { item.id }
                <li>Email: {item.email}</li>
                <li>Password {item.pass}</li>
              </ul>
            ))
          }
      </header>
    </div>
  );
}

export default App;
