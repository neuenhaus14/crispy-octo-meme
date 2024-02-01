import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';


function App() {
  const [data, setData] = useState(null)

  useEffect (() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get("/api")
      console.log(data)
    } catch {
      console.log("error")
    }
  }
 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
