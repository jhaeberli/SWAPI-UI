import './App.css';
import { Planets } from "./components/planetsView/Planets"
import React, { useEffect, useState } from "react"
import { getPlanets } from "./components/services/swapiApiService"


function App() {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanets().then(response => setPlanets(response))
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          SWAPI-UI
        </p>
        <div>
          <Planets planets={ planets }/>
        </div>
      </header>
    </div>
  );
}

export default App;
