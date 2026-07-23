import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Fit Meal Planner</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/meals">Meals</Link>
        <Link to="/shopping">Shopping</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;