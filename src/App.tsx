import { useState } from 'react'
import './App.css'

function App() {
  const [start, setStarted] = useState(false)
  const [selectedDays, setSelectedDays] = useState<string[]>([])
  const [enter, setEnter] = useState(false)

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

  let workoutPlan: string[] = [];

  if (selectedDays.length === 3){
    workoutPlan = ["Upper Body", "Lower Body", "Full Body and Cardio"];
  } else if (selectedDays.length === 4){
    workoutPlan = [
      "Upper Body", 
      "Lower Body", 
      "Full Body and Cardio", 
      "Core"];
  } else if (selectedDays.length >= 5){
    workoutPlan = [
      "Upper Body", 
      "Lower Body", 
      "Full Body", 
      "Cardio",
      "Core"
    ];
  }

  if(enter){
    return(
      <div>
        <h1>Your Workout Plan</h1>

        {selectedDays.map((day, index) => (
          <p key={day}>
            {day} - {workoutPlan[index] || "Cardio"}
          </p>
        ))}
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
        <button onClick={() => setEnter(true)}>Generate my plan!</button>
      </section>
    </>
  );
}

export default App
