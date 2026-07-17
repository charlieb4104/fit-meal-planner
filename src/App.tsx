import { useState } from 'react'
import './App.css'

function App() {
  const [start, setStarted] = useState(false)
  const [selectedDays, setSelectedDays] = useState<string[]>([])
  const [enter, setEnter] = useState(false)
  const [edit, setEdit] = useState(false)

  const [workoutPlan, setWorkoutPlan] = useState<string[]>([])
  

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday" 
  ];


  if (!start){
    return(
      <div>
        <h1>Fit Meal Planner</h1>
        <button onClick={() => setStarted(true)}>Get Started</button>
      </div>
    );
  }

  const generatePlan = () => {
  if (selectedDays.length === 3){
    setWorkoutPlan(["Upper Body", "Lower Body", "Full Body and Cardio"]);
  } else if (selectedDays.length === 4){
    setWorkoutPlan([
      "Upper Body", 
      "Lower Body", 
      "Full Body and Cardio", 
      "Core"]);
  } else if (selectedDays.length >= 5){
    setWorkoutPlan([
      "Upper Body", 
      "Lower Body", 
      "Full Body", 
      "Cardio",
      "Core"
    ])};
    setEnter(true);
  }

  if(enter){
    return(
      <div>
        <h1>Your Workout Plan</h1>

        {selectedDays.map((day, index) => (
          <div key={day}>
            <h3>{day}</h3>
            {edit ? (
              <select
                value={workoutPlan[index]}
                onChange={(e) => {
                  const newPlan = [...workoutPlan];
                  newPlan[index] = e.target.value;
                  setWorkoutPlan(newPlan);
                }}
              >
                <option value="Upper Body">Upper Body</option>
                <option value="Lower Body">Lower Body</option>
                <option value="Full Body">Full Body</option>
                <option value="Cardio">Cardio</option>
                <option value="Core">Core</option>
              </select>
            ) : (
              <p>{workoutPlan[index]}</p>
            )}
          </div>
        ))}
        {edit && (
          <button onClick={() => setEdit(false)}>Save Plan</button>
        )}
        {!edit && (
          <button onClick={() => setEdit(true)}>Edit Plan</button>
        )}
      </div>
    )
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Fit Meal Planner</h1>
          <p>
            Your workouts and meals all in one place. Isn't that proper fit. 
          </p>
          <br />
          <h2>Workout Preferences</h2>
          <br/>
          <label>Select workout days</label>
          <br />
          {days.map((day) => (
            <div key={day}>
              <input
                type="checkbox"
                id={day}
                checked={selectedDays.includes(day)}
                onChange={() => {
                  if (selectedDays.includes(day)) {
                    setSelectedDays(selectedDays.filter((d) => d !== day));
                  } else {
                    setSelectedDays([...selectedDays, day]);
                  }
                }}
              />
              <label htmlFor={day}>{day}</label>
            </div>
          ))}
          <br />
          <br />
        </div>
        <button onClick={() => generatePlan()}>Generate my plan!</button>
      </section>
    </>
  );
}

export default App
