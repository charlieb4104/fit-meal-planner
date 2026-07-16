import { useState } from 'react'
import './App.css'

function App() {
  const [start, setStarted] = useState(false)

  if (!start){
    return(
      <div>
        <h1>Fit Meal Planner</h1>
        <button onClick={() => setStarted(true)}>Get Started</button>
      </div>
    );
  }



  return (
    <>
      <section id="center">
        <div>
          <h1>Fit Meal Planner</h1>
          <p>
            Your workouts and meals all in one place. Isn't that proper fit. 
          </p>
          <h2>Workout Preferences</h2>
          <label>How many days per week?</label>
          <input type="number"/>
          <br />
          <br />

          <label>
            Goal
          </label>

          <select>
            <option>Build Muscle</option>
            <option>Lose Fat</option>
            <option>Maintain Weight</option>
          </select>
        </div>
      </section>
    </>
  );
}

export default App
