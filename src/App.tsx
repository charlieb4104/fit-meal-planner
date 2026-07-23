import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WorkoutPlanner from "./pages/WorkoutPlanner";
import MealPlanner from "./pages/MealPlanner";
import ShoppingList from "./pages/ShoppingList";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/workouts" 
          element={<WorkoutPlanner />} 
        />

        <Route 
          path="/meals" 
          element={<MealPlanner />} 
        />

        <Route 
          path="/shopping" 
          element={<ShoppingList />} 
        />

        <Route 
          path="/login" 
          element={<Login />} 
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;