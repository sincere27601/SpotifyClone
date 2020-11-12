import React, { useEffect,useState } from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import spotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new spotifyWebApi();

function App() {
  const [token,setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if (_token) {
      setToken(_token);
    }

    spotify.setAccessToken(_token);

    spotify.getMe().then(user => {
      console.log(user);
    });

    console.log("I HAVE A TOKEN" , token);
  }, []);
  
  return (
    
    <div className="App">
    {
      token ? (
        <h1> I have logged in</h1>
      ) : (
        <Login />
      )
    }
     
      
    <Login />
    </div>
  );
}

export default App;
